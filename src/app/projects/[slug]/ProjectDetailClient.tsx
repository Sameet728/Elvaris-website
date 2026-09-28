'use client';

import Link from 'next/link';
import { ChevronRight, AlertTriangle } from 'lucide-react';
import { FadeInUp } from '@/components/ui/MotionWrappers';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  overview: string;
  researchQuestion: string;
  architecture: string;
  dataset: string;
  methodology: string;
  results: string;
  limitations: string;
  futureWork: string;
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const sections = [
    { id: 'overview', title: 'Overview', content: project.overview },
    { id: 'research-question', title: 'Research Question', content: project.researchQuestion },
    { id: 'architecture', title: 'Architecture', content: project.architecture },
    { id: 'dataset', title: 'Dataset', content: project.dataset },
    { id: 'methodology', title: 'Methodology', content: project.methodology },
    { id: 'results', title: 'Results', content: project.results },
    { id: 'limitations', title: 'Limitations', content: project.limitations },
    { id: 'future-work', title: 'Future Work', content: project.futureWork },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <FadeInUp>
          <nav className="flex items-center gap-2 text-[13px] text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
            <Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--text-primary)]">{project.title}</span>
          </nav>
        </FadeInUp>

        {/* Header */}
        <FadeInUp delay={0.05}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Project / {project.id}</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono bg-[var(--accent-muted)] text-[var(--accent)] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-subtle" />
                {project.status}
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 text-[12px] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Content sections */}
        <div className="doc-prose">
          {sections.map((section, i) => (
            <FadeInUp key={section.id} delay={0.1 + i * 0.03}>
              <section className="mb-10">
                <h2 id={section.id}>{section.title}</h2>
                {section.id === 'results' && section.content === 'Research in progress.' ? (
                  <div className="callout callout-note">
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                      <p className="!mb-0">Results: Research in progress. Results will be published when available.</p>
                    </div>
                  </div>
                ) : (
                  <p>{section.content}</p>
                )}
              </section>
            </FadeInUp>
          ))}
        </div>

        {/* Disclaimer */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <p className="text-[12px] text-[var(--text-muted)] leading-relaxed">
              This project is presented for educational and research purposes only. Historical or simulated results do not guarantee future performance.
            </p>
          </div>
        </FadeInUp>

        {/* Back link */}
        <FadeInUp delay={0.55}>
          <div className="mt-8">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              ← Back to Projects
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
