import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'An educational showcase of research projects exploring quantitative methods, AI/ML, and market data.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
