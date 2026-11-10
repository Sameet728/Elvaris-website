import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";
import Link from "next/link";
import { notFound } from "next/navigation";
import { docArticles, docSidebar } from "../../../data/content";

export default async function DocArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = docArticles[slug];

  if (!article) {
    notFound();
  }

  // Enhanced markdown parser to render headings, code blocks, tables, blockquotes, and inline styling
  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      const raw = match[0];
      if (raw.startsWith('`') && raw.endsWith('`')) {
        parts.push(
          <code key={match.index} className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[13px] text-white">
            {raw.slice(1, -1)}
          </code>
        );
      } else if (raw.startsWith('**') && raw.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-semibold text-fg-100">
            {raw.slice(2, -2)}
          </strong>
        );
      } else if (raw.startsWith('[') && raw.includes('](')) {
        const titleMatch = raw.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (titleMatch) {
          const [, linkTitle, linkHref] = titleMatch;
          parts.push(
            <a
              key={match.index}
              href={linkHref}
              target={linkHref.startsWith('http') ? '_blank' : undefined}
              rel={linkHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              {linkTitle}
            </a>
          );
        } else {
          parts.push(raw);
        }
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return parts.length > 0 ? parts : text;
  };

  const renderContent = (content: string) => {
    const blocks: React.ReactNode[] = [];
    const rawParagraphs = content.split('\n\n');

    rawParagraphs.forEach((paragraph, i) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return;

      // 1. Code block
      if (trimmed.startsWith('```') && trimmed.endsWith('```')) {
        const lines = trimmed.split('\n');
        const lang = lines[0].replace('```', '').trim();
        const codeText = lines.slice(1, -1).join('\n');
        blocks.push(
          <div key={i} className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#07080a] shadow-2xl">
            {lang && (
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-2 text-[11px] font-mono uppercase text-fg-300">
                <span>{lang}</span>
              </div>
            )}
            <pre className="overflow-x-auto p-4 text-[13px] font-mono leading-relaxed text-fg-200">
              <code>{codeText}</code>
            </pre>
          </div>
        );
        return;
      }

      // 2. Table
      if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
        const rows = trimmed.split('\n').filter(r => r.trim().startsWith('|'));
        if (rows.length >= 2) {
          const headerCells = rows[0].split('|').slice(1, -1).map(c => c.trim());
          const bodyRows = rows.slice(2).map(r => r.split('|').slice(1, -1).map(c => c.trim()));
          blocks.push(
            <div key={i} className="my-8 overflow-x-auto rounded-xl border border-white/10 bg-surface-100/40">
              <table className="w-full text-left text-sm text-fg-200 border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-semibold uppercase tracking-wider text-fg-100">
                    {headerCells.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3.5 whitespace-nowrap">
                        {renderInline(h)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-normal">
                  {bodyRows.map((row, rIdx) => (
                    <tr key={rIdx} className="transition-colors hover:bg-white/[0.02]">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 text-fg-200 whitespace-nowrap">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          return;
        }
      }

      // 3. Blockquote / Alert
      if (trimmed.startsWith('> ')) {
        const cleanText = trimmed.split('\n').map(l => l.replace(/^>\s?/, '')).join(' ');
        blocks.push(
          <blockquote key={i} className="my-6 rounded-r-xl border-l-2 border-white/60 bg-white/[0.02] py-3.5 pl-4 pr-4 text-fg-200 italic">
            {renderInline(cleanText)}
          </blockquote>
        );
        return;
      }

      // 4. Headings
      if (trimmed.startsWith('## ')) {
        const title = trimmed.replace('## ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        blocks.push(
          <h2 key={i} id={id} className="mt-14 mb-4 text-[26px] font-medium tracking-tight text-fg-100 border-b border-white/5 pb-3">
            {title}
          </h2>
        );
        return;
      }
      if (trimmed.startsWith('### ')) {
        const title = trimmed.replace('### ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        blocks.push(
          <h3 key={i} id={id} className="mt-8 mb-3 text-xl font-medium tracking-tight text-fg-100">
            {title}
          </h3>
        );
        return;
      }
      if (trimmed.startsWith('#### ')) {
        const title = trimmed.replace('#### ', '');
        blocks.push(
          <h4 key={i} className="mt-6 mb-2 text-base font-semibold text-fg-100">
            {title}
          </h4>
        );
        return;
      }

      // 5. Unordered List
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').map(l => l.replace(/^[-*]\s+/, ''));
        blocks.push(
          <ul key={i} className="my-6 list-disc space-y-2.5 pl-6 text-fg-200">
            {items.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {renderInline(item)}
              </li>
            ))}
          </ul>
        );
        return;
      }

      // 6. Ordered List
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map(l => l.replace(/^\d+\.\s+/, ''));
        blocks.push(
          <ol key={i} className="my-6 list-decimal space-y-2.5 pl-6 text-fg-200">
            {items.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {renderInline(item)}
              </li>
            ))}
          </ol>
        );
        return;
      }

      // 7. Regular paragraph
      blocks.push(
        <p key={i} className="mb-6 leading-relaxed text-fg-200 text-base">
          {renderInline(trimmed)}
        </p>
      );
    });

    return blocks;
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 h-max hidden lg:block">
              <FadeIn>
                <div className="space-y-8">
                  <div className="mb-6">
                     <Link href="/documentation" className="text-sm text-fg-300 hover:text-white transition-colors flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                       </svg>
                       Back to Hub
                     </Link>
                  </div>
                  
                  <nav className="space-y-6">
                    {docSidebar.map((category) => (
                      <div key={category.title}>
                        <h3 className="text-xs font-semibold text-fg-300 mb-3 tracking-wider">{category.title.toUpperCase()}</h3>
                        <ul className="space-y-2 border-l border-white/10 ml-1 pl-4">
                          {category.items.map((item) => {
                            const isActive = item.slug === slug;
                            return (
                              <li key={item.slug}>
                                <Link 
                                  href={`/documentation/${item.slug}`} 
                                  className={`text-sm transition-colors block ${isActive ? 'text-white font-medium' : 'text-fg-200 hover:text-white'}`}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </nav>
                </div>
              </FadeIn>
            </aside>

            {/* Main Content Area */}
            <article className="flex-1 max-w-[800px]">
              <div className="space-y-16">
                <FadeIn>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs font-mono text-fg-300">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-fg-100">{article.category}</span>
                      <span>Updated: {article.lastUpdated}</span>
                    </div>
                    <h1 className="text-[clamp(40px,5vw,56px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                      {article.title}
                    </h1>
                    <p className="text-xl text-fg-200 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </FadeIn>

                {article.tableOfContents && article.tableOfContents.length > 0 && (
                  <FadeIn delay={50}>
                    <div className="p-6 rounded-2xl bg-surface-100 border border-white/10">
                      <h4 className="text-sm font-medium text-fg-100 mb-4 uppercase tracking-wider">On this page</h4>
                      <ul className="space-y-2">
                        {article.tableOfContents.map((toc) => (
                          <li key={toc.id} className={toc.level === 3 ? "ml-4" : ""}>
                            <a href={`#${toc.id}`} className="text-sm text-fg-200 hover:text-white transition-colors">
                              {toc.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}
                
                <FadeIn delay={100}>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {renderContent(article.content)}
                  </div>
                </FadeIn>
              </div>
            </article>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  docSidebar.forEach(section => {
    section.items.forEach(item => {
      slugs.push({ slug: item.slug });
    });
  });
  return slugs;
}
