import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Elvaris Capital — Parent Organization & Quantitative Firm",
  description:
    "Learn about Elvaris Capital (elvariscapital.in), the institutional quantitative research organization behind StratMarket, our research lab, and data provenance standards.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "About Elvaris Capital — Parent Organization & Quantitative Strategy Firm",
  description:
    "Corporate background, quantitative research philosophy, and institutional infrastructure of Elvaris Capital (elvariscapital.in), parent organization of StratMarket.",
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

export default function AboutElvarisCapitalPage() {
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
        <span className="text-white">About Elvaris Capital</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Corporate Overview &amp; Parent Organization
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          About Elvaris Capital (elvariscapital.in)
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          <strong className="text-white font-medium">Elvaris Capital</strong> is an institutional quantitative research and financial technology firm operating at the intersection of mathematical finance, automated execution engineering, and statistical learning. Elvaris Capital is the parent organization, research laboratory, and operating firm behind <strong className="text-white font-medium">StratMarket</strong>.
        </p>
      </div>

      {/* Official Parent Org Highlight Card */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white tracking-tight m-0">
            Official Entity Details
          </h2>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Registry
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse text-white/70">
            <tbody className="divide-y divide-white/5 font-mono text-xs sm:text-sm">
              <tr>
                <td className="py-3 pr-4 text-white font-medium w-1/3">Parent Organization:</td>
                <td className="py-3 text-white/90">Elvaris Capital</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-white font-medium">Official Corporate Portal:</td>
                <td className="py-3">
                  <a
                    href="https://elvariscapital.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
                  >
                    https://elvariscapital.in ↗
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-white font-medium">Flagship Market Platform:</td>
                <td className="py-3 text-white/90">StratMarket (Algorithmic Strategy Marketplace)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-white font-medium">Research Specialization:</td>
                <td className="py-3 text-white/90">Quantitative Alpha Research, Statistical Arbitrage, High-Fidelity Signal Relays</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-white font-medium">Execution Infrastructure:</td>
                <td className="py-3 text-white/90">24/7 Dedicated Cloud VPS Clusters in Frankfurt &amp; London</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Elvaris Capital Built StratMarket */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          Why Elvaris Capital Built StratMarket
        </h2>
        <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
          <p>
            The retail and prop trading industry is saturated with unverified trading robots, deceptive marketing, and curve-fitted backtests that collapse when deployed with live broker spreads and slippage.
          </p>
          <p>
            Elvaris Capital founded StratMarket to democratize institutional-grade quantitative discipline. By releasing verified algorithmic strategies with full transparent provenance, unauthenticated research reports, and 100% open-access live chart tools, traders can evaluate strategies with the same mathematical scrutiny employed by hedge fund allocators.
          </p>
        </div>
      </section>

      {/* The Elvaris Capital Quant Lab Philosophy */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white tracking-tight">
          The Elvaris Capital Quant Lab Philosophy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-white/40 mb-2">01 / PRINCIPLE</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Absolute Mathematical Transparency
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              No black-box obscurity. Every listed strategy clearly delineates its governing economic hypothesis, Sharpe ratio, Calmar ratio, win rate, and max drawdown.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-white/40 mb-2">02 / PRINCIPLE</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Realistic Friction Modeling
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              All backtests incorporate institutional commissions ($2.50 per standard lot) and 1.0+ pip slippage drag, ensuring performance metrics survive live market execution.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-white/40 mb-2">03 / PRINCIPLE</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Sovereign Risk Governance
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Server-enforced drawdown circuit breakers and dynamic volatility bracket stops prevent catastrophic tail-risk events.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-white/40 mb-2">04 / PRINCIPLE</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Continuous VPS Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Strategies execute continuously on dedicated 24/7 VPS servers, dispatching real-time signals via webhooks in sub-50 milliseconds.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Back to Docs Hub
        </Link>
        <Link
          href="/docs/quantitative-methodology"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Research Methodology →
        </Link>
      </div>
    </article>
  );
}

