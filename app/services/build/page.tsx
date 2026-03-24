import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BuildPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="page-wrap">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/build' }, { name: 'BUILD', href: '/services/build' }]} className="mb-5" />
          <div className="page-hero-copy parallax-layer" data-parallax="14">
            <span className="eyebrow">🔧 BUILD</span>
            <h1 className="type-h1 text-[32px] sm:text-[48px] lg:text-[64px] mb-4">
              Custom apps, AI &<br />
              <span className="serif-italic">digital builds.</span>
            </h1>
            <p className="type-body text-ink-2 max-w-[500px] mb-7">
              Senior engineers who think like founders. Design-led, AI-assisted, outcome-obsessed. From MVP to enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-dark btn-lg rounded-full justify-center sm:justify-start">Book a Free Strategy Call →</Link>
              <Link href="/work" className="link-arrow self-center sm:self-auto">See our BUILD work →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* What we build */}
      <section className="section-pad border-b border-rule">
        <div className="page-wrap">
          <div className="parallax-layer" data-parallax="10">
            <span className="eyebrow">What we build</span>
            <h2 className="type-h2 text-[26px] sm:text-[36px] lg:text-[44px] mb-8 sm:mb-10">
            From idea to <span className="serif-italic">live product.</span>
            </h2>
          </div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-parallax="18">
            {[
              { ico: '🚀', color: '#E03D00', t: 'MVP Development', d: 'Go from validated idea to working product in 4–8 weeks. Design, develop, test, launch.', items: ['Full-stack Next.js / React Native', 'Supabase or custom backend', 'Stripe payments built in', 'Deployed on Vercel / AWS'] },
              { ico: '🤖', color: '#1400FF', t: 'AI Development', d: 'Custom AI solutions — chatbots, document processing, workflow automation, RAG pipelines.', items: ['OpenAI, Anthropic, open-source LLMs', 'RAG pipelines & embeddings', 'Custom training & fine-tuning', 'GDPR-compliant architecture'] },
              { ico: '⚙️', color: '#1A6B54', t: 'Custom Software', d: 'Bespoke internal tools, SaaS platforms, API integrations, and enterprise applications.', items: ['Full-stack development', 'Third-party API integrations', 'Database design & migration', 'CI/CD & DevOps setup'] },
              { ico: '📱', color: '#7C3AED', t: 'Mobile Apps', d: 'Cross-platform mobile applications built with React Native. iOS and Android from one codebase.', items: ['React Native / Expo', 'Push notifications', 'App Store submission', 'Backend API development'] },
              { ico: '🔄', color: '#E09000', t: 'Sprint Retainers', d: 'Ongoing development capacity for businesses with continuous build needs. Predictable, flexible, scalable.', items: ['Dedicated dev team', 'Sprint-based delivery', 'Weekly sync calls', 'Flexible scope changes'] },
              { ico: '🤝', color: '#0E0D09', t: 'Co-Founder Model', d: 'We invest our time for equity. For the right idea, we become your technical co-founder.', items: ['Sweat equity partnership', 'CTO-level technical leadership', 'Architecture & team building', 'Investor-ready product'] },
            ].map(item => (
              <div key={item.t} className="info-card surface-card-hover sm:px-7 sm:py-7">
                <div className="text-[24px] mb-4">{item.ico}</div>
                <h3 className="font-extrabold text-[16px] sm:text-[17px] tracking-[-0.02em] mb-2">{item.t}</h3>
                <p className="text-[13px] text-muted leading-relaxed mb-4">{item.d}</p>
                <div className="space-y-1.5">
                  {item.items.map(i => (
                    <div key={i} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-ink-2">
                      <span className="font-bold text-[10px] mt-0.5 flex-shrink-0" style={{ color: item.color }}>→</span>{i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing overview */}
      <section className="bg-cream-2 border-b border-rule section-pad">
        <div className="page-wrap">
          <div className="parallax-layer text-center mb-10" data-parallax="10">
            <span className="eyebrow">Transparent pricing</span>
            <h2 className="type-h2 text-[26px] sm:text-[34px]">BUILD <span className="serif-italic">pricing guide</span></h2>
            <p className="type-body text-muted mt-2 max-w-[440px] mx-auto">Every project is scoped individually. Here are typical ranges to help you budget.</p>
          </div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-parallax="16">
            {[
              { t: 'MVP Fast-Track', price: '£3,999–£8,000', time: '4–8 weeks', desc: 'Working product with core features' },
              { t: 'AI Project', price: '£5,000–£15,000', time: '3–8 weeks', desc: 'Custom AI solution, deployed & documented' },
              { t: 'Custom Platform', price: '£10,000–£25,000+', time: '8–16 weeks', desc: 'Full SaaS or enterprise application' },
              { t: 'Sprint Retainer', price: '£2,500–£8,000/mo', time: 'Ongoing', desc: 'Dedicated dev capacity, sprint-based' },
            ].map(p => (
              <div key={p.t} className="info-card text-center">
                <div className="font-bold text-[14px] mb-2">{p.t}</div>
                <div className="serif-italic text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] text-warm mb-1">{p.price}</div>
                <div className="text-[12px] text-muted mb-2">{p.time}</div>
                <p className="text-[12px] text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad border-b border-rule">
        <div className="page-wrap">
          <div className="parallax-layer text-center mb-10" data-parallax="10">
            <span className="eyebrow">Our process</span>
            <h2 className="type-h2 text-[26px] sm:text-[34px]">How we <span className="serif-italic">BUILD.</span></h2>
          </div>
          <div className="parallax-layer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" data-parallax="18">
            {[
              { n: '01', t: 'Discovery', d: 'Free strategy call. Understand scope, goals, constraints.' },
              { n: '02', t: 'Proposal', d: '48-hour turnaround. Detailed scope, timeline, fixed price.' },
              { n: '03', t: 'Sprint 0', d: 'Design system, architecture decisions, dev environment.' },
              { n: '04', t: 'Build', d: 'Agile sprints. Weekly demos. Continuous deployment.' },
              { n: '05', t: 'Launch', d: 'Production deployment, handover docs, 2-week support.' },
            ].map(s => (
              <div key={s.n} className="info-card-compact">
                <div className="text-warm text-[11px] font-bold uppercase tracking-[0.1em] mb-2">{s.n}</div>
                <div className="font-bold text-[14px] mb-1.5">{s.t}</div>
                <p className="text-[12px] sm:text-[13px] text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-ink py-14 sm:py-20 text-center">
        <div className="page-wrap max-w-[540px] parallax-layer" data-parallax="16">
          <h2 className="type-h2 text-[26px] sm:text-[38px] text-white mb-4">
            Got an idea? <span className="serif-italic text-[rgba(255,255,255,0.35)]">Let&apos;s build it.</span>
          </h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7">
            Free 30-minute strategy call. Detailed proposal within 48 hours.
          </p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Book Your Strategy Call →</Link>
        </div>
      </div>
    </>
  );
}
