import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LAUNCH — Fixed-Fee Web Design, Branding & AI Packages',
  description:
    'Buy exactly what you need — websites from £199, brand kits from £299, AI chatbot setup from £799. Fixed price, no surprises. Delivered in 3–21 days by a UK digital agency.',
  alternates: { canonical: 'https://vazgro.com/services/launch' },
  openGraph: {
    title: 'LAUNCH — Fixed-Fee Packages | Vazgro',
    description: 'Websites, branding, and AI tools at fixed prices. Delivered in days.',
    url: 'https://vazgro.com/services/launch',
  },
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Vazgro LAUNCH — Fixed-Fee Digital Packages',
    description: 'One-off fixed-fee packages for web design, branding, and AI tool setup. Prices from £149 to £999. Delivery in 3–21 days.',
    url: 'https://vazgro.com/services/launch',
    provider: { '@type': 'Organization', name: 'Vazgro', url: 'https://vazgro.com' },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LAUNCH Packages',
      itemListElement: [
        { '@type': 'Offer', name: 'Landing Page', price: '149', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Starter Site', price: '199', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Brand Starter Kit', price: '299', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'Business Site', price: '499', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'AI Chatbot Setup', price: '799', priceCurrency: 'GBP' },
        { '@type': 'Offer', name: 'E-Commerce Starter', price: '999', priceCurrency: 'GBP' },
      ],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long does a LAUNCH package take?', acceptedAnswer: { '@type': 'Answer', text: 'LAUNCH packages are delivered in 3–21 days depending on the package. Landing pages take 3 days, websites 7–14 days, and e-commerce sites up to 21 days.' } },
      { '@type': 'Question', name: 'Are LAUNCH prices fixed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every LAUNCH price on our website is the final price. No hidden costs, no scope creep. You pay upfront and we deliver.' } },
      { '@type': 'Question', name: 'How many revisions are included?', acceptedAnswer: { '@type': 'Answer', text: 'All LAUNCH packages include 2 rounds of revisions at no additional cost.' } },
      { '@type': 'Question', name: 'What payment methods do you accept?', acceptedAnswer: { '@type': 'Answer', text: 'We accept card payments via Stripe (UK, EU, US) and Razorpay (India). Payment is required upfront before work begins.' } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
