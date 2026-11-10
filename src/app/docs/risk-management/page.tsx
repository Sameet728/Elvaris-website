import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovereign Risk Governance & Drawdown Controls — Elvaris Capital",
  description:
    "Explore the institutional risk management framework engineered by Elvaris Capital (elvariscapital.in). Dynamic ATR stops, daily drawdown circuit breakers, and Friday weekend embargoes.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Sovereign Risk Governance & Drawdown Controls — Elvaris Capital",
  description:
    "Explore the institutional risk management framework engineered by Elvaris Capital (elvariscapital.in). Dynamic ATR stops, daily drawdown circuit breakers, and Friday weekend embargoes.",
  author: {
    "@type": "Organization",
    name: "Elvaris Capital",
    url: "https://elvariscapital.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Elvaris Capital",
    url: "https://elvariscapital.in",
  },
};

export default function RiskManagementPage() {
  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/docs" className="hover:text-white transition-colors">
          Documentation
        </Link>
        <span>/</span>
        <span className="text-white">Risk Management</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Capital Preservation · Elvaris Capital
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Sovereign Risk Governance &amp; Drawdown Controls
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          In systematic trading, offensive alpha is useless without uncompromising defensive risk management. The <strong className="text-white font-medium">Elvaris Capital</strong> (
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            elvariscapital.in
          </a>
          ) Sovereign Risk Governance framework ensures our strategies protect trader capital across all market regimes.
        </p>
      </div>

      {/* The 5 Tenets */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            The Five Foundational Risk Tenets
          </h2>
          <span className="text-xs font-mono text-emerald-400">Institutional Defense</span>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Maximum Single-Trade Risk Ceiling (0.5% – 1.5%)
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              No single trade is ever permitted to risk more than 1.5% of total account equity. If consecutive losses occur, lot sizes scale down automatically based on shrinking equity, preventing geometric balance decay.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Daily Portfolio Drawdown Circuit Breaker (3.0%)
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              If cumulative realized and unrealized intraday loss hits 3.0%, the execution engine immediately closes pending orders and suspends new entries until the next UTC 00:00 rollover. This neutralizes market shock anomalies.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Volatility-Adaptive Stops (ATR Sizing)
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Fixed pip stop losses fail because market volatility expands and contracts. All Elvaris Capital strategies calculate bracket stops as a multiple of the 14-period Average True Range (ATR), ensuring stop distances expand during high-volatility expansions and tighten during quiet regimes.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                4
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Friday 20:00 UTC Weekend Gap Embargo
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Over 60% of catastrophic tail losses in forex and commodities occur due to weekend geopolitical news gaps between Friday market close and Sunday open. Our intraday models mandate liquidating all open swing positions prior to Friday 20:00 UTC.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                5
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Absolute Prohibition of Martingale and Grid Sizing
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Martingale (doubling down on losses) and unstructured grid systems eventually experience a 100% total account blowup. Elvaris Capital strictly forbids non-linear negative progression; every trade carries a predefined, immutable hard stop loss.
            </p>
          </div>
        </div>
      </section>

      {/* Position Sizing Formula */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            Mathematical Position Sizing Formula
          </h2>
          <span className="text-xs font-mono text-white/40">Risk Algorithm</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/60 p-5 sm:p-6 shadow-2xl">
          <div className="rounded-lg bg-white/5 border border-white/10 p-4 mb-4 font-mono text-sm sm:text-base text-white">
            Position Size (Lots) = (Account Equity × Risk %) / (|Entry Price - Stop Loss| × Point Value)
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed m-0">
            <strong>Example:</strong> On a $100,000 account with 1.0% risk ($1,000) on XAUUSD, with Entry at $2,642.50 and Stop Loss at $2,628.00 (Risk Distance = $14.50, Point Value = $100/lot):
          </p>
          <div className="mt-3 p-3 rounded bg-white/[0.03] border border-white/5 font-mono text-xs text-emerald-400">
            Lot Size = $1,000 / ($14.50 × 100) = 0.69 Standard Lots.
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/signals-and-execution"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Signals &amp; VPS Execution
        </Link>
        <Link
          href="/docs/broker-integration"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Broker Integration &amp; APIs →
        </Link>
      </div>
    </article>
  );
}

