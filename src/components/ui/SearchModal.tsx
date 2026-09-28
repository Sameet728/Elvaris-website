'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, FlaskConical, FolderOpen, BookOpen, ArrowRight, Command } from 'lucide-react';
import { researchAreas, projects, blogPosts, docSidebar } from '@/data/content';

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: 'Documentation' | 'Research' | 'Projects' | 'Insights';
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Documentation
  docSidebar.forEach(section => {
    section.items.forEach(item => {
      results.push({
        title: item.title,
        description: `${section.title} — Documentation`,
        href: `/documentation/${item.slug}`,
        category: 'Documentation',
      });
    });
  });

  // Research
  researchAreas.forEach(area => {
    results.push({
      title: area.title,
      description: area.shortDescription,
      href: `/research/${area.slug}`,
      category: 'Research',
    });
  });

  // Projects
  projects.forEach(project => {
    results.push({
      title: project.title,
      description: project.description,
      href: `/projects/${project.slug}`,
      category: 'Projects',
    });
  });

  // Blog
  blogPosts.forEach(post => {
    results.push({
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      category: 'Insights',
    });
  });

  return results;
}

const categoryIcons = {
  Documentation: FileText,
  Research: FlaskConical,
  Projects: FolderOpen,
  Insights: BookOpen,
};

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchIndex] = useState(buildSearchIndex);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const lower = query.toLowerCase();
    const filtered = searchIndex.filter(
      item =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower)
    );
    setResults(filtered.slice(0, 12));
    setSelectedIndex(0);
  }, [query, searchIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        router.push(results[selectedIndex].href);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [results, selectedIndex, router, onClose]
  );

  // Global keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // This is handled by the parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) acc[result.category] = [];
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  let globalIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-[90vw] max-w-[640px] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-color)]">
              <Search size={18} className="text-[var(--text-muted)] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation, research, projects..."
                className="flex-1 bg-transparent text-[15px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
                aria-label="Search"
              />
              <kbd className="text-[11px] px-1.5 py-0.5 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded text-[var(--text-muted)] font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-[var(--text-muted)] text-sm">No results found for &ldquo;{query}&rdquo;</p>
                </div>
              )}

              {!query && (
                <div className="py-8 text-center">
                  <p className="text-[var(--text-muted)] text-sm">Start typing to search...</p>
                  <div className="flex items-center justify-center gap-4 mt-3 text-[12px] text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 bg-[var(--bg-elevated)] rounded font-mono text-[11px]">↑↓</kbd> Navigate</span>
                    <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 bg-[var(--bg-elevated)] rounded font-mono text-[11px]">↵</kbd> Open</span>
                    <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 bg-[var(--bg-elevated)] rounded font-mono text-[11px]">ESC</kbd> Close</span>
                  </div>
                </div>
              )}

              {Object.entries(groupedResults).map(([category, items]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <div key={category} className="mb-2">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                      <Icon size={12} />
                      {category}
                    </div>
                    {items.map((result) => {
                      globalIndex++;
                      const idx = globalIndex;
                      return (
                        <button
                          key={result.href}
                          onClick={() => {
                            router.push(result.href);
                            onClose();
                          }}
                          className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                            selectedIndex === idx
                              ? 'bg-[var(--accent-muted)] text-[var(--text-primary)]'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="text-[13.5px] font-medium truncate">{result.title}</div>
                            <div className="text-[12px] text-[var(--text-muted)] truncate">{result.description}</div>
                          </div>
                          <ArrowRight size={14} className="shrink-0 ml-2 text-[var(--text-muted)]" />
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-[var(--border-color)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <div className="flex items-center gap-1">
                <Command size={11} />
                <span>Elvaris Search</span>
              </div>
              <span>{results.length} results</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
