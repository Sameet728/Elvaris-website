'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/ui/MotionWrappers';
import { projects } from '@/data/content';

export default function ProjectsPageClient() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">ELVARIS PROJECTS</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold">Projects</h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              An educational showcase of research projects and experimental systems.
            </p>
          </div>
        </FadeInUp>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <HoverCard className="h-full">
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <div className="p-7 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">Project / {project.id}</span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-subtle" />
                        <span className="text-[var(--text-muted)]">{project.status}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{project.title}</h3>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight size={16} className="text-[var(--accent)] group-hover:translate-x-1 transition-transform shrink-0 ml-4" />
                    </div>
                  </div>
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
