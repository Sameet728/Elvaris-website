import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Googlebot', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.elvariscapital.in/sitemap.xml',
    host: 'https://www.elvariscapital.in',
  };
}
