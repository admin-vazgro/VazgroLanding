import { caseStudies, getCaseStudy } from '@/lib/data/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return caseStudies.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: 'Case Study | Vazgro' };
  return {
    title: `${cs.client} — ${cs.headline}`,
    description: `${cs.subline} See how Vazgro helped ${cs.client} with ${cs.service}.`,
    alternates: { canonical: `https://vazgro.com/work/${cs.slug}` },
    openGraph: {
      title: `${cs.client} Case Study | Vazgro`,
      description: cs.headline,
      url: `https://vazgro.com/work/${cs.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${cs.client}: ${cs.headline}`,
    description: cs.subline,
    url: `https://vazgro.com/work/${cs.slug}`,
    author: { '@type': 'Organization', name: 'Vazgro' },
    publisher: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero banner */}
      <div className="pt-[64px]">
        <div className="min-h-[260px] sm:min-h-[320px] flex items-end px-4 sm:px-6 lg:px-10 xl:px-12 pb-10 sm:pb-14 relative overflow-hidden border-b border-rule" style={{ background: cs.bg }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="text-[160px] sm:text-[220px] opacity-[0.08]">{cs.glyph}</div></div>
          <div className="page-wrap w-full relative z-10">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Work', href: '/work' }, { name: cs.client, href: `/work/${cs.slug}` }]} className="mb-4" />
            <div className="flex gap-2 mb-4 flex-wrap">
              {cs.tags.map(t => <span key={t} className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${cs.serviceType === 'launch' ? 'bg-blue-lt text-blue border-[rgba(20,0,255,0.15)]' : cs.serviceType === 'grow' ? 'bg-sage-lt text-sage border-[rgba(26,107,84,0.15)]' : 'bg-warm-lt text-warm border-[rgba(224,61,0,0.15)]'}`}>{t}</span>)}
            </div>
            <h1 className="type-h1 text-[26px] sm:text-[36px] lg:text-[48px] max-w-[720px]" style={{ color: cs.color }}>{cs.headline}</h1>
          </div>
        </div>
      </div>

      <div className="page-wrap py-10 sm:py-14 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-rule">
              <div>
                <h2 className="font-bold text-[16px] sm:text-[18px]">{cs.client}</h2>
                <div className="text-[13px] sm:text-[14px] text-muted">{cs.location}</div>
              </div>
            </div>
            <p className="type-body text-ink-2 mb-8 sm:mb-10 font-medium">{cs.subline}</p>
            <Section title="The situation">{cs.intro}</Section>
            <Section title="The challenge">{cs.challenge}</Section>
            <Section title="What we did">{cs.approach}</Section>
            <div className="mb-8 sm:mb-10">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted mb-4">Results</h3>
              <div className="space-y-2.5">
                {cs.results.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-ink bg-white border border-rule rounded-[24px] px-4 py-3.5 shadow-[0_10px_28px_rgba(17,17,17,0.04)]">
                    <span className="font-extrabold text-[10px] flex-shrink-0 mt-0.5 w-4 h-4 rounded flex items-center justify-center text-white" style={{ background: cs.color }}>✓</span>{r}
                  </div>
                ))}
              </div>
            </div>
            {cs.tech && (
              <div className="mb-8 sm:mb-10">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted mb-4">Technology used</h3>
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map(t => <span key={t} className="text-[12px] sm:text-[13px] px-3 sm:px-3.5 py-1.5 sm:py-2 border border-rule rounded-full text-ink-2 bg-white hover:border-ink transition-colors cursor-default">{t}</span>)}
                </div>
              </div>
            )}
            <blockquote className="section-panel border-l-4 rounded-r-[30px] p-5 sm:p-6 mb-8 sm:mb-10 shadow-none" style={{ borderLeftColor: cs.color }}>
              <p className="serif-italic text-[15px] sm:text-[17px] text-ink-2 leading-[1.7] mb-3">&ldquo;{cs.quote}&rdquo;</p>
              <cite className="text-[12px] sm:text-[13px] font-bold text-muted not-italic">{cs.quoteBy}</cite>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-rule">
              <Link href="/contact" className="btn btn-dark btn-md rounded-lg justify-center sm:justify-start">Start a Similar Project →</Link>
              <Link href="/work" className="link-arrow self-center">View all work →</Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="section-panel p-5 shadow-none">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-4">Project metrics</h3>
              <div className="grid grid-cols-2 gap-2">
                {cs.metrics.map(m => (
                  <div key={m.label} className="bg-white rounded-[20px] p-3 border border-rule">
                    <div className="font-extrabold text-[18px] sm:text-[20px] serif-italic" style={{ color: cs.color }}>{m.value}</div>
                    <div className="text-[10px] sm:text-[11px] text-muted mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-panel p-5 shadow-none">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted mb-3">Project details</h3>
              {cs.investment && <div className="flex justify-between py-2 border-b border-rule text-[13px]"><span className="text-muted">Investment</span><span className="font-bold">{cs.investment}</span></div>}
              {cs.deliveryTime && <div className="flex justify-between py-2 border-b border-rule text-[13px]"><span className="text-muted">Timeline</span><span className="font-bold">{cs.deliveryTime}</span></div>}
              <div className="flex justify-between py-2 items-center text-[13px]"><span className="text-muted">Service</span><span className={`font-bold text-[11px] px-2.5 py-1 rounded-full ${cs.serviceType === 'launch' ? 'bg-blue-lt text-blue' : cs.serviceType === 'grow' ? 'bg-sage-lt text-sage' : 'bg-warm-lt text-warm'}`}>{cs.serviceType.toUpperCase()}</span></div>
            </div>
            <div className="bg-ink rounded-[30px] p-5 shadow-[0_18px_48px_rgba(17,17,17,0.12)]">
              <div className="text-[13px] font-bold text-white mb-1.5">Want similar results?</div>
              <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-4 leading-relaxed">Book a free 30-min call — no commitment, just honest advice.</p>
              <Link href="/contact" className="block w-full text-center py-2.5 bg-cream text-ink rounded-lg font-bold text-[13px] no-underline hover:bg-white transition-colors">Book a Free Call →</Link>
            </div>
          </aside>
        </div>
      </div>

      {/* More case studies */}
      <div className="border-t border-rule bg-white py-12 sm:py-14 lg:py-16">
        <div className="page-wrap">
          <h3 className="type-h3 text-[20px] sm:text-[22px] mb-7 sm:mb-8">More case studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {caseStudies.filter(c => c.slug !== cs.slug).slice(0, 3).map(c => (
              <Link key={c.slug} href={`/work/${c.slug}`} className="no-underline group">
                <div className="surface-card overflow-hidden group-hover:border-ink transition-all">
                  <div className="h-[140px] sm:h-[160px] flex items-center justify-center" style={{ background: c.bg }}><div className="text-[52px] opacity-20">{c.glyph}</div></div>
                  <div className="p-4 sm:p-5">
                    <div className="font-bold text-[14px] mb-1 text-ink">{c.client}</div>
                    <p className="text-[12px] sm:text-[13px] text-muted">{c.subline.substring(0, 70)}…</p>
                    <div className="mt-2.5 text-[12px] font-bold text-muted group-hover:text-ink transition-colors">Read →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div className="mb-7 sm:mb-8">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted mb-3">{title}</h3>
      <p className="text-[14px] sm:text-[15px] text-ink-2 leading-[1.72]">{children}</p>
    </div>
  );
}
