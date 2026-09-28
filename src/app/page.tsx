'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronDown, LineChart, Brain, Database, FlaskConical, Shield, Cog, ArrowUpRight, BookOpen, FileText, Users, Mail } from 'lucide-react';
import { FadeInUp, FadeIn, StaggerChildren, StaggerItem, HoverCard } from '@/components/ui/MotionWrappers';
import { researchAreas, projects, blogPosts } from '@/data/content';
import { motion } from 'framer-motion';

const HeroVisualization = dynamic(() => import('@/components/hero/HeroVisualization'), { ssr: false });

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  LineChart, Brain, Database, FlaskConical, Shield, Cog,
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background visualization */}
        <div className="absolute inset-0 opacity-60">
          <HeroVisualization />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]/80" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          {/* Micro label */}
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest border border-[var(--border-color)] rounded-full bg-[var(--bg-surface)]/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-subtle" />
              Research &bull; Data &bull; Intelligence &bull; Engineering
            </div>
          </FadeInUp>

          {/* Headline */}
          <FadeInUp delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-gradient">Researching Intelligence</span>
              <br />
              <span className="text-gradient">for Markets.</span>
            </h1>
          </FadeInUp>

          {/* Supporting text */}
          <FadeInUp delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
              Elvaris is an independent research and technology initiative exploring artificial intelligence,
              quantitative methods, market data, and systematic research.
            </p>
          </FadeInUp>

          {/* CTAs */}
          <FadeInUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/research"
                className="group flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-[14px] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-all"
              >
                Explore Research
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/documentation/introduction"
                className="flex items-center gap-2 px-6 py-3 text-[14px] font-medium text-[var(--text-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)]/50 backdrop-blur-sm transition-all"
              >
                Read Documentation
              </Link>
            </div>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={0.8}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-mono">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={16} className="text-[var(--text-muted)]" />
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="py-32 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Philosophy</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Built around evidence, not assumptions.</h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Research First',
                desc: 'We treat every idea as a hypothesis that must be tested.',
              },
              {
                num: '02',
                title: 'Data Before Conclusions',
                desc: 'Historical results are evaluated against carefully defined datasets and validation procedures.',
              },
              {
                num: '03',
                title: 'Reproducibility Matters',
                desc: 'Research should be understandable, inspectable, and repeatable.',
              },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div className="p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-colors group">
                  <span className="text-[var(--accent)] font-mono text-sm font-semibold">{item.num}</span>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-3 text-[var(--text-secondary)] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== WHAT IS ELVARIS ===== */}
      <section className="py-32 border-t border-[var(--border-color)] grid-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">About</span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">What is Elvaris?</h2>
                <p className="mt-6 text-[var(--text-secondary)] text-[16px] leading-relaxed">
                  Elvaris is a research and technology initiative focused on understanding how data, artificial intelligence,
                  machine learning, and quantitative methods can be combined to study complex market systems.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Quantitative Research', 'Machine Learning', 'Market Data', 'Strategy Research', 'Statistical Analysis', 'Research Automation'].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 text-[13.5px] text-[var(--text-secondary)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        {item}
                      </div>
                    )
                  )}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 mt-8 text-[14px] text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors"
                >
                  Learn more about Elvaris
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="relative p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
                {/* Research pipeline visualization */}
                <div className="space-y-4">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-6">Research Pipeline</div>
                  {['Data Collection', 'Cleaning & Validation', 'Feature Engineering', 'Hypothesis Formation', 'Backtesting', 'Statistical Validation'].map(
                    (step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center text-[11px] font-mono text-[var(--accent)] font-semibold">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="flex-1 h-px bg-[var(--border-color)]" />
                        <span className="text-[13px] text-[var(--text-secondary)] font-mono">{step}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ===== RESEARCH AREAS ===== */}
      <section className="py-32 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Research</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
                Exploring the intersection of markets, computation, and intelligence.
              </h2>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <StaggerItem key={area.slug}>
                  <HoverCard>
                    <Link href={`/research/${area.slug}`} className="block">
                      <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${area.color}15` }}
                          >
                            {Icon && <Icon size={20} className="text-[var(--text-secondary)]" style={{ color: area.color }} />}
                          </div>
                          <span className="text-[11px] font-mono text-[var(--text-muted)]">{area.id}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{area.title}</h3>
                        <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4">{area.shortDescription}</p>
                        <span className="inline-flex items-center gap-1 text-[13px] text-[var(--accent)] font-medium group-hover:gap-2 transition-all">
                          Explore <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== RESEARCH PROCESS ===== */}
      <section className="py-32 border-t border-[var(--border-color)] dot-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Process</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Research is a process, not a prediction.</h2>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-2">
              {['Data', 'Hypothesis', 'Experiment', 'Validation', 'Iteration'].map((step, i) => (
                <div key={step} className="flex items-center gap-2 lg:gap-4">
                  <div className="px-5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-center">
                    <span className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[14px] font-semibold text-[var(--text-primary)]">{step}</span>
                  </div>
                  {i < 4 && (
                    <ArrowRight size={14} className="text-[var(--text-muted)] hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-center mt-10 text-[14px] text-[var(--text-muted)] max-w-lg mx-auto">
              Every result has assumptions. Understanding those assumptions is as important as the result itself.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-32 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Projects</span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Research in practice.</h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-[14px] text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
              >
                View all projects <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <StaggerItem key={project.slug}>
                <HoverCard>
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">Project / {project.id}</span>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-subtle" />
                          <span className="text-[var(--text-muted)]">{project.status}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{project.title}</h3>
                      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="sm:hidden mt-6 text-center">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-[14px] text-[var(--accent)] font-medium">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTATION / KNOWLEDGE CENTER ===== */}
      <section className="py-32 border-t border-[var(--border-color)] grid-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Documentation</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Documentation-first approach.</h2>
              <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto">
                Comprehensive technical documentation covering research methodology, data handling, and quantitative concepts.
              </p>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Getting Started', desc: 'Introduction and research philosophy', href: '/documentation/introduction', icon: BookOpen },
              { title: 'Methods', desc: 'Backtesting, validation, and evaluation', href: '/documentation/backtesting', icon: FlaskConical },
              { title: 'Data', desc: 'Data sources, cleaning, and quality', href: '/documentation/data-sources', icon: Database },
              { title: 'Glossary', desc: 'Key terms and definitions', href: '/documentation/sharpe-ratio', icon: FileText },
            ].map(item => (
              <StaggerItem key={item.title}>
                <HoverCard>
                  <Link href={item.href} className="block">
                    <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group">
                      <item.icon size={20} className="text-[var(--accent)] mb-3" />
                      <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">{item.title}</h4>
                      <p className="text-[13px] text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== RESEARCH NOTES / BLOG ===== */}
      <section className="py-32 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Insights</span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Research Notes</h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-[14px] text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map(post => (
              <StaggerItem key={post.slug}>
                <HoverCard>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group">
                      <span className="text-[11px] font-mono text-[var(--accent)] uppercase">{post.category}</span>
                      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)] mb-2">{post.title}</h3>
                      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 mb-4">{post.description}</p>
                      <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)] font-mono">
                        <span>{post.readingTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== CAREERS CTA ===== */}
      <section className="py-32 border-t border-[var(--border-color)] dot-bg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Careers</span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold">Build the future of quantitative research.</h2>
              <p className="mt-4 text-[var(--text-secondary)] text-[16px] leading-relaxed">
                We are interested in people who enjoy difficult technical problems, rigorous research, and building systems from first principles.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[var(--accent)] text-white text-[14px] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                View Opportunities
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-32 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">Let&apos;s talk.</h2>
              <p className="mt-4 text-[var(--text-secondary)] text-[16px]">
                Whether it&apos;s research collaboration, technical questions, or partnership — we&apos;d like to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-[14px] font-medium text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-colors"
              >
                <Mail size={15} />
                Get in Touch
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <div className="py-6 border-t border-[var(--border-color)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <p className="text-[11px] text-[var(--text-muted)] text-center leading-relaxed max-w-2xl mx-auto">
            Elvaris content is provided for educational and research purposes only. Nothing on this website constitutes financial,
            investment, or trading advice. Historical or simulated results do not guarantee future performance.
          </p>
        </div>
      </div>
    </>
  );
}
