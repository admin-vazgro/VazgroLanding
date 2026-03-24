import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vazgro — UK Digital Agency Built by Practitioners',
  description: 'Vazgro is a London-based digital agency built for UK SMEs. One roof, three disciplines: design, development, and marketing. Transparent pricing, real results.',
  alternates: { canonical: 'https://vazgro.com/about' },
  openGraph: { title: 'About Vazgro', description: 'UK digital agency built by practitioners, for ambitious businesses.', url: 'https://vazgro.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-wrap">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} className="mb-5" />
          <div className="page-hero-copy parallax-layer" data-parallax="14">
            <span className="eyebrow">About Vazgro</span>
            <h1 className="type-h1 text-[30px] sm:text-[46px] lg:text-[62px] mb-4">Built by digital practitioners —<br /><span className="serif-italic">for ambitious businesses.</span></h1>
            <p className="type-body text-ink-2">We started Vazgro because UK SMEs were overpaying for mediocre agency work. There had to be a better model.</p>
          </div>
        </div>
      </div>

      <section className="section-pad border-b border-rule">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="parallax-layer" data-parallax="12">
              <span className="eyebrow">Our story</span>
              <h2 className="type-h2 text-[26px] sm:text-[36px] lg:text-[44px] mb-5">One roof. <span className="serif-italic">Three disciplines.</span></h2>
              <p className="type-body text-muted mb-4">The idea behind Vazgro is simple: most growing businesses need design, development, and marketing — but the market forces them to hire three separate agencies, each with their own processes and pricing.</p>
              <p className="type-body text-muted">We built Vazgro to be the single digital growth partner for UK SMEs — with a model for every stage and a price that makes sense.</p>
            </div>
            <div className="parallax-layer flex flex-col gap-4" data-parallax="18">
              {[
                ['🎯', 'Our mission', 'To make high-quality digital services accessible and affordable for UK businesses at every stage of growth.'],
                ['👥', 'Who we serve', 'UK SMEs, startups, and growing businesses who need a digital partner they can trust — not a ticket-processing machine.'],
                ['📍', 'Based in London', 'Our team is UK-based, working UK hours. A real person to call. Serving clients across the country.'],
              ].map(([ico, t, d]) => (
                <div key={t} className="info-card surface-card-hover">
                  <div className="text-[18px] mb-2.5">{ico}</div>
                  <h3 className="font-bold text-[14px] sm:text-[15px] mb-2">{t}</h3>
                  <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-2 border-b border-rule section-pad">
        <div className="page-wrap">
          <div className="parallax-layer text-center mb-10 sm:mb-12" data-parallax="10"><span className="eyebrow">What we stand for</span><h2 className="type-h2 text-[26px] sm:text-[36px] lg:text-[44px]">Our values</h2></div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" data-parallax="18">
            {[
              ['🔍', 'Radical transparency', 'Every price on our website is the price you pay. We tell you when something is out of scope — before, not after the invoice.'],
              ['⚡', 'Speed without sacrifice', 'Fast delivery does not mean cutting corners. We use AI-assisted workflows to move quickly while delivering quality.'],
              ['🤝', 'Partnership, not vendor', 'Your PM knows your business and goals. We push back when something will not work. Your success matters more.'],
              ['📈', 'Outcomes over outputs', 'We measure by results, not deliverables. If a strategy is not working, we will tell you and recommend something better.'],
            ].map(([ico, t, d]) => (
            <div key={t} className="info-card surface-card-hover sm:px-8 sm:py-8">
              <div className="text-[20px] sm:text-[22px] mb-4">{ico}</div>
              <h3 className="font-bold text-[15px] sm:text-[17px] tracking-[-0.01em] mb-2.5">{t}</h3>
              <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-ink py-16 sm:py-20 lg:py-24 text-center">
        <div className="page-wrap max-w-[540px] parallax-layer" data-parallax="16">
          <h2 className="type-h2 text-[26px] sm:text-[38px] lg:text-[50px] text-white mb-4">Want to work <span className="serif-italic text-[rgba(255,255,255,0.35)]">with us?</span></h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7 sm:mb-8">Book a free strategy call. No pitch, no pressure.</p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Get in Touch →</Link>
        </div>
      </div>
    </>
  );
}
