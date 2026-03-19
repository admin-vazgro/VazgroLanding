import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GROW — Monthly Design, Dev & Social Subscriptions',
  description:
    'Unlimited design requests from £349/mo, development from £799/mo, social media management from £399/mo. Dedicated PM, Slack access, cancel anytime after 3 months.',
  alternates: { canonical: 'https://vazgro.com/services/grow' },
  openGraph: {
    title: 'GROW — Monthly Subscriptions | Vazgro',
    description: 'Your always-on digital team. Design, dev, and social subscriptions.',
    url: 'https://vazgro.com/services/grow',
  },
};

export default function GrowLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vazgro GROW — Monthly Digital Subscriptions',
    description: 'Monthly design, development, and social media management subscriptions for UK businesses. Dedicated team, unlimited revisions, no lock-in after 3 months.',
    url: 'https://vazgro.com/services/grow',
    provider: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GROW Plans',
      itemListElement: [
        { '@type': 'Offer', name: 'Design Starter', price: '349', priceCurrency: 'GBP', description: 'Monthly design subscription' },
        { '@type': 'Offer', name: 'Dev Essentials', price: '799', priceCurrency: 'GBP', description: 'Monthly development subscription' },
        { '@type': 'Offer', name: 'Social Starter', price: '399', priceCurrency: 'GBP', description: 'Monthly social media management' },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
