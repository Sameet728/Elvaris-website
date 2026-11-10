import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Research Methodology & Backtest Integrity — Elvaris Capital",
  description:
    "Explore the quantitative backtesting methodology of Elvaris Capital (elvariscapital.in). Walk-Forward Analysis, Monte Carlo simulation, zero look-ahead bias, and Sharpe/Calmar mathematical formulas.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Quantitative Research Methodology & Backtest Integrity — Elvaris Capital",
  description:
    "Detailed guide to mathematical backtesting protocols, friction accounting, and statistical verification employed by Elvaris Capital on StratMarket.",
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

export default function QuantMethodologyPage() {
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
        <span className="text-white">Quantitative Methodology</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Mathematical Rigor · Elvaris Capital Quant Lab
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Quantitative Research &amp; Backtesting Methodology
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          Every trading strategy listed on StratMarket by <strong className="text-white font-medium">Elvaris Capital</strong> (
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            elvariscapital.in
          </a>
          ) is subject to strict institutional mathematical protocols. We reject over-optimized curve fitting and enforce zero look-ahead bias, realistic broker execution drag, and multi-regime stress testing.
        </p>
      </div>

      {/* 4-Stage Pipeline Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            The Four-Stage Quant Pipeline
          </h2>
          <span className="text-xs font-mono text-white/40">Rigorous Lifecycle</span>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Generate: AI-Assisted Hypothesis Codification
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Strategies start from an economic or statistical thesis (e.g. Asian session liquidity compression followed by London volume breakout, or volatility exhaustion reversion on Gold). Code is written in strict, deterministic rules with zero discretionary human intervention.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Backtest: High-Fidelity Tick Historical Simulation
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Models run against institutional tick data spanning 5,000 to over 100,000 bars. Fixed transaction fees ($2.50 per standard lot) and 1.0 to 1.5 pip slippage drag are applied to every single entry and stop-loss trigger.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Improve: Walk-Forward Optimization &amp; Versioning
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              Parameters are tested across rolling historical windows (Walk-Forward Optimization). Any strategy that demonstrates performance cliffs under minor parameter shifts is discarded. Approved models receive immutable semantic version numbers (e.g. v1.2.0).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shrink-0">
                4
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-white m-0">
                Validate: Blind Out-of-Sample &amp; Monte Carlo Stress Testing
              </h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed m-0 pl-9">
              The final 30% of data is evaluated blindly as Out-of-Sample (OOS). Furthermore, 1,000 Monte Carlo simulations randomly permute trade orders and test equity curves against catastrophic 99% Value-at-Risk (VaR) scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Mathematical Formulas Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            Core Mathematical Metrics
          </h2>
          <span className="text-xs font-mono text-white/40">Statistical Benchmarks</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 block font-semibold mb-1">
              RISK-ADJUSTED RETURN
            </span>
            <h3 className="text-base font-semibold text-white mb-2">Sharpe Ratio</h3>
            <div className="rounded-lg bg-black/60 border border-white/10 p-3 mb-3 font-mono text-xs text-white/90">
              SR = (E[Rp] - Rf) / σp
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Measures annualized excess return per unit of total portfolio volatility. StratMarket strategies range from 1.65 to 10.71.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 block font-semibold mb-1">
              DRAWDOWN RECOVERY
            </span>
            <h3 className="text-base font-semibold text-white mb-2">Calmar Ratio</h3>
            <div className="rounded-lg bg-black/60 border border-white/10 p-3 mb-3 font-mono text-xs text-white/90">
              CR = Annualized Return / |Max Drawdown|
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Quantifies return relative to the single deepest peak-to-trough decline. A Calmar ratio above 5.0 represents elite institutional risk containment.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 block font-semibold mb-1">
              GROSS EXPECTANCY
            </span>
            <h3 className="text-base font-semibold text-white mb-2">Profit Factor</h3>
            <div className="rounded-lg bg-black/60 border border-white/10 p-3 mb-3 font-mono text-xs text-white/90">
              PF = Gross Profits / Gross Losses
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Gross dollar winnings divided by gross dollar losses. PS-02 achieves a 9.16 Profit Factor, and PY-05 achieves 2.28 over 5 continuous years.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 block font-semibold mb-1">
              WORST-CASE DROP
            </span>
            <h3 className="text-base font-semibold text-white mb-2">Maximum Drawdown</h3>
            <div className="rounded-lg bg-black/60 border border-white/10 p-3 mb-3 font-mono text-xs text-white/90">
              MDD = (Peak - Trough) / Peak
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              All 10 Python ensembles are engineered with hard single-digit drawdowns (&lt; 10%), and Pine Script strategies under 2.5%.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/elvaris-capital"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← About Elvaris Capital
        </Link>
        <Link
          href="/docs/algorithmic-strategies"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Strategy Catalog →
        </Link>
      </div>
    </article>
  );
}

