import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import Link from "next/link";
import { blogPosts } from "../../data/content";

export default function InsightsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-3xl space-y-4">
                <span className="text-[11px] font-mono text-fg-300 uppercase tracking-widest">ELVARIS INSIGHTS</span>
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Research Notes
                </h1>
                <p className="text-xl text-fg-200">
                  Methodology, statistics, and engineering observations.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((article, i) => (
                <FadeIn key={article.slug} delay={i * 50}>
                  <Link href={`/blog/${article.slug}`} className="group block h-full">
                    <article className="glow-card h-full rounded-2xl bg-surface-100 p-8 transition-all duration-300 hover:bg-surface-200 hover:-translate-y-1 flex flex-col">
                      <div className="mb-6 flex items-center justify-between text-[11px] text-fg-300 font-mono tracking-wider">
                        <span>{article.category}</span>
                        <span>{article.readingTime}</span>
                      </div>
                      <h2 className="mb-4 text-2xl font-medium text-fg-100 group-hover:text-white transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-fg-300 mb-8 flex-1 group-hover:text-fg-200 transition-colors">
                        {article.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-fg-300">
                        <span className="font-mono">{article.date}</span>
                        <span className="flex items-center gap-1.5 font-medium group-hover:text-white transition-colors">
                          Read article
                          <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
