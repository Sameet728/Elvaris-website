'use client';

import Link from 'next/link';
import { ArrowRight, LineChart, Brain, Database, FlaskConical, Shield, Cog } from 'lucide-react';
import { FadeInUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/ui/MotionWrappers';
import { researchAreas } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  LineChart, Brain, Database, FlaskConical, Shield, Cog,
};

export default function ResearchPageClient() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeInUp>
          <div className="max-w-2xl mb-20">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">ELVARIS RESEARCH</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold">Research</h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Exploring the intersection of markets, computation, and intelligence.
            </p>
          </div>
        </FadeInUp>

        {/* Research Areas Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={area.slug}>
                <HoverCard className="h-full">
                  <Link href={`/research/${area.slug}`} className="block h-full">
                    <div className="p-7 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group flex flex-col">
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${area.color}15` }}
                        >
                          {Icon && <Icon size={22} style={{ color: area.color }} />}
                        </div>
                        <span className="text-[11px] font-mono text-[var(--text-muted)]">{area.id}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{area.title}</h3>
                      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">{area.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-[13px] text-[var(--accent)] font-medium group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Microcopy */}
        <FadeInUp delay={0.3}>
          <div className="mt-20 pt-12 border-t border-[var(--border-color)] text-center">
            <p className="text-[13px] text-[var(--text-muted)] font-mono">
              &ldquo;Research before deployment. Evidence over assumptions.&rdquo;
            </p>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
