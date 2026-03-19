import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Strategy Call',
  description: 'Get in touch with Vazgro. We respond within 4 business hours. Book a free 30-minute strategy call or send us a message. Based in London, serving UK-wide.',
  alternates: { canonical: 'https://vazgro.com/contact' },
  openGraph: { title: 'Contact Vazgro', description: 'Free strategy call. No commitment, no pressure.', url: 'https://vazgro.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vazgro',
    description: 'Get in touch for a free strategy call or project enquiry.',
    url: 'https://vazgro.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Vazgro',
      telephone: '',
      email: 'hello@vazgro.com',
      url: 'https://vazgro.com',
      address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
