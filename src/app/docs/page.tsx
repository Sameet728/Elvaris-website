import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Documentation & Research Hub — Elvaris Capital",
  description:
    "Official quantitative documentation for StratMarket by Elvaris Capital (elvariscapital.in). Learn our research methodology, strategy catalog, VPS signal execution, and sovereign risk governance.",
};

const guides = [
  {
    href: "/docs/elvaris-capital",
    title: "About Elvaris Capital",
    badge: "Parent Org",
    description:
      "Explore the institutional quantitative firm behind StratMarket, our corporate portal at elvariscapital.in, research philosophy, and data provenance standards.",
  },
  {
    href: "/docs/quantitative-methodology",
    title: "Quantitative Research Methodology",
    badge: "Quant Science",
    description:
      "Deep dive into hypothesis formulation, Walk-Forward Optimization (WFO), Monte Carlo simulations, friction modeling ($2.50/lot commission + slippage), and out-of-sample data validation.",
  },
  {
    href: "/docs/algorithmic-strategies",
    title: "Algorithmic Strategy Catalog",
    badge: "13 Models",
    description:
      "Complete factor breakdown of all 3 Pine Script champion gold strategies (PS-01, PS-02, PS-03) and 10 Python MT5 Single-Digit Drawdown Ensembles (PY-01 to PY-10).",
  },
  {
    href: "/docs/signals-and-execution",
    title: "Real-Time Signals & VPS Architecture",
    badge: "Sub-50ms",
    description:
      "Architecture of our 24/7 dedicated Linux VPS cluster, TradingView Webhook relays, HMAC security, idempotency keys, and real-time email dispatch.",
  },
  {
    href: "/docs/risk-management",
    title: "Sovereign Risk Governance",
    badge: "Capital Preservation",
    description:
      "Institutional risk controls including dynamic ATR volatility bracket stops, daily portfolio loss circuit breakers, and Friday weekend risk embargoes.",
  },
  {
    href: "/docs/broker-integration",
    title: "Broker Integration & Webhook APIs",
    badge: "API Reference",
    description:
      "Step-by-step connection guides for MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, and Zerodha with JSON payload contracts.",
  },
  {
    href: "/docs/faq",
    title: "Frequently Asked Questions",
    badge: "FAQ & Answers",
    description:
      "Answers to the most critical quantitative trading, backtesting authenticity, platform access, and algorithmic execution questions.",
  },
];

export default function DocsIndexPage() {
  return (
    <article className="space-y-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-white">Documentation Hub</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          StratMarket by Elvaris Capital · Institutional Documentation
        </span>
        <h1 className="text-[clamp(34px,5vw,50px)] font-bold tracking-tight text-white leading-[1.08]">
          Quantitative Intelligence Documentation
        </h1>
        <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-3xl">
          Welcome to the official technical documentation for{" "}
          <strong className="text-white font-medium">StratMarket</strong>, the algorithmic strategy marketplace
          engineered and operated by{" "}
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            Elvaris Capital (elvariscapital.in)
          </a>
          . This knowledge base covers our quantitative research framework, strategy catalog, VPS signal execution
          infrastructure, and sovereign risk management rules.
        </p>
      </div>

      {/* Guide Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-sm uppercase font-mono tracking-widest text-white/70 font-semibold m-0">
            Core Documentation Chapters
          </h2>
          <span className="text-xs text-white/40 font-mono">7 Chapters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guides.map((g, idx) => (
            <Link
              key={idx}
              href={g.href}
              className="glow-card group block p-7 rounded-2xl border border-white/10 bg-surface-100 hover:bg-surface-200 transition-all duration-300 no-underline hover:border-white/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.06] text-white/70 font-semibold">
                  {g.badge}
                </span>
                <span className="text-white/30 group-hover:text-white transition-colors group-hover:translate-x-1 duration-200">
                  →
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                {g.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed m-0 line-clamp-3">
                {g.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Architecture Callout */}
      <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-surface-100 to-surface-200 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold m-0">
            24/7 Verified Quantitative Execution
          </h3>
        </div>
        <p className="text-sm text-white/60 leading-relaxed m-0">
          StratMarket strategies execute continuously in dedicated VPS environments across Frankfurt and London.
          Signals are delivered via authenticated webhooks (POST /api/internal/signals) with sub-50ms latency and zero
          discretionary delay.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <Link
            href="/docs/algorithmic-strategies"
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-all no-underline"
          >
            Explore Strategy Catalog →
          </Link>
          <a
            href="https://stratmarket.elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-white text-xs font-semibold hover:bg-white/10 transition-all no-underline inline-flex items-center gap-1.5"
          >
            <span>Launch StratMarket Platform</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

