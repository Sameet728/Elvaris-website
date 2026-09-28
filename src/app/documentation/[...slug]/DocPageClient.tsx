'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, Menu, X, Copy, Check, BookOpen, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '@/components/ui/MotionWrappers';
import { docSidebar, docArticles } from '@/data/content';

function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const lines = children.trim().split('\n');

  const copy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border-color)] bg-[var(--bg-elevated)]">
        <span className="text-[11px] font-mono text-[var(--text-muted)]">code</span>
        <button
          onClick={copy}
          className="flex items-center gap-1 px-2 py-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="!m-0 !rounded-none !border-0 overflow-x-auto">
        <code>{lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="inline-block w-8 text-right pr-4 text-[var(--text-muted)] select-none text-[12px] shrink-0">{i + 1}</span>
            <span>{line}</span>
          </div>
        ))}</code>
      </pre>
    </div>
  );
}

function Callout({ type, children }: { type: 'note' | 'warning' | 'important' | 'example'; children: React.ReactNode }) {
  const labels = { note: 'NOTE', warning: 'WARNING', important: 'IMPORTANT', example: 'EXAMPLE' };
  return (
    <div className={`callout callout-${type}`}>
      <div className="text-[11px] font-mono font-semibold tracking-wider mb-1">{labels[type]}</div>
      <div className="text-[14px] leading-relaxed">{children}</div>
    </div>
  );
}

