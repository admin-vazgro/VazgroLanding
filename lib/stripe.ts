import Stripe from 'stripe';
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

export async function createCheckoutSession({
  packageId, packageName, price, currency = 'gbp',
  customerEmail, leadId, successUrl, cancelUrl,
}: {
  packageId: string; packageName: string; price: number; currency?: string;
  customerEmail: string; leadId: string; successUrl: string; cancelUrl: string;
}) {
  return stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: customerEmail,
    line_items: [{
      price_data: {
        currency,
        unit_amount: price * 100,
        product_data: {
          name: `Vazgro — ${packageName}`,
          description: `Fixed-fee project package. Reference: ${leadId}`,
        },
      },
      quantity: 1,
    }],
    metadata: { leadId, packageId },
    success_url: successUrl,
    cancel_url: cancelUrl,
    billing_address_collection: 'required',
    custom_fields: [{ key: 'company_name', label: { type: 'custom', custom: 'Company name' }, type: 'text', optional: true }],
  });
}

export async function createSubscriptionCheckout({
  planId, planName, price, currency = 'gbp',
  customerEmail, leadId, successUrl, cancelUrl,
}: {
  planId: string; planName: string; price: number; currency?: string;
  customerEmail: string; leadId: string; successUrl: string; cancelUrl: string;
}) {
  // Minimum 3-month commitment billed monthly via subscription
  const product = await stripe.products.create({ name: `Vazgro GROW — ${planName}` });
  const stripePlan = await stripe.prices.create({
    unit_amount: price * 100, currency, recurring: { interval: 'month' }, product: product.id,
  });
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: customerEmail,
    line_items: [{ price: stripePlan.id, quantity: 1 }],
    metadata: { leadId, planId },
    subscription_data: { metadata: { leadId, planId, minMonths: '3' } },
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
}
