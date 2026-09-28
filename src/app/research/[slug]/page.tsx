import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { researchAreas } from '@/data/content';
import ResearchDetailClient from './ResearchDetailClient';

export async function generateStaticParams() {
  return researchAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = researchAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
  };
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = researchAreas.find((a) => a.slug === slug);
  if (!area) notFound();
  return <ResearchDetailClient area={area} />;
}
