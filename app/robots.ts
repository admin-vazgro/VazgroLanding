import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://vazgro.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/client-portal/', '/payment/'],
      },
      {
        // Allow AI crawlers to access llms.txt
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'Anthropic-AI', 'Google-Extended'],
        allow: ['/llms.txt', '/llms-full.txt', '/'],
        disallow: ['/api/', '/client-portal/', '/payment/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
