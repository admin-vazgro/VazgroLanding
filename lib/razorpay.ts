/**
 * Razorpay integration — order creation + verification
 *
 * Used for India/APAC payments as an alternative to Stripe.
 * Requires RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in env.
 */

import crypto from 'crypto';

const RAZORPAY_BASE = 'https://api.razorpay.com/v1';

function getAuth() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) throw new Error('Razorpay keys not configured');
  return Buffer.from(`${keyId}:${keySecret}`).toString('base64');
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  status: string;
  receipt: string;
}

/**
 * Create a Razorpay order for one-off payment
 */
export async function createRazorpayOrder({
  amount,
  currency = 'INR',
  receipt,
  notes,
}: {
  amount: number;       // In smallest unit (paise for INR)
  currency?: string;
  receipt: string;
  notes?: Record<string, string>;
}): Promise<RazorpayOrder> {
  const res = await fetch(`${RAZORPAY_BASE}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getAuth()}`,
    },
    body: JSON.stringify({
      amount,
      currency,
      receipt,
      notes: notes || {},
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Razorpay order creation failed: ${err}`);
  }

  return res.json();
}

/**
 * Create a Razorpay subscription plan + subscription
 */
export async function createRazorpaySubscription({
  planName,
  amount,
  currency = 'INR',
  interval = 'monthly',
  notes,
}: {
  planName: string;
  amount: number;       // In smallest unit
  currency?: string;
  interval?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  notes?: Record<string, string>;
}) {
  // Step 1: Create a plan
  const planRes = await fetch(`${RAZORPAY_BASE}/plans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getAuth()}`,
    },
    body: JSON.stringify({
      period: interval,
      interval: 1,
      item: {
        name: `Vazgro GROW — ${planName}`,
        amount,
        currency,
      },
    }),
  });

  if (!planRes.ok) throw new Error('Razorpay plan creation failed');
  const plan = await planRes.json();

  // Step 2: Create subscription
  const subRes = await fetch(`${RAZORPAY_BASE}/subscriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${getAuth()}`,
    },
    body: JSON.stringify({
      plan_id: plan.id,
      total_count: 12,  // Max billing cycles
      quantity: 1,
      notes: notes || {},
    }),
  });

  if (!subRes.ok) throw new Error('Razorpay subscription creation failed');
  return subRes.json();
}

/**
 * Verify Razorpay payment signature
 */
export function verifyRazorpaySignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) return false;

  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(body)
    .digest('hex');

  return expectedSignature === signature;
}

/**
 * Verify Razorpay webhook signature
 */
export function verifyRazorpayWebhook(body: string, signature: string): boolean {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) return false;

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(body)
    .digest('hex');

  return expectedSignature === signature;
}
