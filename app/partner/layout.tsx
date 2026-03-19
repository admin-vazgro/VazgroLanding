import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner & Referral Programme — Earn with Vazgro',
  description: 'Join Vazgro\'s partner network. Earn 10–15% commission referring clients. Three models: referral, commission SDR, and agency white-label. No cap on earnings.',
  alternates: { canonical: 'https://vazgro.com/partner' },
  openGraph: { title: 'Partner Programme | Vazgro', description: 'Earn by referring. We handle the rest.', url: 'https://vazgro.com/partner' },
};

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
