import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Research notes, articles, and educational content on quantitative research, AI/ML, market data, and methodology.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
