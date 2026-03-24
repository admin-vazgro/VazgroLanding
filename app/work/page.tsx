import Link from 'next/link';
import { caseStudies } from '@/lib/data/case-studies';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — Case Studies & Portfolio',
  description: 'Real projects, real results. See how Vazgro helped UK businesses grow with web design, AI development, and monthly design subscriptions.',
  alternates: { canonical: 'https://vazgro.com/work' },
  openGraph: { title: 'Our Work | Vazgro', description: 'Case studies from LAUNCH, GROW, and BUILD projects.', url: 'https://vazgro.com/work' },
};

export default function WorkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-wrap">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Work', href: '/work' }]} className="mb-5" />
          <div className="page-hero-copy">
            <span className="eyebrow">Our Work</span>
            <h1 className="type-h1 text-[38px] sm:text-[56px] lg:text-[70px] mb-4">Projects we&apos;re <span className="serif-italic">proud of.</span></h1>
            <p className="type-body text-ink-2">A selection of LAUNCH, GROW, and BUILD projects. All results client-verified.</p>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="page-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {caseStudies.map(cs => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} className="no-underline group">
                <article className="surface-card overflow-hidden group-hover:border-ink group-hover:-translate-y-1 group-hover:shadow-[0_16px_48px_rgba(14,13,9,0.1)] transition-all">
                  <div className="h-[200px] sm:h-[220px] flex items-center justify-center relative" style={{ background: cs.bg }}>
                    <div className="text-[56px] sm:text-[64px] opacity-20">{cs.glyph}</div>
                    <span className="absolute bottom-4 left-5 text-[11px] font-bold uppercase tracking-[0.1em] text-[rgba(14,13,9,0.35)]">{cs.tags[0]}</span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {cs.tags.map(t => <span key={t} className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${cs.serviceType === 'launch' ? 'bg-blue-lt text-blue border-[rgba(20,0,255,0.15)]' : cs.serviceType === 'grow' ? 'bg-sage-lt text-sage border-[rgba(26,107,84,0.15)]' : 'bg-warm-lt text-warm border-[rgba(224,61,0,0.15)]'}`}>{t}</span>)}
                    </div>
                    <h2 className="font-bold text-[15px] sm:text-[16px] tracking-[-0.01em] text-ink mb-1.5">{cs.client}</h2>
                    <p className="text-[13px] sm:text-[14px] text-muted mb-4">{cs.subline}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {cs.metrics.slice(0, 2).map(m => (
                        <div key={m.label} className="bg-cream rounded-lg p-2.5">
                          <div className="font-extrabold text-[17px] sm:text-[18px] tracking-[-0.025em] serif-italic" style={{ color: cs.color }}>{m.value}</div>
                          <div className="text-[10px] sm:text-[11px] text-muted mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-[12px] sm:text-[13px] font-bold text-muted group-hover:text-ink transition-colors">Read full case study →</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-ink py-16 sm:py-20 lg:py-24 text-center">
        <div className="page-wrap max-w-[540px]">
          <h2 className="type-h2 text-[26px] sm:text-[38px] lg:text-[50px] text-white mb-4">Want results <span className="serif-italic text-[rgba(255,255,255,0.4)]">like these?</span></h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7 sm:mb-8">Book a free call and we will show you how.</p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Start a Project →</Link>
        </div>
      </div>
    </>
  );
}
