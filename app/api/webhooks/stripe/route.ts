import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { updateLead } from '@/lib/crm';

/**
 * POST /api/webhooks/stripe
 * Handles Stripe payment events — checkout completed + subscription events
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (e: any) {
    console.error('Stripe webhook signature verification failed:', e.message);
    return NextResponse.json({ error: e.message }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const leadId = session.metadata?.leadId;
        if (leadId) {
          await updateLead(leadId, {
            paid: true,
            step: 'paid',
            stripeSessionId: session.id,
          });
        }
        break;
      }

      case 'invoice.paid': {
        // Subscription renewal payment
        const invoice = event.data.object as any;
        const subMeta = invoice.subscription_details?.metadata;
        const leadId = subMeta?.leadId;
        if (leadId) {
          await updateLead(leadId, { paid: true });
        }
        break;
      }

      case 'customer.subscription.deleted': {
        // Subscription cancelled
        const sub = event.data.object as any;
        const leadId = sub.metadata?.leadId;
        if (leadId) {
          await updateLead(leadId, { step: 'basic' as any });
        }
        break;
      }

      default:
        // Unhandled event type — acknowledge silently
        break;
    }
  } catch (e: any) {
    console.error('Stripe webhook processing error:', e);
    // Return 200 even on processing errors to prevent Stripe retries
    // that would fail the same way
  }

  return NextResponse.json({ received: true });
}
