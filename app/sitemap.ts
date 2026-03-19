import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/data/case-studies';

const BASE = process.env.NEXT_PUBLIC_APP_URL || 'https://vazgro.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/services/launch`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services/grow`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services/build`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/products/progrize`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map(cs => ({
    url: `${BASE}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  /* Blog post URLs — in production these would come from CMS/MDX */
  const blogPosts: MetadataRoute.Sitemap = [
    'why-your-sme-needs-a-website-in-2026',
    'ai-chatbots-for-small-business',
    'design-subscription-vs-agency-retainer',
  ].map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPosts];
}
