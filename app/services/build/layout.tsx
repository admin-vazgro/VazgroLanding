import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BUILD — Custom Apps, AI & Product Development',
  description:
    'Senior engineers building MVPs from £3,999, AI products from £5,000, and custom software from £10,000. Design-led, AI-assisted. 4–16 week delivery. UK digital agency.',
  alternates: { canonical: 'https://vazgro.com/services/build' },
  openGraph: {
    title: 'BUILD — Custom Development | Vazgro',
    description: 'MVPs, AI products, and custom software. From idea to live product.',
    url: 'https://vazgro.com/services/build',
  },
};

export default function BuildLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vazgro BUILD — Custom App & AI Development',
    description: 'Custom software development, MVP fast-tracking, AI product builds, and technical co-founder partnerships for UK startups and SMEs.',
    url: 'https://vazgro.com/services/build',
    provider: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    priceRange: '£3,999 – £25,000+',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
