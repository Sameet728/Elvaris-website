'use client';

import Link from 'next/link';
import { ChevronRight, Clock, BookOpen, Copy, Check } from 'lucide-react';
import { FadeInUp } from '@/components/ui/MotionWrappers';
import { useState } from 'react';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  content: string;
}

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
        <button onClick={copy} className="flex items-center gap-1 px-2 py-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded transition-colors" aria-label="Copy code">
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

function renderBlogContent(content: string) {
  const blocks = content.split('\n\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  for (const block of blocks) {
    i++;
    const trimmed = block.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('## ')) {
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      elements.push(<h2 key={i} id={id}>{text}</h2>);
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.slice(4);
      elements.push(<h3 key={i}>{text}</h3>);
    } else if (trimmed.startsWith('```')) {
      const codeContent = trimmed.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
      elements.push(<CodeBlock key={i}>{codeContent}</CodeBlock>);
    } else if (trimmed.split('\n').every(l => l.match(/^- /))) {
      elements.push(
        <ul key={i}>
          {trimmed.split('\n').map((l, li) => {
            const text = l.replace(/^- /, '');
            const boldMatch = text.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
            if (boldMatch) return <li key={li}><strong>{boldMatch[1]}</strong>: {boldMatch[2]}</li>;
            return <li key={li}>{text}</li>;
          })}
        </ul>
      );
    } else if (trimmed.split('\n').every(l => l.match(/^\d+\. /))) {
      elements.push(
        <ol key={i}>
          {trimmed.split('\n').map((l, li) => (
            <li key={li}>{l.replace(/^\d+\. /, '')}</li>
          ))}
        </ol>
      );
    } else {
      const html = trimmed.replace(/`([^`]+)`/g, '<code>$1</code>');
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: html }} />);
    }
  }
  return elements;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-[760px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <FadeInUp>
          <nav className="flex items-center gap-2 text-[13px] text-[var(--text-muted)] mb-8" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">Insights</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--text-primary)]">{post.title}</span>
          </nav>
        </FadeInUp>

        {/* Header */}
        <FadeInUp delay={0.05}>
          <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-widest">{post.category}</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-[12px] text-[var(--text-muted)] font-mono mb-10 pb-8 border-b border-[var(--border-color)]">
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readingTime}</span>
            <span className="flex items-center gap-1"><BookOpen size={12} /> {post.date}</span>
          </div>
        </FadeInUp>

        {/* Content */}
        <FadeInUp delay={0.1}>
          <div className="doc-prose">
            {renderBlogContent(post.content)}
          </div>
        </FadeInUp>

        {/* Disclaimer */}
        <FadeInUp delay={0.2}>
          <div className="mt-12 p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
            <p className="text-[12px] text-[var(--text-muted)] leading-relaxed !mb-0">
              This article is provided for educational and research purposes only. Nothing here constitutes financial, investment, or trading advice.
            </p>
          </div>
        </FadeInUp>

        {/* Back */}
        <FadeInUp delay={0.25}>
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              ← Back to Insights
            </Link>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
