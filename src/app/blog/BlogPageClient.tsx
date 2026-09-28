'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerChildren, StaggerItem, HoverCard } from '@/components/ui/MotionWrappers';
import { blogPosts } from '@/data/content';

export default function BlogPageClient() {
  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <FadeInUp>
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">ELVARIS INSIGHTS</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold">Research Notes</h1>
            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Educational articles on quantitative research, machine learning, market data, and methodology.
            </p>
          </div>
        </FadeInUp>

        {/* Category filter */}
        <FadeInUp delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[13px] rounded-lg transition-colors ${
                  activeCategory === cat
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-[var(--text-secondary)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--text-muted)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Posts grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <StaggerItem key={post.slug}>
              <HoverCard className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--text-muted)]/30 transition-all h-full group flex flex-col">
                    <span className="text-[11px] font-mono text-[var(--accent)] uppercase">{post.category}</span>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)] mb-2">{post.title}</h3>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4 flex-1">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[12px] text-[var(--text-muted)] font-mono">
                        <span>{post.readingTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <ArrowRight size={14} className="text-[var(--accent)] group-hover:translate-x-0.5 transition-transform" />
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
