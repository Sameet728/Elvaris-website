import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { FadeIn } from "../../components/fade-in";
import { 
  ArrowUpRight, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Award, 
  Terminal, 
  Cpu, 
  TrendingUp, 
  Users, 
  Briefcase, 
  ChevronRight,
  Sparkles,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Founders | Elvaris Capital — Vedant Asawale & Sameet Pisal",
  description:
    "Meet the founders of Elvaris Capital: CEO Vedant Asawale and Managing Director Sameet Pisal. Discover how two engineering friends built an autonomous quantitative research and algorithmic trading firm with zero curve-fitting.",
  keywords: [
    "Elvaris Capital founders",
    "Vedant Asawale",
    "Sameet Pisal",
    "Vedant Asawale CEO",
    "Sameet Pisal MD",
    "Elvaris Capital CEO",
    "Elvaris Capital leadership",
    "StratMarket founders",
    "quantitative trading startup founders",
    "algorithmic trading company India",
    "autonomous market research",
  ],
  alternates: {
    canonical: "https://www.elvariscapital.in/about",
  },
  openGraph: {
    title: "About Us & Founders | Elvaris Capital — Vedant Asawale & Sameet Pisal",
    description:
      "The founding story of Elvaris Capital: How two friends, Vedant Asawale (CEO) and Sameet Pisal (MD), built an autonomous quantitative research and systematic trading firm.",
    url: "https://www.elvariscapital.in/about",
    siteName: "Elvaris Capital",
    type: "profile",
    images: [
      {
        url: "https://www.elvariscapital.in/icon.png",
        width: 512,
        height: 512,
        alt: "Elvaris Capital Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Founders | Elvaris Capital",
    description:
      "Meet CEO Vedant Asawale and Managing Director Sameet Pisal — the founders behind Elvaris Capital and StratMarket.",
  },
};

function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.elvariscapital.in/#organization",
        "name": "Elvaris Capital",
        "alternateName": ["Elvaris", "Elvaris Capital Technologies", "StratMarket by Elvaris"],
        "url": "https://www.elvariscapital.in/",
        "logo": "https://www.elvariscapital.in/icon.png",
        "foundingDate": "2026",
        "founders": [
          {
            "@type": "Person",
            "@id": "https://www.elvariscapital.in/#vedant-asawale",
            "name": "Vedant Asawale",
            "jobTitle": "Chief Executive Officer & Co-Founder",
            "worksFor": { "@id": "https://www.elvariscapital.in/#organization" },
            "sameAs": ["https://www.linkedin.com/in/vedant-asawale-263327364/"],
            "description":
              "Co-Founder and Chief Executive Officer (CEO) of Elvaris Capital, leading algorithmic trading strategy architecture, quantitative research pipelines, and institutional corporate vision.",
            "knowsAbout": [
              "Quantitative Finance",
              "Algorithmic Trading",
              "Pine Script v5",
              "Python MetaTrader 5",
              "Monte Carlo Simulations",
              "Market Microstructure"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://www.elvariscapital.in/#sameet-pisal",
            "name": "Sameet Pisal",
            "jobTitle": "Managing Director & Co-Founder",
            "worksFor": { "@id": "https://www.elvariscapital.in/#organization" },
            "sameAs": ["https://www.linkedin.com/in/sameet-pisal/"],
            "description":
              "Co-Founder and Managing Director (MD) of Elvaris Capital, leading engineering infrastructure, full-stack quantitative platforms, distributed systems, and operational growth.",
            "knowsAbout": [
              "Distributed Systems",
              "High-Throughput Data Pipelines",
              "Full-Stack Web Engineering",
              "VPS Execution Signals",
              "Quantitative Analytics",
              "System Operations"
            ]
          }
        ],
        "description":
          "Elvaris Capital is an autonomous quantitative research and technology firm engineering verifiable algorithmic trading strategies, execution infrastructure, and market intelligence platforms."
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.elvariscapital.in/about#webpage",
        "url": "https://www.elvariscapital.in/about",
        "name": "About Us & Founders — Elvaris Capital",
        "description":
          "Learn about Elvaris Capital's founding story, mission, and leadership team led by CEO Vedant Asawale and Managing Director Sameet Pisal.",
        "about": { "@id": "https://www.elvariscapital.in/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.elvariscapital.in/about#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When was Elvaris Capital founded?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Elvaris Capital was founded in 2026 by two engineering friends: Vedant Asawale (Chief Executive Officer) and Sameet Pisal (Managing Director)."
            }
          },
          {
            "@type": "Question",
            "name": "Who founded Elvaris Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Elvaris Capital was founded by two friends and technologists: Vedant Asawale (Chief Executive Officer) and Sameet Pisal (Managing Director)."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the CEO of Elvaris Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Vedant Asawale is the Chief Executive Officer (CEO) and Co-Founder of Elvaris Capital. He leads the quantitative strategy research, mathematical modeling, and algorithmic architecture."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the Managing Director of Elvaris Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Sameet Pisal is the Managing Director (MD) and Co-Founder of Elvaris Capital. He oversees software engineering, distributed data pipelines, platform operations, and execution infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "What is the founding story of Elvaris Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Elvaris Capital began when two engineering friends, Vedant Asawale and Sameet Pisal, united over their shared frustration with false promises in retail algorithmic trading—such as curve-fitted backtests and black-box indicators. They set out to build an institutional-grade, 6-stage autonomous research pipeline and created StratMarket to deliver verifiable, tick-level tested trading strategies with zero curve-fitting."
            }
          },
          {
            "@type": "Question",
            "name": "What are the official LinkedIn profiles of the Elvaris Capital founders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "CEO Vedant Asawale can be reached on LinkedIn at https://www.linkedin.com/in/vedant-asawale-263327364/ and Managing Director Sameet Pisal can be reached on LinkedIn at https://www.linkedin.com/in/sameet-pisal/."
            }
          },
          {
            "@type": "Question",
            "name": "What products does Elvaris Capital build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Elvaris Capital engineers autonomous quantitative research pipelines, the flagship StratMarket algorithmic strategy marketplace (stratmarket.elvariscapital.in), and institutional ETF analytics platforms."
            }
          }
        ]
      }
    ]
  };

  const principles = [
    {
      title: "Zero Curve-Fitting",
      desc: "Every candidate strategy undergoes 30% out-of-sample holdout validation and 1,000+ Monte Carlo reshufflings. If an edge is fragile, it is discarded immediately.",
      icon: ShieldCheck
    },
    {
      title: "Tick-Level Realism",
      desc: "Backtests include realistic exchange fees, commission drag, live spread variance, and slippage modeling. We never trade on paper illusions.",
      icon: TrendingUp
    },
    {
      title: "Scientific Reproducibility",
      desc: "Every claim, metric, and hypothesis must be mathematically provable and independently verifiable across independent market regimes.",
      icon: Terminal
    },
    {
      title: "Engineering Excellence",
      desc: "Software reliability directly impacts research integrity. We build ultra-low latency execution webhooks and resilient distributed systems.",
      icon: Cpu
    },
    {
      title: "Radical Transparency",
      desc: "We display complete historical drawdowns, win-rates, execution logs, and full code specifications without paywalls or hidden catches.",
      icon: Award
    },
    {
      title: "Curiosity-Driven Research",
      desc: "The best breakthroughs emerge from asking fundamental questions about market microstructure rather than chasing superficial indicators.",
      icon: Sparkles
    }
  ];

  const milestones = [
    {
      period: "The Genesis",
      title: "Two Friends, One Common Obsession",
      desc: "Vedant Asawale and Sameet Pisal met during their engineering studies, bound by a passionate fascination for computational mathematics, distributed computing, and the hidden mechanics of financial markets. Long evenings debating market microstructures and writing custom backtesting scripts formed the foundation of their friendship and future collaboration."
    },
    {
      period: "The Frustration",
      title: "Exposing the Flaws in Retail Trading",
      desc: "As they deepened their research, Vedant and Sameet grew increasingly disillusioned by the retail trading landscape: widespread curve-fitting, survivor-biased marketing, and black-box indicators sold as holy grails that consistently failed live execution. They resolved that retail and institutional participants deserved genuine, verifiable quantitative research."
    },
    {
      period: "The Breakthrough",
      title: "Engineering the 6-Stage Autonomous Pipeline",
      desc: "Working through late-night coding sessions, Vedant (focusing on quantitative modeling and strategy synthesis) and Sameet (focusing on scalable infrastructure and data ingestion) engineered Elvaris Capital's 6-Stage Autonomous Research Pipeline. For the first time, candidate strategies were automatically subjected to rigorous out-of-sample stress testing before any code went live."
    },
    {
      period: "The Deployment",
      title: "Launching StratMarket & Expanding the Vision",
      desc: "What started as an ambitious garage project evolved into Elvaris Capital. The duo officially deployed StratMarket (stratmarket.elvariscapital.in) — an institutional algorithmic trading marketplace offering verified Pine Script v5 and Python MT5 strategies with real-time candlestick execution and sub-50ms VPS signal dispatch."
    }
  ];

  const faqs = [
    {
      q: "When was Elvaris Capital founded?",
      a: "Elvaris Capital was founded in 2026 by two engineering friends: Vedant Asawale (Chief Executive Officer) and Sameet Pisal (Managing Director)."
    },
    {
      q: "Who founded Elvaris Capital?",
      a: "Elvaris Capital was founded by two engineering friends and technologists: Vedant Asawale (Chief Executive Officer) and Sameet Pisal (Managing Director)."
    },
    {
      q: "Who is the CEO of Elvaris Capital?",
      a: "Vedant Asawale serves as the Chief Executive Officer (CEO) and Co-Founder. He architects the mathematical models, algorithmic execution engines, and overall quantitative research vision."
    },
    {
      q: "Who is the Managing Director of Elvaris Capital?",
      a: "Sameet Pisal serves as the Managing Director (MD) and Co-Founder. He directs the technological infrastructure, distributed data pipelines, platform engineering, and organizational operations."
    },
    {
      q: "What was the inspiration behind starting Elvaris Capital?",
      a: "The founders observed that the trading industry was flooded with over-optimized, curve-fitted models that collapsed in real market conditions. Vedant and Sameet set out to build an autonomous quantitative laboratory that applies aerospace-grade validation standards to trading strategies."
    },
    {
      q: "How can I connect with the founders on LinkedIn?",
      a: "You can connect with CEO Vedant Asawale at linkedin.com/in/vedant-asawale-263327364/ and Managing Director Sameet Pisal at linkedin.com/in/sameet-pisal/."
    },
    {
      q: "What platforms and products has Elvaris Capital launched?",
      a: "Elvaris Capital has launched StratMarket (stratmarket.elvariscapital.in), a verified institutional strategy marketplace, along with proprietary ETF analytics suites and automated quantitative research pipelines."
    }
  ];

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col selection:bg-[#CBB894]/20 selection:text-white">
      {/* Schema.org Structured Data for Google Search & AI Chatbots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-white/[0.06]">
          {/* Ambient Lighting & Luminous Halos */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#CBB894]/10 via-white/[0.02] to-transparent blur-3xl pointer-events-none -z-10" />
          <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1240px]">
            <FadeIn>
              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#CBB894]/30 bg-[#CBB894]/[0.06] px-3.5 py-1 text-xs font-mono text-[#CBB894] tracking-wider uppercase">
                  <span className="size-1.5 rounded-full bg-[#CBB894] animate-pulse" />
                  Leadership &amp; Founding Story
                </div>

                <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.02] font-light tracking-tight text-white">
                  Two friends. One vision.<br />
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#CBB894]">
                    Autonomous market intelligence.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed text-zinc-300 max-w-3xl font-light">
                  Elvaris Capital was founded by two engineering friends — <strong>Vedant Asawale</strong> and <strong>Sameet Pisal</strong> — united by a single conviction: to replace financial curve-fitting, black-box speculation, and retail hype with mathematically verifiable, institutional-grade quantitative systems.
                </p>

                {/* Quick Meta Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-zinc-400">
                  <span className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-1.5">
                    Founded in 2026
                  </span>
                  <span className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-1.5">
                    Co-Founders: Vedant Asawale &amp; Sameet Pisal
                  </span>
                  <span className="rounded-md bg-white/[0.04] border border-white/10 px-3 py-1.5 text-[#CBB894]">
                    Zero Curve-Fitting Guarantee
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* QUICK FACTS / MACHINE-READABLE ENTITY SUMMARY (FOR AI & HUMAN OVERVIEW) */}
        <section className="px-6 py-12 bg-black/40 border-b border-white/[0.06]">
          <div className="mx-auto max-w-[1240px]">
            <FadeIn>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-[#CBB894]">
                  <Briefcase className="size-3.5" />
                  <span>Executive Factsheet &amp; Entity Profile</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block mb-1">Company</span>
                    <strong className="text-white font-medium text-base">Elvaris Capital</strong>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block mb-1">Chief Executive Officer (CEO)</span>
                    <strong className="text-white font-medium text-base">Vedant Asawale</strong>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block mb-1">Managing Director (MD)</span>
                    <strong className="text-white font-medium text-base">Sameet Pisal</strong>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block mb-1">Core Focus</span>
                    <span className="text-zinc-300 font-medium text-base">Quantitative &amp; Algorithmic Research</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MEET THE FOUNDERS SECTION */}
        <section className="px-6 py-20 sm:py-28 relative overflow-hidden" id="founders">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono text-[#CBB894] uppercase tracking-widest block">
                  EXECUTIVE LEADERSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Meet the Founders
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed">
                  Complementary skills, shared standards. Discover the technologists driving Elvaris Capital&apos;s quantitative systems and operational growth.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* FOUNDER 1: VEDANT ASAWALE (CEO) */}
              <FadeIn delay={100}>
                <article className="group relative rounded-2xl border border-white/[0.12] hover:border-[#CBB894]/50 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(203,184,148,0.12)]">
                  {/* Accent Hairline */}
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#CBB894]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-6">
                    {/* Header: Monogram Avatar + Roles */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="size-16 rounded-2xl bg-gradient-to-br from-white/10 to-[#CBB894]/20 border border-white/20 flex items-center justify-center text-white text-xl font-mono font-bold shadow-inner">
                          VA
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-medium text-white tracking-tight">
                              Vedant Asawale
                            </h3>
                            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" title="Verified Founder" />
                          </div>
                          <span className="text-xs font-mono text-[#CBB894] uppercase tracking-wider block mt-0.5">
                            Chief Executive Officer &amp; Co-Founder
                          </span>
                        </div>
                      </div>

                      <a
                        href="https://www.linkedin.com/in/vedant-asawale-263327364/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-[#CBB894] hover:bg-[#CBB894]/10 transition-all duration-300"
                        title="Vedant Asawale LinkedIn Profile"
                        aria-label="Vedant Asawale on LinkedIn"
                      >
                        <LinkedInIcon className="size-5" />
                      </a>
                    </div>

                    {/* Bio */}
                    <div className="space-y-3 text-sm text-zinc-300 leading-relaxed font-light">
                      <p>
                        As CEO of Elvaris Capital, <strong>Vedant Asawale</strong> directs the company&apos;s corporate strategy, quantitative research frameworks, and algorithmic architecture. He conceptualized Elvaris Capital&apos;s autonomous 6-stage strategy validation engine and leads the mathematical modeling of high-probability trading structures.
                      </p>
                      <p>
                        With a deep dedication to market microstructure and statistics, Vedant spearheads the development of verifiable Pine Script v5 and Python MT5 execution algorithms. He is a fierce advocate of eradicating curve-fitting and survivorship bias across systematic finance.
                      </p>
                    </div>

                    {/* Expertise Badges */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {["Quantitative Modeling", "Algorithmic Architecture", "Pine Script v5", "Python MT5", "Monte Carlo Validation", "Risk Engines"].map(tag => (
                          <span key={tag} className="text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-[#CBB894] pl-4 py-1 text-xs sm:text-sm italic text-zinc-400">
                      &ldquo;Financial markets are noisy, but genuine mathematical edges exist when you refuse to curve-fit to historical hindsight.&rdquo;
                    </blockquote>
                  </div>

                  {/* LinkedIn Action Button */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06]">
                    <a
                      href="https://www.linkedin.com/in/vedant-asawale-263327364/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-mono font-medium uppercase tracking-wider text-white hover:border-[#CBB894] hover:bg-[#CBB894]/10 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedInIcon className="size-4 text-[#0077B5]" />
                        <span>Connect with Vedant Asawale</span>
                      </span>
                      <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
                    </a>
                  </div>
                </article>
              </FadeIn>

              {/* FOUNDER 2: SAMEET PISAL (MD) */}
              <FadeIn delay={200}>
                <article className="group relative rounded-2xl border border-white/[0.12] hover:border-[#CBB894]/50 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(203,184,148,0.12)]">
                  {/* Accent Hairline */}
                  <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#CBB894]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-6">
                    {/* Header: Monogram Avatar + Roles */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="size-16 rounded-2xl bg-gradient-to-br from-white/10 to-[#CBB894]/20 border border-white/20 flex items-center justify-center text-white text-xl font-mono font-bold shadow-inner">
                          SP
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-medium text-white tracking-tight">
                              Sameet Pisal
                            </h3>
                            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" title="Verified Founder" />
                          </div>
                          <span className="text-xs font-mono text-[#CBB894] uppercase tracking-wider block mt-0.5">
                            Managing Director &amp; Co-Founder
                          </span>
                        </div>
                      </div>

                      <a
                        href="https://www.linkedin.com/in/sameet-pisal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-[#CBB894] hover:bg-[#CBB894]/10 transition-all duration-300"
                        title="Sameet Pisal LinkedIn Profile"
                        aria-label="Sameet Pisal on LinkedIn"
                      >
                        <LinkedInIcon className="size-5" />
                      </a>
                    </div>

                    {/* Bio */}
                    <div className="space-y-3 text-sm text-zinc-300 leading-relaxed font-light">
                      <p>
                        As Managing Director of Elvaris Capital, <strong>Sameet Pisal</strong> oversees engineering infrastructure, high-throughput distributed pipelines, operational strategy, and product execution. Sameet architects the resilient systems powering Elvaris Capital&apos;s real-time platforms.
                      </p>
                      <p>
                        Combining deep software engineering craftsmanship with quantitative systems intuition, Sameet engineered the ultra-low latency webhook dispatch architecture behind StratMarket and manages data governance across institutional market feeds. He leads the technological scale of Elvaris Capital.
                      </p>
                    </div>

                    {/* Expertise Badges */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {["Distributed Systems", "Full-Stack Architecture", "High-Throughput Pipelines", "VPS Signal Dispatch", "Cloud Infrastructure", "System Reliability"].map(tag => (
                          <span key={tag} className="text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-[#CBB894] pl-4 py-1 text-xs sm:text-sm italic text-zinc-400">
                      &ldquo;A quantitative algorithm is only as dependable as the infrastructure executing it. We engineer for tick-level precision and faultless resilience.&rdquo;
                    </blockquote>
                  </div>

                  {/* LinkedIn Action Button */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06]">
                    <a
                      href="https://www.linkedin.com/in/sameet-pisal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-mono font-medium uppercase tracking-wider text-white hover:border-[#CBB894] hover:bg-[#CBB894]/10 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedInIcon className="size-4 text-[#0077B5]" />
                        <span>Connect with Sameet Pisal</span>
                      </span>
                      <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* THE FOUNDING STORY: "HOW TWO FRIENDS BUILT ELVARIS CAPITAL" */}
        <section className="px-6 py-20 sm:py-28 bg-[#030304] border-y border-white/[0.06]">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-mono text-[#CBB894] uppercase tracking-widest block">
                  ORIGIN STORY // 2026 — PRESENT
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                  How Two Friends Built Elvaris Capital
                </h2>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                  The journey of Vedant Asawale and Sameet Pisal: from college engineering friends debating market efficiency late into the night to co-founding an autonomous quantitative research firm.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m, idx) => (
                <FadeIn key={m.title} delay={idx * 100}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-colors">
                    <div>
                      <div className="text-xs font-mono text-[#CBB894] uppercase tracking-widest mb-3">
                        {String(idx + 1).padStart(2, '0')} // {m.period}
                      </div>
                      <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Narrative Deep Dive */}
            <FadeIn delay={300}>
              <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.02] via-[#CBB894]/[0.02] to-transparent p-8 sm:p-12 space-y-6">
                <h3 className="text-2xl font-light text-white tracking-tight">
                  The Breakthrough Thesis
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light max-w-4xl">
                  <p>
                    One evening in 2026, during an intense debugging session of backtest discrepancies, Vedant and Sameet asked a radical question: <em>What if algorithmic strategies were subjected to the same rigorous validation standards as aerospace safety software?</em>
                  </p>
                  <p>
                    In traditional finance, analysts often tweak parameters until a backtest produces an impressive Sharpe ratio — a dangerous trap known as <strong>overfitting</strong> or <strong>data mining bias</strong>. The strategy looks flawless on past charts, but collapses the moment live capital is deployed.
                  </p>
                  <p>
                    Vedant and Sameet designed an autonomous solution: a <strong>6-stage research pipeline</strong> where candidate models are split across strict in-sample training and 30% out-of-sample holdout datasets. Every model is bombarded with 1,000+ Monte Carlo reshufflings, simulated liquidity vacuums, and tick-level slippage. Only strategies that survive this crucible are deployed live to <strong>StratMarket</strong>.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CORE SCIENTIFIC PRINCIPLES */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] space-y-16">
            <FadeIn>
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono text-[#CBB894] uppercase tracking-widest block">
                  METHODOLOGY &amp; ETHOS
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Our Engineering Principles
                </h2>
                <p className="text-base text-zinc-400 font-light">
                  The non-negotiable standards that govern every line of code, backtest, and strategy deployed at Elvaris Capital.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((item, i) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={i * 80}>
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8 hover:bg-white/[0.03] hover:border-[#CBB894]/30 transition-all duration-300 flex flex-col justify-between h-full">
                      <div>
                        <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#CBB894] mb-5">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) — OPTIMIZED FOR SEARCH & AI CHATBOTS */}
        <section className="px-6 py-20 sm:py-28 bg-[#020204] border-t border-white/[0.06]" id="faq">
          <div className="mx-auto max-w-[1240px] space-y-12">
            <FadeIn>
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono text-[#CBB894] uppercase tracking-widest block">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Everything About Elvaris Capital &amp; Leadership
                </h2>
                <p className="text-sm text-zinc-400 font-light">
                  Verified answers about our company, founders, technology, and platforms for researchers, institutions, and search engines.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 60}>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-3">
                    <h3 className="text-base font-medium text-white flex items-start gap-2">
                      <span className="text-[#CBB894] font-mono text-sm">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CALL TO ACTION */}
        <section className="px-6 py-20 border-t border-white/[0.06] bg-black">
          <div className="mx-auto max-w-[1240px]">
            <FadeIn>
              <div className="rounded-2xl border border-[#CBB894]/30 bg-gradient-to-r from-[#CBB894]/[0.08] via-white/[0.02] to-transparent p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CBB894]">
                    CONNECT &amp; EXPLORE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    Explore our products or speak with the founders.
                  </h3>
                  <p className="text-sm text-zinc-400 font-light">
                    Whether you are an institutional participant, quantitative researcher, or prop firm seeking verified algorithmic strategies, we invite you to connect.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href="/product"
                    className="rounded-lg bg-white px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-[#CBB894] transition-colors"
                  >
                    Explore Products
                  </Link>
                  <a
                    href="https://stratmarket.elvariscapital.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-xs font-mono font-medium uppercase tracking-wider text-white hover:border-[#CBB894] hover:bg-white/10 transition-colors"
                  >
                    <span>StratMarket ↗</span>
                  </a>
                  <Link
                    href="/contact"
                    className="rounded-lg border border-white/10 px-6 py-3 text-xs font-mono font-medium uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
