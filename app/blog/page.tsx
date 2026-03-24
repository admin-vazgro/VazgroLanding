import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog — Web Design, AI & Digital Growth Insights',
  description: 'Practical insights on web design, AI automation, branding, and digital growth for UK SMEs and startups. Written by the Vazgro team.',
  alternates: { canonical: 'https://vazgro.com/blog' },
  openGraph: { title: 'Vazgro Blog', description: 'Practical digital growth insights for UK businesses.', url: 'https://vazgro.com/blog' },
};

export default function BlogPage() {
  /* Generate article schema for each post */
  const articlesJsonLd = blogPosts.map(post => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://vazgro.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
    publisher: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com', logo: { '@type': 'ImageObject', url: 'https://vazgro.com/logo.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://vazgro.com/blog/${post.slug}` },
    wordCount: post.content.split(' ').length,
    articleSection: post.category,
    inLanguage: 'en-GB',
  }));

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vazgro Blog — Digital Growth Insights',
    description: 'Practical articles on web design, AI, branding, and digital strategy for UK businesses.',
    url: 'https://vazgro.com/blog',
    hasPart: articlesJsonLd,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="page-wrap">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} className="mb-5" />
          <div className="page-hero-copy">
            <span className="eyebrow">Blog</span>
            <h1 className="type-h1 text-[32px] sm:text-[48px] lg:text-[64px] mb-4">
              Insights for <span className="serif-italic">growth.</span>
            </h1>
            <p className="type-body text-ink-2 max-w-[480px]">
              Practical articles on web design, AI, branding, and digital strategy — written for UK business owners and founders.
            </p>
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <section className="section-pad">
        <div className="page-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {blogPosts.map(post => (
              <article key={post.slug} className="surface-card overflow-hidden hover:border-ink hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(14,13,9,0.08)] transition-all group">
                <div className="h-[6px]" style={{ background: post.color }} />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-rule text-muted">{post.category}</span>
                    <span className="text-[11px] text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-extrabold text-[16px] sm:text-[17px] tracking-[-0.02em] text-ink mb-2 leading-snug group-hover:text-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-muted leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Article preview — first paragraph */}
                  <p className="text-[12px] sm:text-[13px] text-ink-2 leading-relaxed mb-4 line-clamp-3">
                    {post.content.split('\n\n')[0]}
                  </p>

                  <div className="flex items-center justify-between">
                    <time dateTime={post.date} className="text-[11px] text-muted">
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span className="text-[12px] font-bold text-muted group-hover:text-ink transition-colors">Read full article →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-14 sm:mt-18">
            <div className="section-panel p-6 sm:p-8 lg:p-10 max-w-[680px] mx-auto text-center">
              <div className="text-[28px] mb-3">📬</div>
              <h3 className="font-bold text-[18px] sm:text-[20px] mb-2">Get insights in your inbox</h3>
              <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed mb-5 max-w-[400px] mx-auto">
                One email per week with practical digital growth advice for UK businesses. No fluff, no spam.
              </p>
              <div className="flex gap-2 max-w-[380px] mx-auto">
                <input type="email" placeholder="you@company.co.uk" className="input flex-1" />
                <button className="px-5 py-3 bg-ink text-cream rounded-lg font-bold text-[13px] cursor-pointer hover:bg-ink-2 transition-colors border-none font-sans flex-shrink-0">Subscribe →</button>
              </div>
              <p className="text-[11px] text-muted mt-2">Unsubscribe anytime. We respect your inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-ink py-14 sm:py-20 text-center">
        <div className="page-wrap max-w-[540px]">
          <h2 className="type-h2 text-[26px] sm:text-[38px] text-white mb-4">
            Need help with your <span className="serif-italic text-[rgba(255,255,255,0.35)]">digital strategy?</span>
          </h2>
          <p className="type-body text-[rgba(255,255,255,0.5)] mb-7">Book a free 30-minute strategy call with our team.</p>
          <Link href="/contact" className="btn btn-cream btn-lg rounded-full justify-center">Book Your Free Call →</Link>
        </div>
      </div>
    </>
  );
}
