'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { FadeInUp, StaggerChildren, StaggerItem } from '@/components/ui/MotionWrappers';
import { careers } from '@/data/content';

export default function CareersPageClient() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-2xl mb-24">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">ELVARIS CAREERS</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">{careers.headline}</h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              {careers.description}
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Areas of work */}
          <div className="lg:col-span-1">
            <FadeInUp delay={0.1}>
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-[var(--border-color)]">What We Work On</h2>
              <ul className="space-y-4">
                {careers.workAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-[15px] text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {area}
                  </li>
                ))}
              </ul>
            </FadeInUp>
          </div>

          {/* Open positions */}
          <div className="lg:col-span-2">
            <FadeInUp delay={0.2}>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)]">
                <h2 className="text-xl font-bold">Open Positions</h2>
                <span className="text-[12px] font-mono text-[var(--text-muted)]">{careers.positions.length} roles</span>
              </div>
            </FadeInUp>

            {careers.positions.length > 0 ? (
              <StaggerChildren className="space-y-4">
                {careers.positions.map((pos) => (
                  <StaggerItem key={pos.role}>
                    <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-colors group">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{pos.role}</h3>
                        <div className="flex items-center gap-3 text-[12px] font-mono text-[var(--text-muted)]">
                          <span>{pos.type}</span>
                          <span>·</span>
                          <span>{pos.location}</span>
                        </div>
                      </div>
                      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6">{pos.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {pos.requirements.slice(0, 3).map(req => (
                            <span key={req} className="px-2 py-1 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] rounded">
                              {req}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent)] group-hover:gap-2.5 transition-all">
                          Apply <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            ) : (
              <FadeInUp delay={0.3}>
                <div className="py-12 px-6 rounded-xl border border-[var(--border-color)] border-dashed bg-[var(--bg-surface)]/50 text-center">
                  <p className="text-[15px] text-[var(--text-secondary)] mb-2">There are currently no open positions.</p>
                  <p className="text-[13px] text-[var(--text-muted)]">Open positions will appear here as the research team grows.</p>
                </div>
              </FadeInUp>
            )}

            {/* General inquiry */}
            <FadeInUp delay={0.4}>
              <div className="mt-12 p-8 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 text-center">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Don&apos;t see a suitable role?</h3>
                <p className="text-[14px] text-[var(--text-secondary)] mb-6 max-w-md mx-auto">
                  Send us your profile, past research, or GitHub, and tell us what you&apos;d like to build at Elvaris.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--accent)] text-white text-[13px] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  <Mail size={14} />
                  Get in Touch
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}
