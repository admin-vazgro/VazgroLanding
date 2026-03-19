import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Vazgro Ltd terms of service — the legal agreement governing our services.',
};

export default function TermsPage() {
  return (
    <div className="pt-[84px] sm:pt-[100px] pb-16 sm:pb-24">
      <div className="page-wrap max-w-[720px]">
        <span className="eyebrow">Legal</span>
        <h1 className="type-h1 text-[30px] sm:text-[42px] mb-6">
          Terms of <span className="serif-italic">Service</span>
        </h1>
        <p className="text-[13px] text-muted mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-[14px] sm:text-[15px] text-ink-2 leading-[1.72]">
          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">1. Services</h2>
            <p>Vazgro Ltd provides digital agency services including web design, branding, AI development, and marketing under three service models: LAUNCH (fixed-fee), GROW (subscription), and BUILD (custom scoping). All deliverables, timelines, and pricing are confirmed before work begins.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">2. Payment</h2>
            <p>LAUNCH packages require full payment upfront via Stripe or Razorpay. GROW subscriptions are billed monthly with a minimum 3-month commitment. BUILD projects follow a milestone-based payment schedule agreed in the project proposal.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">3. Revisions & delivery</h2>
            <p>LAUNCH packages include 2 rounds of revisions. GROW subscriptions include unlimited revisions. Delivery timelines are estimated and we work to meet them, but they are not legally binding guarantees.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">4. Intellectual property</h2>
            <p>Upon full payment, all deliverables and source files become your property. We retain the right to showcase completed work in our portfolio unless you request otherwise in writing.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">5. Cancellation & refunds</h2>
            <p>LAUNCH packages: refunds are available if work has not yet started. Once work begins, partial refunds may be offered at our discretion. GROW subscriptions: you may cancel after the minimum commitment period with 30 days notice.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">6. Liability</h2>
            <p>Vazgro Ltd liability is limited to the total amount paid for the relevant service. We are not liable for indirect or consequential losses.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">7. Governing law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the English courts.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">8. Contact</h2>
            <p>For questions about these terms, email <a href="mailto:legal@vazgro.com" className="text-blue no-underline hover:underline">legal@vazgro.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