function renderContent(content: string) {
  const blocks = content.split('\n\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  for (const block of blocks) {
    i++;
    const trimmed = block.trim();
    if (!trimmed) continue;

    // Heading
    if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      elements.push(<h3 key={i} id={id}>{text}</h3>);
    } else if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      elements.push(<h2 key={i} id={id}>{text}</h2>);
    }
    // Code block
    else if (trimmed.startsWith('```')) {
      const codeContent = trimmed.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
      elements.push(<CodeBlock key={i}>{codeContent}</CodeBlock>);
    }
    // Callout
    else if (trimmed.startsWith('> **WARNING**') || trimmed.startsWith('> **IMPORTANT**') || trimmed.startsWith('> **NOTE**')) {
      const type = trimmed.includes('WARNING') ? 'warning' : trimmed.includes('IMPORTANT') ? 'important' : 'note';
      const text = trimmed.replace(/^> \*\*(WARNING|IMPORTANT|NOTE)\*\*:?\s*/, '');
      elements.push(<Callout key={i} type={type}>{text}</Callout>);
    }
    // Table
    else if (trimmed.includes('|') && trimmed.split('\n').length >= 3) {
      const rows = trimmed.split('\n').filter(r => !r.match(/^\|[\s-|]+\|$/));
      const headers = rows[0]?.split('|').filter(Boolean).map(c => c.trim());
      const dataRows = rows.slice(1);
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>{headers?.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => (
                <tr key={ri}>
                  {row.split('|').filter(Boolean).map((cell, ci) => (
                    <td key={ci}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    // Unordered list
    else if (trimmed.split('\n').every(l => l.match(/^- /))) {
      elements.push(
        <ul key={i}>
          {trimmed.split('\n').map((l, li) => {
            const text = l.replace(/^- /, '');
            const boldMatch = text.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
            if (boldMatch) {
              return <li key={li}><strong>{boldMatch[1]}</strong>: {boldMatch[2]}</li>;
            }
            return <li key={li}>{text}</li>;
          })}
        </ul>
      );
    }
    // Ordered list
    else if (trimmed.split('\n').every(l => l.match(/^\d+\. /))) {
      elements.push(
        <ol key={i}>
          {trimmed.split('\n').map((l, li) => (
            <li key={li}>{l.replace(/^\d+\. /, '')}</li>
          ))}
        </ol>
      );
    }
    // Paragraph
    else {
      // Handle inline code
      const html = trimmed.replace(/`([^`]+)`/g, '<code>$1</code>');
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: html }} />);
    }
  }

  return elements;
}

export default function DocPageClient({ articleSlug }: { articleSlug: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const pathname = usePathname();

  const article = docArticles[articleSlug];

  // Find prev/next articles
  const allSlugs = useMemo(() => {
    const slugs: string[] = [];
    docSidebar.forEach(section => {
      section.items.forEach(item => slugs.push(item.slug));
    });
    return slugs;
  }, []);

  const currentIndex = allSlugs.indexOf(articleSlug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;
  const prevTitle = prevSlug ? docSidebar.flatMap(s => s.items).find(i => i.slug === prevSlug)?.title : null;
  const nextTitle = nextSlug ? docSidebar.flatMap(s => s.items).find(i => i.slug === nextSlug)?.title : null;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Fallback for articles without full content
  if (!article) {
    const sidebarItem = docSidebar.flatMap(s => s.items).find(i => i.slug === articleSlug);
    const sectionName = docSidebar.find(s => s.items.some(i => i.slug === articleSlug))?.title || 'Documentation';

    return (
      <div className="pt-24 pb-20 flex">
        {/* Sidebar */}
        <DocSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentSlug={articleSlug} />

        <div className="flex-1 min-w-0 lg:pl-72">
          <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-8">
            <nav className="flex items-center gap-2 text-[13px] text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
              <Link href="/documentation" className="hover:text-[var(--text-primary)] transition-colors">Docs</Link>
              <ChevronRight size={12} />
              <span className="text-[var(--text-primary)]">{sidebarItem?.title || articleSlug}</span>
            </nav>

            <h1 className="text-3xl font-bold mb-4">{sidebarItem?.title || articleSlug}</h1>
            <div className="flex items-center gap-4 text-[12px] text-[var(--text-muted)] font-mono mb-8">
              <span>{sectionName}</span>
            </div>

            <div className="callout callout-note">
              <p className="!mb-0">This documentation article is coming soon. Check back later for detailed content on this topic.</p>
            </div>

            {/* Prev/Next */}
            <DocNavigation prevSlug={prevSlug} nextSlug={nextSlug} prevTitle={prevTitle} nextTitle={nextTitle} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 flex">
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-transparent">
        <div className="h-full bg-[var(--accent)] transition-all duration-150" style={{ width: `${readProgress}%` }} />
      </div>

      {/* Sidebar */}
      <DocSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentSlug={articleSlug} />

      {/* Main content */}
      <div className="flex-1 min-w-0 lg:pl-72">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8 py-8">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 mb-6 px-3 py-2 text-[13px] text-[var(--text-secondary)] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg"
          >
            <Menu size={14} />
            Documentation Menu
          </button>

          {/* Breadcrumb */}
          <FadeInUp>
            <nav className="flex items-center gap-2 text-[13px] text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
              <Link href="/documentation" className="hover:text-[var(--text-primary)] transition-colors">Docs</Link>
              <ChevronRight size={12} />
              <span className="text-[var(--text-muted)]">{article.category}</span>
              <ChevronRight size={12} />
              <span className="text-[var(--text-primary)]">{article.title}</span>
            </nav>
          </FadeInUp>

          <FadeInUp delay={0.05}>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{article.title}</h1>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="flex items-center gap-4 text-[12px] text-[var(--text-muted)] font-mono mb-4">
              <span className="flex items-center gap-1"><BookOpen size={12} /> {article.category}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> Updated {article.lastUpdated}</span>
            </div>
          </FadeInUp>

          {/* Table of Contents */}
          {article.tableOfContents.length > 0 && (
            <FadeInUp delay={0.15}>
              <div className="mb-10 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <h4 className="text-[12px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3">On this page</h4>
                <ul className="space-y-1.5">
                  {article.tableOfContents.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`block text-[13px] hover:text-[var(--text-primary)] transition-colors ${
                          item.level === 3 ? 'pl-4 text-[var(--text-muted)]' : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          )}

          {/* Article content */}
          <FadeInUp delay={0.2}>
            <div className="doc-prose">
              {renderContent(article.content)}
            </div>
          </FadeInUp>

          {/* Prev/Next */}
          <DocNavigation prevSlug={prevSlug} nextSlug={nextSlug} prevTitle={prevTitle} nextTitle={nextTitle} />
        </div>
      </div>
    </div>
  );
}

function DocSidebar({ sidebarOpen, setSidebarOpen, currentSlug }: { sidebarOpen: boolean; setSidebarOpen: (v: boolean) => void; currentSlug: string }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-72 border-r border-[var(--border-color)] bg-[var(--bg-primary)] overflow-y-auto py-8 px-5">
        <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest mb-6">
          Elvaris Documentation
        </div>
        <SidebarContent currentSlug={currentSlug} />
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed left-0 top-0 bottom-0 w-80 z-50 bg-[var(--bg-primary)] border-r border-[var(--border-color)] overflow-y-auto py-6 px-5 lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-widest">Documentation</span>
                <button onClick={() => setSidebarOpen(false)} className="p-1 text-[var(--text-muted)]">
                  <X size={18} />
                </button>
              </div>
              <SidebarContent currentSlug={currentSlug} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({ currentSlug }: { currentSlug: string }) {
  return (
    <nav className="space-y-6">
      {docSidebar.map(section => (
        <div key={section.title}>
          <h4 className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.items.map(item => (
              <li key={item.slug}>
                <Link
                  href={`/documentation/${item.slug}`}
                  className={`block px-3 py-1.5 text-[13.5px] rounded-md transition-colors ${
                    currentSlug === item.slug
                      ? 'bg-[var(--accent-muted)] text-[var(--accent)] font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function DocNavigation({ prevSlug, nextSlug, prevTitle, nextTitle }: { prevSlug: string | null; nextSlug: string | null; prevTitle: string | null | undefined; nextTitle: string | null | undefined }) {
  return (
    <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex items-center justify-between gap-4">
      {prevSlug ? (
        <Link href={`/documentation/${prevSlug}`} className="group flex items-center gap-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <span className="block text-[11px] text-[var(--text-muted)]">Previous</span>
            <span>{prevTitle}</span>
          </div>
        </Link>
      ) : <div />}
      {nextSlug ? (
        <Link href={`/documentation/${nextSlug}`} className="group flex items-center gap-2 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-right">
          <div>
            <span className="block text-[11px] text-[var(--text-muted)]">Next</span>
            <span>{nextTitle}</span>
          </div>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : <div />}
    </div>
  );
}
