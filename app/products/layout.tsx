import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products — Built by Vazgro',
  description: 'Products we are building under the Vazgro umbrella: Progrize (career platform), DashMetric (analytics), Briefly AI (proposal generator), and Venturize (startup ecosystem).',
  alternates: { canonical: 'https://vazgro.com/products' },
  openGraph: { title: 'Vazgro Products', description: 'Products we are building for the world.', url: 'https://vazgro.com/products' },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
