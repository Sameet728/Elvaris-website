import Link from "next/link";
import { FadeIn } from "./fade-in";
import { researchAreas } from "../data/content";

function SectionHeading({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`text-[clamp(32px,5vw,56px)] leading-[1.05] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 drop-shadow-sm text-pretty ${className}`}>
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[19px] leading-relaxed text-white/50 font-light tracking-wide text-pretty max-w-prose">{children}</p>;
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] leading-relaxed text-white/40 font-light text-pretty max-w-prose">{children}</p>;
}

function CTAButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const base = "group relative inline-flex items-center gap-3 rounded-full px-7 py-3 text-[14px] font-medium transition-all duration-500 ease-out active:scale-[0.97] overflow-hidden";
  const primary = "bg-white text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.6)] hover:bg-white/90 hover:scale-[1.02]";
  const secondary = "bg-white/[0.03] backdrop-blur-md ring-1 ring-inset ring-white/10 text-white/80 hover:bg-white/10 hover:text-white hover:ring-white/30 hover:scale-[1.02] shadow-[0_0_20px_-10px_rgba(255,255,255,0.05)]";

  return (
    <Link className={`${base} ${variant === "primary" ? primary : secondary}`} href={href}>
      <span className="relative z-10 flex items-center gap-2">
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
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
      desc: "We treat every idea as a hypothesis that must be rigorously tested against empirical data.",
    },
    {
      num: "02",
      title: "Data Before Conclusions",
      desc: "Historical results are evaluated against carefully defined datasets and strict validation procedures.",
    },
    {
      num: "03",
      title: "Reproducibility Matters",
      desc: "Research should be understandable, inspectable, and repeatable across different market regimes.",
    },
  ];

  return (
    <section className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-transparent to-[#020202]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-mesh {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.1; }
          50% { transform: scale(1.05) translateY(-2%); opacity: 0.2; }
        }
        @keyframes subtle-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40 z-0">
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,transparent_50%)]" 
          style={{ animation: 'float-mesh 15s ease-in-out infinite' }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] space-y-20 z-10">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <SectionHeading>Built around evidence, not assumptions.</SectionHeading>
          </div>
        </FadeIn>
        
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p, i) => (
            <FadeIn key={p.num} delay={i * 150}>
              <div className="group relative h-full overflow-hidden rounded-[24px] bg-white/[0.02] p-10 transition-all duration-700 hover:bg-white/[0.04] hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)] hover:-translate-y-2 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.15]">
                {/* Premium Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                <span className="mb-6 inline-flex items-center justify-center rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-white/50 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white border border-white/5">{p.num}</span>
                <h3 className="mb-4 text-[22px] font-medium tracking-wide text-white drop-shadow-sm transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70">{p.title}</h3>
                <p className="text-[16px] leading-relaxed text-white/40 font-light transition-colors duration-500 group-hover:text-white/60">{p.desc}</p>
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
    <section className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_70%)]">
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-20 lg:grid-cols-2 z-10">
        <FadeIn>
          <div className="space-y-8 pr-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-white/70 uppercase">Initiative</span>
            </div>
            <SectionHeading>What is Elvaris?</SectionHeading>
            <SectionSubtitle>
              Elvaris is a research and technology initiative focused on understanding how data, artificial intelligence, machine learning, and quantitative methods can be combined to study complex market systems.
            </SectionSubtitle>
            <div className="pt-6">
              <CTAButton href="/about">Learn more about Elvaris</CTAButton>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />
            
            {areas.map((area, i) => (
              <div key={area} className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#050505]/60 p-5 backdrop-blur-xl transition-all duration-500 ease-out hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors duration-500 group-hover:bg-black" />
                </div>
                <span className="text-[15px] font-medium text-white/60 transition-colors duration-500 group-hover:text-white">{area}</span>
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
    <section className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32 overflow-hidden bg-black/50">
      <div className="relative mx-auto max-w-[1240px] z-10">
        <FadeIn>
          <div className="mb-24 text-center max-w-3xl mx-auto space-y-6">
            <SectionHeading>The Research Pipeline</SectionHeading>
            <SectionSubtitle>A systematic approach to exploring markets, computation, and intelligence.</SectionSubtitle>
          </div>
        </FadeIn>

        <div className="relative mx-auto max-w-[1100px] pt-12">
          {/* Real Pipeline Track (Desktop) */}
          <div className="absolute top-[86px] left-[8.33%] right-[8.33%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block">
            {/* Animated Laser Beam */}
            <div 
              className="absolute top-0 left-0 h-[2px] w-[20%] -translate-y-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.9)]" 
              style={{ animation: 'sweep-line 5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
            />
          </div>

          {/* Real Pipeline Track (Mobile) */}
          <div className="absolute top-[86px] bottom-[86px] left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:hidden">
            <div 
              className="w-[2px] h-[15%] -translate-x-[0.5px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.9)]" 
              style={{ animation: 'sweep-line-vertical 5s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
            />
          </div>
          
          <div className="grid gap-y-16 grid-cols-1 lg:grid-cols-6 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={step} delay={i * 120}>
                <div className="group relative flex flex-col items-center justify-start text-center">
                  {/* Premium Structural Node */}
                  <div className="relative z-10 flex size-[72px] items-center justify-center rounded-full border border-white/5 bg-[#030303] shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_0_30px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out group-hover:border-white/30 group-hover:bg-white/[0.02] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08),inset_0_0_25px_rgba(255,255,255,0.05)] group-hover:scale-110 backdrop-blur-md">
                    {/* Inner glowing ring */}
                    <div className="absolute inset-[8px] rounded-full border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent transition-all duration-700 group-hover:border-white/20 group-hover:bg-white/[0.05]" />
                    {/* Node Number */}
                    <span className="relative z-10 text-[13px] font-mono tracking-widest text-white/50 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">0{i + 1}</span>
                  </div>
                  
                  {/* Label */}
                  <div className="mt-8 px-4">
                    <h4 className="text-[14px] font-medium tracking-wide text-white/50 group-hover:text-white transition-colors duration-500">{step}</h4>
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
export function ResearchSection() {
  return (
    <section className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32 overflow-hidden bg-gradient-to-t from-black to-transparent">
      <div className="mx-auto max-w-[1240px] space-y-20 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <SectionHeading>Exploring the intersection of markets, computation, and intelligence.</SectionHeading>
            </div>
            <div className="shrink-0">
              <CTAButton href="/research" variant="secondary">View all research</CTAButton>
            </div>
          </div>
        </FadeIn>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.id} delay={i * 150}>
              <Link href={`/research/${area.slug}`} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-[24px] border border-white/5 bg-[#050505]/40 p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-[#0a0a0a]/80 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,0.08)] hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="h-32 w-32 rounded-full bg-white/[0.03] blur-3xl" />
                  </div>
                  
                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-white/50 transition-colors group-hover:border-white/20 group-hover:text-white/80">{area.id}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] transition-transform duration-500 group-hover:bg-white group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/40 transition-colors duration-500 group-hover:text-black"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-[22px] font-medium text-white drop-shadow-sm relative z-10">{area.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors duration-500 relative z-10">
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
