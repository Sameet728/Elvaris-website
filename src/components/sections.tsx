import Link from "next/link";
import { FadeIn } from "./fade-in";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(32px,4vw,52px)] leading-[1.08] font-medium tracking-tight text-fg-100 text-pretty">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="text-lg sm:text-xl text-fg-200 text-pretty max-w-prose">{children}</p>;
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-relaxed text-fg-300 text-pretty max-w-prose">{children}</p>;
}

function CTAButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const base = "group relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-[transform,background-color,border-color] duration-[160ms] ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97]";
  const primary = "bg-white text-black hover:bg-fg-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const secondary = "border border-white/10 text-white hover:border-white/20 hover:bg-white/[0.04]";

  return (
    <Link className={`${base} ${variant === "primary" ? primary : secondary}`} href={href}>
      {children}
      {variant === "primary" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}

/* ── Philosophy Section ───────────────────────────────────── */
export function PhilosophySection() {
  const principles = [
    {
      num: "01",
      title: "Research First",
      desc: "We treat every idea as a hypothesis that must be tested.",
    },
    {
      num: "02",
      title: "Data Before Conclusions",
      desc: "Historical results are evaluated against carefully defined datasets and validation procedures.",
    },
    {
      num: "03",
      title: "Reproducibility Matters",
      desc: "Research should be understandable, inspectable, and repeatable.",
    },
  ];

  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sweep-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes float-mesh {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.15; }
          50% { transform: scale(1.05) translateY(-2%); opacity: 0.3; }
        }
      `}} />

      {/* Background Motion Graphics */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50 z-0">
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_60%)]" 
          style={{ animation: 'float-mesh 10s ease-in-out infinite' }}
        />
        {/* Animated Background Grid Lines */}
        <div className="absolute inset-0 flex justify-around opacity-20">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] space-y-16 z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <SectionHeading>Built around evidence, not assumptions.</SectionHeading>
          </div>
        </FadeIn>
        
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <FadeIn key={p.num} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-[#050505]/80 p-8 transition-all duration-500 hover:border-white/20 hover:bg-[#0a0a0a] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1 backdrop-blur-md">
                {/* Internal Hover Sweep Graphic */}
                <div className="absolute top-0 left-0 h-[2px] w-[50%] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ animation: 'sweep-line 2s linear infinite' }} />
                
                <span className="mb-4 inline-block font-mono text-[13px] tracking-widest text-white/40 transition-colors group-hover:text-white/80">{p.num}</span>
                <h3 className="mb-3 text-[21px] font-medium tracking-wide text-fg-100 drop-shadow-md">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-200 font-light">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About Section ────────────────────────────────────────── */
export function AboutSection() {
  const areas = [
    "Quantitative Research",
    "Machine Learning",
    "Market Data",
    "Strategy Research",
    "Statistical Analysis",
    "Research Automation",
  ];

  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24 sm:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.01),transparent_70%)]">
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-2 z-10">
        <FadeIn>
          <div className="space-y-6">
            <SectionHeading>What is Elvaris?</SectionHeading>
            <SectionSubtitle>
              Elvaris is a research and technology initiative focused on understanding how data, artificial intelligence, machine learning, and quantitative methods can be combined to study complex market systems.
            </SectionSubtitle>
            <div className="pt-4">
              <CTAButton href="/about">Learn more about Elvaris</CTAButton>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area) => (
              <div key={area} className="group flex items-center gap-3 rounded-xl border border-white/5 bg-black/60 p-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] hover:scale-[1.02]">
                <div className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <span className="text-[14px] font-medium text-white/70 transition-colors group-hover:text-white">{area}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Research Pipeline ────────────────────────────────────── */
export function ResearchPipelineSection() {
  const steps = [
    "Data Collection",
    "Cleaning & Validation",
    "Feature Engineering",
    "Hypothesis Formation",
    "Backtesting",
    "Statistical Validation"
  ];

  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24 overflow-hidden">
      <div className="relative mx-auto max-w-[1240px] z-10">
        <FadeIn>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <SectionHeading>The Research Pipeline</SectionHeading>
            <div className="mt-4">
              <SectionSubtitle>A systematic approach to exploring markets, computation, and intelligence.</SectionSubtitle>
            </div>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-[1100px] pt-10">
          {/* Real Pipeline Track (Desktop) */}
          <div className="absolute top-[68px] left-[8.33%] right-[8.33%] h-[1px] bg-white/10 hidden lg:block">
            {/* Animated Laser Beam */}
            <div 
              className="absolute top-0 left-0 h-[2px] w-[30%] -translate-y-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
              style={{ animation: 'sweep-line 4s linear infinite' }}
            />
          </div>

          {/* Real Pipeline Track (Mobile) */}
          <div className="absolute top-[68px] bottom-[68px] left-1/2 w-[1px] -translate-x-1/2 bg-white/10 lg:hidden">
            <div 
              className="w-[2px] h-[20%] -translate-x-[0.5px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
              style={{ animation: 'sweep-line-vertical 4s linear infinite' }}
            />
          </div>
          
          <div className="grid gap-y-12 grid-cols-1 lg:grid-cols-6 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={step} delay={i * 100}>
                <div className="group relative flex flex-col items-center justify-start text-center">
                  {/* Premium Structural Node */}
                  <div className="relative z-10 flex size-[56px] items-center justify-center rounded-full border border-white/10 bg-[#050505] shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1),inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105">
                    {/* Inner mechanical ring */}
                    <div className="absolute inset-[6px] rounded-full border border-white/5 transition-colors duration-500 group-hover:border-white/20" />
                    {/* Node Number with Glowing Effect */}
                    <span className="text-[12px] font-mono tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] group-hover:scale-110">0{i + 1}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="mt-6 px-2">
                    <h4 className="text-[13px] font-medium tracking-wide text-white/60 group-hover:text-white transition-colors">{step}</h4>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Research Section ─────────────────────────────────────── */
import { researchAreas } from "../data/content";

export function ResearchSection() {
  return (
    <section className="border-t border-white/[0.06] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] space-y-16">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <SectionHeading>Exploring the intersection of markets, computation, and intelligence.</SectionHeading>
            </div>
            <CTAButton href="/research" variant="secondary">View all research</CTAButton>
          </div>
        </FadeIn>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.id} delay={i * 100}>
              <Link href={`/research/${area.slug}`} className="group block h-full">
                <div className="glow-card h-full rounded-2xl bg-surface-100 p-8 transition-all duration-300 hover:bg-surface-200 hover:-translate-y-1">
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
                      className="text-fg-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-fg-100">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-300 group-hover:text-fg-200 transition-colors">
                    {area.shortDescription}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
