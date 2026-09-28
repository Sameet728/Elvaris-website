import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Elvaris — our mission, approach, and principles for quantitative research and technology.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
