import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { FadeIn } from "../components/fade-in";
import { 
  ArrowLeft, 
  Home, 
  Terminal, 
  Compass, 
  BookOpen, 
  Users, 
  ArrowUpRight, 
  ShieldAlert,
  Search,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Coordinate Not Found | Elvaris Capital",
  description: "The requested quantitative model, strategy, or document does not exist in the active Elvaris Capital index.",
};

export default function NotFound() {
  const directoryLinks = [
    {
      id: "01",
      title: "Quantitative Research",
      desc: "Explore autonomous hypothesis testing, feature clustering, and market microstructure datasets.",
      href: "/research",
      badge: "Pipeline Engine",
    },
    {
      id: "02",
      title: "StratMarket Terminal",
      desc: "Institutional algorithmic strategy marketplace with tick-level verified candlestick execution.",
      href: "/product",
      badge: "Live Products",
    },
    {
      id: "03",
      title: "Documentation Hub",
      desc: "Comprehensive guides, Pine Script v5 & Python MT5 execution architectures, and glossaries.",
      href: "/docs",
      badge: "Knowledge Base",
    },
    {
      id: "04",
      title: "Leadership & Founders",
      desc: "Meet CEO Vedant Asawale and MD & Head of Research Sameet Pisal, and read the founding story.",
      href: "/about",
      badge: "Executive Team",
    },
  ];

  return (
    <div className="bg-[#000000] text-foreground min-h-screen flex flex-col selection:bg-[#CBB894]/20 selection:text-white relative overflow-hidden">
      {/* Background Data Grid & Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] -z-10"
      >
        <div className="absolute inset-0 bg-data-grid animate-grid-pan opacity-20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#CBB894]/15 via-white/[0.03] to-transparent blur-3xl pointer-events-none" />
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col justify-center px-6 pt-28 pb-20 sm:pt-36 sm:pb-24 relative z-10">
        <div className="mx-auto max-w-[1100px] w-full space-y-16">
          
          {/* Main Error Block */}
          <FadeIn>
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              
              {/* Telemetry Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3.5 py-1 text-xs font-mono text-amber-400 tracking-wider uppercase">
                <span className="size-1.5 rounded-full bg-amber-400 animate-ping" />
                <span className="font-semibold">STATUS 404</span>
                <span className="text-zinc-600">/</span>
                <span>NULL ROUTE DETECTED</span>
              </div>

              {/* Grand Typography Number */}
              <div className="relative">
                <div className="text-[clamp(100px,18vw,200px)] font-extralight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-white/5 select-none leading-none font-mono drop-shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                  404
                </div>
                <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
                  <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#CBB894]/60 to-transparent" />
                </div>
              </div>

              {/* Explanatory Typography */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                  Coordinate Out of Bounds.
                </h1>
                <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto font-light leading-relaxed">
                  The requested endpoint, quantitative strategy, or research document does not exist in the active index or has been relocated during pipeline re-optimization.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#CBB894] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(203,184,148,0.4)]"
                >
                  <Home className="size-4" />
                  <span>Return to Home</span>
                </Link>

                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-200 hover:text-white hover:border-[#CBB894]/60 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md"
                >
                  <Terminal className="size-4 text-[#CBB894]" />
                  <span>StratMarket Terminal</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-5 py-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <span>About &amp; Founders</span>
                </Link>
              </div>

            </div>
          </FadeIn>

          {/* Quick Routing Directory (Active Systems) */}
          <FadeIn delay={150}>
            <div className="space-y-6 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                  <Compass className="size-3.5 text-[#CBB894]" />
                  <span>Verified Platform Directories</span>
                </div>
                <span className="hidden sm:inline">Active Index 2026</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {directoryLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 hover:bg-white/[0.04] hover:border-[#CBB894]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-600 group-hover:text-[#CBB894] transition-colors">{item.id}</span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                          {item.badge}
                        </span>
                      </div>
                      <h2 className="text-base font-medium text-white group-hover:text-[#CBB894] transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#CBB894]" />
                      </h2>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Diagnostic Console Bar */}
          <FadeIn delay={250}>
            <div className="rounded-xl border border-white/[0.06] bg-[#020204] p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500 select-none">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-zinc-400">TELEMETRY: ALL CORE SERVICES OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="text-zinc-600">PROTOCOL: TLS 1.3 / NEXT.JS</span>
                <span>•</span>
                <span className="text-zinc-600">GATEWAY: ELVARIS-EDGE-01</span>
                <span>•</span>
                <span className="text-zinc-400">HTTP 404 NOT_FOUND</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
