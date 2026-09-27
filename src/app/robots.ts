import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';
  
  return {
    rules: [
      // Default: allow everything except private/utility pages
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/api/', '/seo-dashboard'],
      },
      // Google Local Services Ads bot
      {
        userAgent: 'Googlebot-Local',
        allow: '/',
      },
      // AI answer-engine crawlers — explicit allow for GEO visibility
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
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
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
