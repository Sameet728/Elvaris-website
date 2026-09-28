import type { Metadata } from 'next';
import ResearchPageClient from './ResearchPageClient';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Exploring the intersection of markets, computation, and intelligence. Quantitative research, AI/ML, market data, and validation.',
};

export default function ResearchPage() {
  return <ResearchPageClient />;
}
