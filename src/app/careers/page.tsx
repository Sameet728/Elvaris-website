import type { Metadata } from 'next';
import CareersPageClient from './CareersPageClient';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build the future of quantitative research. Opportunities in AI, machine learning, quantitative research, and engineering.',
};

export default function CareersPage() {
  return <CareersPageClient />;
}
