/**
 * SEO Structured Data Generators
 *
 * Generates JSON-LD schemas for:
 * - BreadcrumbList
 * - FAQPage
 * - Service
 * - Article (BlogPosting)
 * - Product (for packages)
 * - Review / AggregateRating
 */

const SITE = process.env.NEXT_PUBLIC_APP_URL || 'https://vazgro.com';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.href.startsWith('http') ? item.href : `${SITE}${item.href}`,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqJsonLd(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
  provider = 'Vazgro',
  areaServed = 'United Kingdom',
  priceRange,
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE}${url}`,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    ...(priceRange && { priceRange }),
  };
}

export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'Vazgro Team',
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: url.startsWith('http') ? url : `${SITE}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vazgro',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.svg` },
    },
    ...(image && { image }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE}${url}`,
    },
  };
}

export function productJsonLd({
  name,
  description,
  url,
  price,
  currency = 'GBP',
  availability = 'InStock',
}: {
  name: string;
  description: string;
  url: string;
  price: number;
  currency?: string;
  availability?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Vazgro — ${name}`,
    description,
    url: url.startsWith('http') ? url : `${SITE}${url}`,
    brand: { '@type': 'Organization', name: 'Vazgro' },
    offers: {
      '@type': 'Offer',
      price: price.toString(),
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url: url.startsWith('http') ? url : `${SITE}${url}`,
    },
  };
}

export function aggregateRatingJsonLd({
  ratingValue = 4.9,
  reviewCount = 50,
  bestRating = 5,
}: {
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vazgro',
    url: SITE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: bestRating.toString(),
    },
  };
}
