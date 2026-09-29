import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import Link from "next/link";
import { researchAreas } from "../../data/content";

export default function ResearchPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-3xl space-y-4">
                <span className="text-[11px] font-mono text-fg-300 uppercase tracking-widest">ELVARIS RESEARCH</span>
                <h1 className="text-[clamp(44px,6vw,64px)] leading-[1.04] font-medium tracking-tight text-fg-100">
                  Research
                </h1>
                <p className="text-xl text-fg-200">
                  Exploring the intersection of markets, computation, and intelligence.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {researchAreas.map((area, i) => (
                <FadeIn key={area.id} delay={i * 50}>
                  <Link href={`/research/${area.slug}`} className="group block h-full">
                    <div className="glow-card h-full rounded-2xl bg-surface-100 p-8 transition-all duration-300 hover:bg-surface-200 hover:-translate-y-1 flex flex-col">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="font-mono text-xs text-fg-300">{area.id}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-fg-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white shrink-0"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <h3 className="mb-3 text-2xl font-medium text-fg-100">{area.title}</h3>
                      <p className="text-sm leading-relaxed text-fg-300 mb-6 flex-1 group-hover:text-fg-200 transition-colors">
                        {area.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-fg-300 font-medium group-hover:text-white transition-all">
                        Explore
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={200}>
              <div className="mt-20 pt-12 border-t border-white/10 text-center">
                <p className="text-[13px] text-fg-300 font-mono">
                  &ldquo;Research before deployment. Evidence over assumptions.&rdquo;
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
