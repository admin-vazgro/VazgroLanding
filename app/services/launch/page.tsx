'use client';
import { useState } from 'react';
import Link from 'next/link';
import { packages, Package } from '@/lib/data/packages';
import LaunchModal from '@/components/modals/LaunchModal';
import Breadcrumbs from '@/components/Breadcrumbs';

const categories = ['All', ...Array.from(new Set(packages.map(p => p.category)))];

export default function LaunchPage() {
  const [filter, setFilter] = useState('All');
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const filtered = filter === 'All' ? packages : packages.filter(p => p.category === filter);

  return (
    <>
      <div className="page-hero">
        <div className="page-wrap">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/launch' }, { name: 'LAUNCH', href: '/services/launch' }]} className="mb-5" />
          <div className="page-hero-copy parallax-layer" data-parallax="14">
            <span className="eyebrow">⚡ LAUNCH</span>
            <h1 className="type-h1 text-[32px] sm:text-[48px] lg:text-[64px] mb-4">
              Fixed price.<br /><span className="serif-italic">Fast delivery.</span>
            </h1>
            <p className="type-body text-ink-2 max-w-[480px]">
              Buy exactly what you need — websites, branding, AI tools — at a price you know upfront. No surprises, no scope creep. Delivered in days, not months.
            </p>
          </div>
        </div>
      </div>

      <div className="metric-strip">
        <div className="page-wrap">
          <div className="metric-strip-grid parallax-layer" data-parallax="10">
            {[['From £149', 'Starting price'], ['3–21 days', 'Delivery window'], ['Fixed price', 'No hidden costs'], ['2 revisions', 'Included free']].map(([n, l]) => (
              <div key={n}><div className="text-[16px] sm:text-[18px] font-extrabold tracking-[-0.02em] serif-italic">{n}</div><div className="text-[11px] sm:text-[12px] text-muted">{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="page-wrap">
          <div className="parallax-layer flex flex-wrap gap-2 mb-8 sm:mb-10" data-parallax="8">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-[12px] sm:text-[13px] font-semibold rounded-full border transition-all cursor-pointer font-sans ${filter === cat ? 'bg-ink text-cream border-ink' : 'bg-white text-muted border-rule hover:border-ink hover:text-ink'}`}>{cat}</button>
            ))}
          </div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-parallax="18">
            {filtered.map(pkg => (
              <article key={pkg.id} className="info-card surface-card-hover flex flex-col relative">
                {pkg.popular && <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full bg-blue-lt text-blue border border-[rgba(20,0,255,0.12)]">Popular</span>}
                <div className="text-[24px] mb-3">{pkg.icon}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-2">{pkg.category}</div>
                <h2 className="font-extrabold text-[16px] sm:text-[18px] tracking-[-0.02em] mb-1.5">{pkg.name}</h2>
                <p className="text-[13px] text-muted leading-relaxed mb-4 flex-1">{pkg.description}</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="serif-italic text-[28px] sm:text-[32px] font-extrabold tracking-[-0.03em] leading-none">£{pkg.price.toLocaleString()}</span>
                  <span className="text-[12px] text-muted mb-1">⏱ {pkg.deliveryDays} days</span>
                </div>
                <div className="space-y-1.5 mb-5">
                  {pkg.features.map(f => (<div key={f} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-ink-2"><span className="text-blue font-bold text-[10px] mt-0.5 flex-shrink-0">✓</span>{f}</div>))}
                </div>
                <button onClick={() => setSelectedPkg(pkg)} className="w-full py-3 bg-ink text-cream rounded-lg font-bold text-[13px] sm:text-[14px] cursor-pointer hover:bg-ink-2 transition-colors border-none font-sans">Start This Package →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section — renders the questions that are in the JSON-LD above for human readability */}
      <section className="bg-cream-2 border-y border-rule section-pad">
        <div className="page-wrap">
          <div className="parallax-layer text-center mb-10" data-parallax="10"><span className="eyebrow">FAQ</span><h2 className="type-h2 text-[26px] sm:text-[36px]">Frequently asked <span className="serif-italic">questions</span></h2></div>
          <div className="parallax-layer max-w-[680px] mx-auto space-y-4" data-parallax="16">
            {[
              { q: 'How long does a LAUNCH package take?', a: 'LAUNCH packages are delivered in 3–21 days depending on the package. Landing pages take 3 days, websites 7–14 days, and e-commerce sites up to 21 days.' },
              { q: 'Are LAUNCH prices fixed?', a: 'Yes. Every LAUNCH price on our website is the final price. No hidden costs, no scope creep. You pay upfront and we deliver.' },
              { q: 'How many revisions are included?', a: 'All LAUNCH packages include 2 rounds of revisions at no additional cost.' },
              { q: 'What payment methods do you accept?', a: 'We accept card payments via Stripe (UK, EU, US) and Razorpay (India). Payment is required upfront before work begins.' },
              { q: 'Can I upgrade my package later?', a: 'Absolutely. Many clients start with a Starter Site and upgrade to a Business Site or add an AI chatbot once they see initial results.' },
            ].map(faq => (
              <div key={faq.q} className="info-card-compact">
                <h3 className="font-bold text-[14px] sm:text-[15px] mb-2">{faq.q}</h3>
                <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-ink py-14 sm:py-20 text-center">
        <div className="page-wrap max-w-[540px] parallax-layer" data-parallax="16">
          <h2 className="type-h2 text-[26px] sm:text-[38px] text-white mb-4">Not sure which <span className="serif-italic text-[rgba(255,255,255,0.35)]">package?</span></h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7">Book a free 15-minute call and we will recommend the right fit.</p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Book a Free Call →</Link>
        </div>
      </div>

      {selectedPkg && <LaunchModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />}
    </>
  );
}
