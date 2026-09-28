import type { Metadata } from 'next';
import { docArticles, docSidebar } from '@/data/content';
import DocPageClient from './DocPageClient';

// Generate all documentation article slugs as static params
export async function generateStaticParams() {
  const slugs: { slug: string[] }[] = [];
  docSidebar.forEach(section => {
    section.items.forEach(item => {
      slugs.push({ slug: [item.slug] });
    });
  });
  return slugs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const articleSlug = slug[slug.length - 1];
  const article = docArticles[articleSlug];
  if (!article) return { title: 'Documentation' };
  return {
    title: `${article.title} — Documentation`,
    description: article.description,
  };
}

export default async function DocSlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const articleSlug = slug[slug.length - 1];
  return <DocPageClient articleSlug={articleSlug} />;
}
