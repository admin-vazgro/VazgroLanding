import { packages } from '@/lib/data/packages';
import { growPlans } from '@/lib/data/grow-plans';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Transparent Pricing for All Services',
  description: 'Full pricing for Vazgro LAUNCH packages (from £149), GROW subscriptions (from £349/mo), and BUILD custom projects (from £3,999). No hidden costs.',
  alternates: { canonical: 'https://vazgro.com/pricing' },
  openGraph: { title: 'Vazgro Pricing', description: 'Transparent pricing. No surprises. Ever.', url: 'https://vazgro.com/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <div className="bg-white border-b border-rule pt-[84px] sm:pt-[100px] pb-10 sm:pb-12 text-center">
        <div className="page-wrap parallax-layer" data-parallax="12">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} className="mb-5 justify-center" />
          <span className="eyebrow">Transparent pricing</span>
          <h1 className="type-h1 text-[30px] sm:text-[46px] lg:text-[58px] mb-3">No surprises. <span className="serif-italic">Ever.</span></h1>
          <p className="type-body text-muted max-w-[440px] mx-auto">All LAUNCH and GROW prices are final. BUILD is scoped individually — proposal within 48 hours.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="page-wrap">
          <div className="parallax-layer" data-parallax="8">
            <span className="eyebrow">⚡ LAUNCH — Fixed-fee packages</span>
            <h2 className="type-h2 text-[22px] sm:text-[28px] mb-6 sm:mb-8">One-off packages</h2>
          </div>
          {/* Mobile cards */}
          <div className="parallax-layer sm:hidden space-y-3 mb-14" data-parallax="14">
            {packages.map(p => (
              <div key={p.id} className="bg-white border border-rule rounded-xl p-4 flex items-center justify-between">
                <div><div className="font-bold text-[14px]">{p.icon} {p.name}</div><div className="text-[12px] text-muted">⏱ {p.deliveryDays} days</div></div>
                <div className="text-right"><div className="font-extrabold text-[17px] serif-italic">£{p.price.toLocaleString()}</div><Link href="/services/launch" className="text-[11px] font-bold text-blue no-underline">Start →</Link></div>
              </div>
            ))}
          </div>
          {/* Desktop table */}
          <div className="parallax-layer hidden sm:block border border-rule rounded-xl overflow-hidden bg-white mb-14" data-parallax="14">
            <div className="grid px-5 sm:px-6 py-3 border-b border-rule bg-cream-2" style={{ gridTemplateColumns: '2.5fr 1fr 1fr 110px' }}>
              {['Package', 'Price', 'Delivery', ''].map(h => <span key={h} className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{h}</span>)}
            </div>
            {packages.map((p, i) => (
              <div key={p.id} className={`grid px-5 sm:px-6 py-3.5 border-b last:border-b-0 border-rule items-center hover:bg-cream transition-colors ${i % 2 === 1 ? 'bg-[rgba(246,244,238,0.4)]' : ''}`} style={{ gridTemplateColumns: '2.5fr 1fr 1fr 110px' }}>
                <span className="text-[13px] sm:text-[14px] font-medium">{p.icon} {p.name}</span>
                <span className="serif-italic text-[16px] sm:text-[18px]">£{p.price.toLocaleString()}</span>
                <span className="text-[12px] sm:text-[13px] text-muted">⏱ {p.deliveryDays} days</span>
                <Link href="/services/launch" className="text-[12px] font-bold text-center py-2 px-3 border border-rule rounded-lg text-ink no-underline hover:bg-ink hover:text-cream hover:border-ink transition-all">Start →</Link>
              </div>
            ))}
          </div>

          <div className="parallax-layer" data-parallax="8">
            <span className="eyebrow">📈 GROW — Monthly subscriptions</span>
            <h2 className="type-h2 text-[22px] sm:text-[28px] mb-2 sm:mb-3">Recurring plans</h2>
            <p className="type-body text-muted mb-8">All plans: dedicated PM, unlimited revisions, Slack access. Min. 3-month commitment. Cancel anytime after.</p>
          </div>
          {['Design', 'Dev', 'Social'].map(track => (
            <div key={track} className="parallax-layer mb-8" data-parallax="14">
              <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted mb-3 pb-2 border-b border-rule">{track} Track</div>
              <div className="sm:hidden space-y-3">
                {growPlans.filter(p => p.track === track).map(p => (
                  <div key={p.id} className="bg-white border border-rule rounded-xl p-4 flex items-center justify-between">
                    <div><div className="font-bold text-[14px]">{p.name}{p.popular && <span className="ml-2 text-[10px] bg-blue-lt text-blue px-2 py-0.5 rounded-full font-bold">Popular</span>}</div><div className="text-[11px] text-muted mt-0.5">{p.capacity}</div></div>
                    <div className="text-right"><div className="font-extrabold text-[17px] serif-italic">£{p.price.toLocaleString()}<span className="text-[12px] font-sans font-normal text-muted">/mo</span></div><Link href="/services/grow" className="text-[11px] font-bold text-blue no-underline">Enquire →</Link></div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:block border border-rule rounded-xl overflow-hidden bg-white">
                {growPlans.filter(p => p.track === track).map((p, i) => (
                  <div key={p.id} className={`grid px-5 sm:px-6 py-4 border-b last:border-b-0 border-rule items-center hover:bg-cream transition-colors ${i % 2 === 1 ? 'bg-[rgba(246,244,238,0.4)]' : ''}`} style={{ gridTemplateColumns: '1.5fr 1fr 2fr 120px' }}>
                    <div className="font-bold text-[14px]">{p.name}{p.popular && <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.08em] bg-blue-lt text-blue px-2 py-0.5 rounded-full">Popular</span>}</div>
                    <div className="serif-italic text-[18px]">£{p.price.toLocaleString()}<span className="text-[12px] font-sans font-normal text-muted">/mo</span></div>
                    <div className="text-[12px] text-muted">{p.capacity}</div>
                    <Link href="/services/grow" className="text-[12px] font-bold text-center py-2 px-3 border border-rule rounded-lg text-ink no-underline hover:bg-ink hover:text-cream hover:border-ink transition-all">Enquire →</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="parallax-layer mt-12 bg-white border border-rule rounded-xl p-8 sm:p-10 text-center max-w-[540px] mx-auto" data-parallax="16">
            <div className="text-[32px] mb-4">🔧</div>
            <h3 className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] mb-2">BUILD — Custom scoping</h3>
            <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed mb-6">MVPs, AI products, sprint retainers, and co-founder partnerships. Book a free call and receive a detailed proposal within 48 hours.</p>
            <Link href="/contact" className="btn btn-dark btn-md rounded-lg justify-center">Book a Free Strategy Call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
