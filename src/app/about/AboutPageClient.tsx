'use client';

import { ArrowRight, Microscope, Eye, RotateCcw, Wrench, Lightbulb } from 'lucide-react';
import { FadeInUp, StaggerChildren, StaggerItem } from '@/components/ui/MotionWrappers';

const processSteps = [
  { label: 'Research', color: '#7C5CFC' },
  { label: 'Data', color: '#4F8CFF' },
  { label: 'Hypothesis', color: '#34D399' },
  { label: 'Experiment', color: '#FBBF24' },
  { label: 'Validation', color: '#F87171' },
  { label: 'Iteration', color: '#9AA3AF' },
];

const principles = [
  { icon: Microscope, title: 'Evidence', desc: 'Every claim must be supported by data and rigorous analysis.' },
  { icon: Eye, title: 'Transparency', desc: 'Methodology, assumptions, and limitations are always documented.' },
  { icon: RotateCcw, title: 'Reproducibility', desc: 'Research should be repeatable by independent verification.' },
  { icon: Wrench, title: 'Engineering', desc: 'Quality software enables quality research.' },
  { icon: Lightbulb, title: 'Curiosity', desc: 'The best research starts with genuine questions.' },
];

export default function AboutPageClient() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <FadeInUp>
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">About Elvaris</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Building systems for deeper research.
            </h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Elvaris is a research and technology initiative exploring how data, AI, and quantitative methods can advance the understanding of complex market systems.
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* Mission */}
      <section className="border-t border-[var(--border-color)] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Our Mission</span>
              <h2 className="mt-4 text-2xl lg:text-3xl font-bold">
                Our goal is to make quantitative research more systematic, transparent, and accessible through software and intelligent systems.
              </h2>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-[var(--border-color)] py-24 dot-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Our Approach</span>
              <h2 className="mt-4 text-3xl font-bold">The research process.</h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-2">
              {processSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="px-6 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-center min-w-[120px]">
                    <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ backgroundColor: step.color }} />
                    <span className="text-[14px] font-semibold text-[var(--text-primary)]">{step.label}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <ArrowRight size={14} className="text-[var(--text-muted)] hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-[var(--border-color)] py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Principles</span>
              <h2 className="mt-4 text-3xl font-bold">What guides our work.</h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-center h-full">
                  <p.icon size={24} className="text-[var(--accent)] mx-auto mb-4" />
                  <h3 className="text-[15px] font-semibold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Microcopy */}
      <section className="border-t border-[var(--border-color)] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <p className="text-[14px] text-[var(--text-muted)] font-mono">
            &ldquo;Understand the system before optimizing it.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
