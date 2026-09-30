import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { FadeIn } from "../../../components/fade-in";
import { notFound } from "next/navigation";
import { projects } from "../../../data/content";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "Research Question", content: project.researchQuestion },
    { title: "Architecture", content: project.architecture },
    { title: "Dataset", content: project.dataset },
    { title: "Methodology", content: project.methodology },
    { title: "Results", content: project.results },
    { title: "Limitations", content: project.limitations },
    { title: "Future Work", content: project.futureWork },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[800px] space-y-16">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-fg-100 tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
                  {project.status}
                </div>
                <h1 className="text-[clamp(40px,5vw,56px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  {project.title}
                </h1>
                <p className="text-xl text-fg-200 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </FadeIn>
            
            <div className="space-y-12">
              {sections.map((section, i) => (
                <FadeIn key={section.title} delay={i * 50 + 100}>
                  <section className="space-y-4">
                    <h2 className="text-xl font-medium text-fg-100 border-b border-white/10 pb-2 inline-block">
                      {section.title}
                    </h2>
                    <p className="text-base leading-relaxed text-fg-200">
                      {section.content}
                    </p>
                  </section>
                </FadeIn>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
