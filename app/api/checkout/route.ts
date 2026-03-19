import { NextRequest, NextResponse } from 'next/server';
import { createPayment } from '@/lib/payment';
import { updateLead } from '@/lib/crm';
import { getGeoFromRequest } from '@/lib/geo';

/**
 * POST /api/checkout
 *
 * Accepts:
 *   type: 'payment' | 'subscription'
 *   packageId / planId
 *   packageName / planName
 *   price (in GBP)
 *   customerEmail
 *   leadId
 *   gateway?: 'stripe' | 'razorpay' (auto-detected if omitted)
 *   currency?: string (auto-detected if omitted)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      type = 'payment',
      packageId,
      packageName,
      planId,
      planName,
      price,
      customerEmail,
      leadId,
      gateway: explicitGateway,
      currency: explicitCurrency,
    } = body;

    // Auto-detect geo if gateway/currency not provided
    const geo = getGeoFromRequest(req.headers);
    const gateway = explicitGateway || geo.gateway;
    const currency = explicitCurrency || geo.currency;

    const itemId = type === 'subscription' ? planId : packageId;
    const itemName = type === 'subscription' ? planName : packageName;

    const result = await createPayment({
      gateway,
      type,
      itemId,
      itemName,
      priceGBP: price,
      currency,
      customerEmail,
      leadId,
    });

    // Update lead with payment info
    const updateData: Record<string, unknown> = { country: geo.country };
    if (result.redirectUrl) {
      updateData.stripeSessionId = result.redirectUrl;
    }
    if (result.razorpayOrderId) {
      updateData.razorpayOrderId = result.razorpayOrderId;
    }
    await updateLead(leadId, updateData as any);

    return NextResponse.json({
      gateway: result.gateway,
      url: result.redirectUrl || null,
      razorpayOrderId: result.razorpayOrderId || null,
      razorpaySubscriptionId: result.razorpaySubscriptionId || null,
      razorpayKeyId: result.razorpayKeyId || null,
      amount: result.amount || null,
      currency: result.currency || currency,
    });
  } catch (e: any) {
    console.error('Checkout error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
