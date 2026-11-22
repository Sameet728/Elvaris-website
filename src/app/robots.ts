import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'Applebot',
          'Applebot-Extended',
          'cohere-ai',
          'Diffbot',
          'CCBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: 'https://www.elvariscapital.in/sitemap.xml',
    host: 'https://www.elvariscapital.in',
  };
}
