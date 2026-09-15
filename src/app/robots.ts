import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/'],
      },
      // Allow Google Local Services Ads bot
      {
        userAgent: 'Googlebot-Local',
        allow: '/',
      },
      // Allow AI crawlers for GEO/AEO visibility
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}