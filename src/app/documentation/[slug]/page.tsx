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

  // A very basic markdown parser to render the content for the documentation
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      if (paragraph.startsWith('## ')) {
        const id = paragraph.replace('## ', '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h2 key={i} id={id} className="text-2xl font-medium mt-12 mb-4 text-fg-100">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        const id = paragraph.replace('### ', '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h3 key={i} id={id} className="text-xl font-medium mt-8 mb-4 text-fg-100">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('- ')) {
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-fg-200">
            {paragraph.split('\n').map((item, j) => (
              <li key={j}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      if (/^\d+\. /.test(paragraph)) {
         return (
          <ol key={i} className="list-decimal pl-6 space-y-2 mb-6 text-fg-200">
            {paragraph.split('\n').map((item, j) => (
              <li key={j}>{item.replace(/^\d+\. /, '')}</li>
            ))}
          </ol>
        );
      }
      return <p key={i} className="leading-relaxed text-fg-200 mb-6">{paragraph}</p>;
    });
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
