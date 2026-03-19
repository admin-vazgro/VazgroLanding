import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteParallax from '@/components/ui/SiteParallax';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://vazgro.com';

export const metadata: Metadata = {
  title: {
    default: 'Vazgro — UK Digital Agency for SMEs & Startups',
    template: '%s | Vazgro',
  },
  description:
    'UK digital agency helping SMEs and startups launch, grow and build online. Fixed-fee web design from £149, monthly design & dev subscriptions, AI consulting and custom product development. Based in London, serving nationwide.',
  keywords: [
    'UK digital agency',
    'web design UK',
    'SME digital agency',
    'startup agency London',
    'AI consulting UK',
    'monthly design subscription',
    'fixed fee web design',
    'brand identity UK',
    'custom software development',
    'MVP development London',
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Vazgro — UK Digital Agency for SMEs & Startups',
    description:
      'Fixed-fee packages, monthly subscriptions, and custom AI builds for UK businesses.',
    url: siteUrl,
    siteName: 'Vazgro',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vazgro — UK Digital Agency',
    description: 'Web design, marketing & AI for growing UK businesses.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F6F4EE',
};

/* JSON-LD structured data for the organisation */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vazgro',
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: 'UK digital agency offering web design, brand identity, AI consulting and development services for SMEs and startups.',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  priceRange: '£149 – £25,000+',
  serviceType: ['Web Design', 'Brand Identity', 'AI Consulting', 'Software Development', 'Digital Marketing'],
  sameAs: [
    'https://www.linkedin.com/company/vazgro',
    'https://www.instagram.com/vazgro',
    'https://x.com/vazgro',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* LLM discoverability */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site description" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Vazgro',
            url: siteUrl,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '50',
              bestRating: '5',
            },
          }) }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <Nav />
        <SiteParallax>
          <main>{children}</main>
        </SiteParallax>
        <Footer />
      </body>
    </html>
  );
}
