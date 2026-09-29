import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/content";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogPosts.find(p => p.slug === slug);

  if (!article) {
    notFound();
  }

  // A very basic markdown parser to render the content for the blog post
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-medium mt-12 mb-4 text-fg-100">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-medium mt-8 mb-4 text-fg-100">{paragraph.replace('### ', '')}</h3>;
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
        <article className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[800px] space-y-16">
            <FadeIn>
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-fg-300">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-fg-100">{article.category}</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readingTime}</span>
                </div>
                <h1 className="text-[clamp(40px,5vw,56px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  {article.title}
                </h1>
                <p className="text-xl text-fg-200 leading-relaxed border-l-2 border-white/20 pl-6 bg-surface-100/50 py-4 rounded-r-lg">
                  {article.description}
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <div className="prose prose-invert prose-lg max-w-none">
                {renderContent(article.content)}
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}
