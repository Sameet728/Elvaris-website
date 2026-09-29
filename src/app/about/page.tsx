import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";

export default function AboutPage() {
  const principles = [
    {
      title: "Evidence",
      desc: "Every claim must be supported by data and rigorous analysis."
    },
    {
      title: "Transparency",
      desc: "Methodology, assumptions, and limitations are always documented."
    },
    {
      title: "Reproducibility",
      desc: "Research should be repeatable by independent verification."
    },
    {
      title: "Engineering",
      desc: "Quality software enables quality research."
    },
    {
      title: "Curiosity",
      desc: "The best research starts with genuine questions."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none" />
          
          <div className="mx-auto max-w-[1240px] space-y-24">
            {/* Header */}
            <FadeIn>
              <div className="max-w-4xl space-y-8">
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Building systems for deeper research.
                </h1>
                <p className="text-xl leading-relaxed text-fg-200 max-w-3xl">
                  Elvaris is a research and technology initiative exploring how data, AI, and quantitative methods can advance the understanding of complex market systems.
                </p>
                <p className="text-lg leading-relaxed text-fg-300 max-w-3xl">
                  Our goal is to make quantitative research more systematic, transparent, and accessible through software and intelligent systems.
                </p>
              </div>
            </FadeIn>

            {/* Research Process */}
            <FadeIn delay={100}>
              <div className="space-y-8">
                <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-4">
                  The Research Process
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-fg-200">
                  {["Research", "Data", "Hypothesis", "Experiment", "Validation", "Iteration"].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <span className="bg-surface-100 border border-white/10 px-4 py-2 rounded-full">{step}</span>
                      {i < 5 && (
                        <svg className="w-4 h-4 text-fg-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Principles */}
            <FadeIn delay={200}>
              <div className="space-y-12">
                <h2 className="text-2xl font-medium text-fg-100 border-b border-white/10 pb-4">
                  Core Principles
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {principles.map((principle, i) => (
                    <div key={principle.title} className="glow-card rounded-xl bg-surface-100 p-8 transition-colors hover:bg-surface-200">
                      <h3 className="text-lg font-medium text-fg-100 mb-3">{principle.title}</h3>
                      <p className="text-sm leading-relaxed text-fg-300">{principle.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Closing Quote */}
            <FadeIn delay={300}>
              <div className="text-center py-12 border-t border-white/[0.06]">
                <p className="text-2xl font-medium text-fg-100 italic font-serif">
                  &ldquo;Understand the system before optimizing it.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
