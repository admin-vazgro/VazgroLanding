import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Vazgro Ltd privacy policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-[84px] sm:pt-[100px] pb-16 sm:pb-24">
      <div className="page-wrap max-w-[720px]">
        <span className="eyebrow">Legal</span>
        <h1 className="type-h1 text-[30px] sm:text-[42px] mb-6">
          Privacy <span className="serif-italic">Policy</span>
        </h1>
        <p className="text-[13px] text-muted mb-8">Last updated: March 2026</p>

        <div className="prose-vazgro space-y-6 text-[14px] sm:text-[15px] text-ink-2 leading-[1.72]">
          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">1. Who we are</h2>
            <p>Vazgro Ltd is a digital agency registered in England & Wales, operating from London, UK. When we refer to &ldquo;Vazgro&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;, we mean Vazgro Ltd.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">2. What data we collect</h2>
            <p>We collect information you provide directly: name, email address, phone number, company name, project requirements, and payment information (processed securely via Stripe or Razorpay — we do not store card details).</p>
            <p className="mt-2">We also collect basic analytics data (page views, device type, referral source) via Google Analytics to improve our website.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">3. How we use your data</h2>
            <p>We use your data to: respond to enquiries, deliver services, process payments, send project updates, and improve our website. We will never sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">4. Data storage & security</h2>
            <p>Your data is stored securely on encrypted servers. Payment data is processed by Stripe and Razorpay under their own PCI-DSS compliant security measures. We retain lead data for a maximum of 24 months after your last interaction.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">5. Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct, delete, or export your personal data. To exercise these rights, email <a href="mailto:privacy@vazgro.com" className="text-blue no-underline hover:underline">privacy@vazgro.com</a>.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">6. Cookies</h2>
            <p>We use essential cookies for site functionality and analytics cookies (Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="font-bold text-[17px] text-ink mb-2">7. Contact</h2>
            <p>For privacy-related enquiries, email <a href="mailto:privacy@vazgro.com" className="text-blue no-underline hover:underline">privacy@vazgro.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
