/**
 * Payment Gateway Abstraction
 *
 * Provides a unified interface for both Stripe and Razorpay.
 * The gateway is selected based on geo-detection (see lib/geo.ts)
 * or can be explicitly specified.
 *
 * Usage:
 *   const result = await createPayment({ gateway: 'stripe', ... });
 *   // or
 *   const result = await createPayment({ gateway: 'razorpay', ... });
 */

import { createCheckoutSession, createSubscriptionCheckout } from './stripe';
import { createRazorpayOrder, createRazorpaySubscription } from './razorpay';
import { convertFromGBP } from './geo';

export type Gateway = 'stripe' | 'razorpay';

export interface PaymentRequest {
  gateway: Gateway;
  type: 'payment' | 'subscription';
  // Package / plan info
  itemId: string;
  itemName: string;
  priceGBP: number;       // Always in GBP — we convert
  currency: string;       // Target currency (e.g. 'INR', 'USD')
  // Customer
  customerEmail: string;
  leadId: string;
  // URLs (Stripe only — Razorpay handles client-side)
  successUrl?: string;
  cancelUrl?: string;
}

export interface PaymentResult {
  gateway: Gateway;
  // For Stripe: redirect URL
  redirectUrl?: string;
  // For Razorpay: order/subscription details for client-side checkout
  razorpayOrderId?: string;
  razorpaySubscriptionId?: string;
  razorpayKeyId?: string;
  amount?: number;
  currency?: string;
}

export async function createPayment(req: PaymentRequest): Promise<PaymentResult> {
  const localAmount = req.currency === 'GBP' ? req.priceGBP : convertFromGBP(req.priceGBP, req.currency);

  if (req.gateway === 'razorpay') {
    return createRazorpayPayment(req, localAmount);
  }

  return createStripePayment(req, localAmount);
}

/* ─── Stripe path ─── */
async function createStripePayment(req: PaymentRequest, amount: number): Promise<PaymentResult> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (req.type === 'subscription') {
    const session = await createSubscriptionCheckout({
      planId: req.itemId,
      planName: req.itemName,
      price: amount,
      currency: req.currency.toLowerCase(),
      customerEmail: req.customerEmail,
      leadId: req.leadId,
      successUrl: req.successUrl || `${baseUrl}/payment/success?gateway=stripe`,
      cancelUrl: req.cancelUrl || `${baseUrl}/services/grow?cancelled=1`,
    });
    return { gateway: 'stripe', redirectUrl: session.url! };
  }

  const session = await createCheckoutSession({
    packageId: req.itemId,
    packageName: req.itemName,
    price: amount,
    currency: req.currency.toLowerCase(),
    customerEmail: req.customerEmail,
    leadId: req.leadId,
    successUrl: req.successUrl || `${baseUrl}/payment/success?gateway=stripe`,
    cancelUrl: req.cancelUrl || `${baseUrl}/services/launch?cancelled=1`,
  });

  return { gateway: 'stripe', redirectUrl: session.url! };
}

/* ─── Razorpay path ─── */
async function createRazorpayPayment(req: PaymentRequest, amount: number): Promise<PaymentResult> {
  const amountInSmallestUnit = amount * 100; // paise

  if (req.type === 'subscription') {
    const sub = await createRazorpaySubscription({
      planName: req.itemName,
      amount: amountInSmallestUnit,
      currency: req.currency,
      notes: { leadId: req.leadId, planId: req.itemId },
    });

    return {
      gateway: 'razorpay',
      razorpaySubscriptionId: sub.id,
      razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: amountInSmallestUnit,
      currency: req.currency,
    };
  }

  const order = await createRazorpayOrder({
    amount: amountInSmallestUnit,
    currency: req.currency,
    receipt: req.leadId,
    notes: { leadId: req.leadId, packageId: req.itemId },
  });

  return {
    gateway: 'razorpay',
    razorpayOrderId: order.id,
    razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: amountInSmallestUnit,
    currency: req.currency,
  };
}
