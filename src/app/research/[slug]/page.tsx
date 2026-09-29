import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchAreas, projects } from "../../../data/content";

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = researchAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const relatedProjects = projects.filter((p) =>
    area.sections.relatedProjects.includes(p.slug)
  );

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[800px] space-y-16">
            
            <FadeIn>
              <nav className="flex items-center gap-2 text-[13px] text-fg-300 mb-8" aria-label="Breadcrumb">
                <Link href="/research" className="hover:text-white transition-colors">Research</Link>
                <span>/</span>
                <span className="text-white">{area.title}</span>
              </nav>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-fg-100 tracking-wider uppercase">
                  {area.id} / RESEARCH
                </div>
                <h1 className="text-[clamp(40px,5vw,56px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  {area.title}
                </h1>
                <p className="text-xl text-fg-200 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </FadeIn>
            
            <div className="space-y-12">
              <FadeIn delay={150}>
                <section className="space-y-4">
                  <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                    Why It Matters
                  </h2>
                  <p className="text-base leading-relaxed text-fg-200">
                    {area.sections.whyItMatters}
                  </p>
                </section>
              </FadeIn>

              <FadeIn delay={200}>
                <section className="space-y-4">
                  <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                    Research Questions
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-fg-200">
                    {area.sections.researchQuestions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </section>
              </FadeIn>

              <FadeIn delay={250}>
                <section className="space-y-4">
                  <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                    Methods
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {area.sections.methods.map((m, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-fg-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                        {m}
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn delay={300}>
                <section className="space-y-4">
                  <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                    Experiments
                  </h2>
                  <p className="text-base leading-relaxed text-fg-200">
                    {area.sections.experiments}
                  </p>
                </section>
              </FadeIn>

              <FadeIn delay={350}>
                <section className="space-y-4">
                  <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                    Validation
                  </h2>
                  <p className="text-base leading-relaxed text-fg-200">
                    {area.sections.validation}
                  </p>
                </section>
              </FadeIn>

              {relatedProjects.length > 0 && (
                <FadeIn delay={400}>
                  <section className="space-y-6 pt-8">
                    <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                      Related Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedProjects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="p-6 rounded-2xl border border-white/10 bg-surface-100 hover:bg-surface-200 transition-colors group block"
                        >
                          <h4 className="text-lg font-medium text-fg-100 mb-2">{project.title}</h4>
                          <p className="text-sm text-fg-300 line-clamp-2">{project.description}</p>
                          <div className="flex items-center gap-2 mt-4 text-xs font-medium text-fg-200 group-hover:text-white transition-colors">
                            View project
                            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                </FadeIn>
              )}
            </div>

            <FadeIn delay={450}>
              <div className="mt-16 pt-8 border-t border-white/10">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 text-sm text-fg-200 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Research
                </Link>
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
  return researchAreas.map((area) => ({
    slug: area.slug,
  }));
}
