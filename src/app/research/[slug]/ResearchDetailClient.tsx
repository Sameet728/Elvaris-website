'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { FadeInUp } from '@/components/ui/MotionWrappers';
import { projects } from '@/data/content';

interface ResearchArea {
  id: string;
  slug: string;
  title: string;
  description: string;
  color: string;
  sections: {
    whyItMatters: string;
    researchQuestions: string[];
    methods: string[];
    experiments: string;
    validation: string;
    relatedProjects: string[];
  };
}

export default function ResearchDetailClient({ area }: { area: ResearchArea }) {
  const relatedProjects = projects.filter((p) =>
    area.sections.relatedProjects.includes(p.slug)
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <FadeInUp>
          <nav className="flex items-center gap-2 text-[13px] text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
            <Link href="/research" className="hover:text-[var(--text-primary)] transition-colors">Research</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--text-primary)]">{area.title}</span>
          </nav>
        </FadeInUp>

        {/* Header */}
        <FadeInUp delay={0.05}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: area.color }} />
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">{area.id} / RESEARCH</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{area.title}</h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{area.description}</p>
          </div>
        </FadeInUp>

        {/* Content */}
        <div className="doc-prose space-y-12">
          <FadeInUp delay={0.1}>
            <section>
              <h2 id="why-it-matters">Why It Matters</h2>
              <p>{area.sections.whyItMatters}</p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <section>
              <h2 id="research-questions">Research Questions</h2>
              <ul>
                {area.sections.researchQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <section>
              <h2 id="methods">Methods</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {area.sections.methods.map((m, i) => (
                  <div key={i} className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                    {m}
                  </div>
                ))}
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <section>
              <h2 id="experiments">Experiments</h2>
              <p>{area.sections.experiments}</p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <section>
              <h2 id="validation">Validation</h2>
              <p>{area.sections.validation}</p>
            </section>
          </FadeInUp>

          {relatedProjects.length > 0 && (
            <FadeInUp delay={0.35}>
              <section>
                <h2 id="related-projects">Related Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-colors group"
                    >
                      <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">{project.title}</h4>
                      <p className="text-[13px] text-[var(--text-secondary)] line-clamp-2">{project.description}</p>
                      <span className="inline-flex items-center gap-1 mt-2 text-[12px] text-[var(--accent)] font-medium">
                        View project <ArrowRight size={11} />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </FadeInUp>
          )}
        </div>

        {/* Back link */}
        <FadeInUp delay={0.4}>
          <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← Back to Research
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
