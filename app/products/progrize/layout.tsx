import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progrize — AI-Powered Career Platform',
  description: 'Progrize combines LinkedIn-style networking, Glassdoor-style company reviews, and AI-powered CV optimisation. Built by Vazgro. Join the waitlist.',
  alternates: { canonical: 'https://vazgro.com/products/progrize' },
  openGraph: { title: 'Progrize — Career Acceleration Platform', description: 'LinkedIn meets Glassdoor, supercharged by AI.', url: 'https://vazgro.com/products/progrize' },
};

export default function ProgrizeLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Progrize',
    description: 'AI-powered career platform combining professional networking, honest company reviews, and CV optimisation tools.',
    url: 'https://vazgro.com/products/progrize',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free waitlist — launching 2026' },
    creator: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
