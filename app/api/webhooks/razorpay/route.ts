import { NextRequest, NextResponse } from 'next/server';
import { verifyRazorpayWebhook } from '@/lib/razorpay';
import { updateLead } from '@/lib/crm';

/**
 * POST /api/webhooks/razorpay
 * Handles Razorpay payment events
 */
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('x-razorpay-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  // Verify webhook signature
  const isValid = verifyRazorpayWebhook(body, signature);
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    const event = JSON.parse(body);
    const eventType = event.event;

    if (eventType === 'payment.captured' || eventType === 'order.paid') {
      const payment = event.payload?.payment?.entity;
      const notes = payment?.notes || {};
      const leadId = notes.leadId;

      if (leadId) {
        await updateLead(leadId, {
          paid: true,
          step: 'paid',
          razorpayOrderId: payment?.order_id,
        });
      }
    }

    if (eventType === 'subscription.activated') {
      const subscription = event.payload?.subscription?.entity;
      const notes = subscription?.notes || {};
      const leadId = notes.leadId;

      if (leadId) {
        await updateLead(leadId, {
          paid: true,
          step: 'paid',
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (e: any) {
    console.error('Razorpay webhook error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
