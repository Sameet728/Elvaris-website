import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Integration & Webhook APIs — Elvaris Capital",
  description:
    "Connect MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, and Zerodha to StratMarket by Elvaris Capital (elvariscapital.in). Webhook API reference.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Broker Integration & Webhook APIs — Elvaris Capital",
  description:
    "Connect MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, and Zerodha to StratMarket by Elvaris Capital (elvariscapital.in). Webhook API reference.",
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

export default function BrokerIntegrationPage() {
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
        <span className="text-white">Broker Integration</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          API &amp; Automated Execution · Elvaris Capital
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Broker Integration &amp; Webhook API Reference
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          StratMarket by <strong className="text-white font-medium">Elvaris Capital</strong> (
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            elvariscapital.in
          </a>
          ) allows traders to receive automated real-time trade signals and route them directly to retail, prop firm, and institutional brokerage accounts.
        </p>
      </div>

      {/* Supported Brokers Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            Supported Execution Destinations
          </h2>
          <span className="text-xs font-mono text-emerald-400">Institutional Bridges</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <h3 className="text-base font-semibold text-white mb-2">MetaTrader 5 (MT5)</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Native integration with MT5 via our lightweight Python bridge or PineConnector EA. Compatible with FTMO, FundedNext, and top retail brokers worldwide.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <h3 className="text-base font-semibold text-white mb-2">Interactive Brokers (IBKR)</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Direct connectivity to IBKR Trader Workstation (TWS) and IB Gateway for institutional futures, commodities, and index equities execution.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <h3 className="text-base font-semibold text-white mb-2">Alpaca Securities</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Commission-free REST and WebSocket execution API for US equities and major cryptocurrency trading pairs with instant sub-10ms fills.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <h3 className="text-base font-semibold text-white mb-2">Indian Brokers (Dhan &amp; Zerodha)</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Automated webhook execution for Indian market participants via Dhan HQ API and Zerodha Kite Connect endpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Webhook Dispatch Specs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            Webhook Payload Contract
          </h2>
          <span className="text-xs font-mono text-white/40">JSON Schema</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/60 p-5 sm:p-6 overflow-x-auto shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-white/50">
            <span>Example: Outbound Signal Payload from StratMarket</span>
            <span className="text-emerald-400">application/json</span>
          </div>
          <pre className="text-xs sm:text-sm text-white/90 font-mono leading-relaxed m-0">
{`{
  "event": "SIGNAL_TRIGGER",
  "strategy": {
    "id": "PS-01",
    "name": "Grandmaster",
    "provider": "Elvaris Capital"
  },
  "trade": {
    "instrument": "XAUUSD",
    "action": "BUY",
    "orderType": "MARKET",
    "entryPrice": 2642.50,
    "stopLoss": 2628.00,
    "takeProfit": 2671.00,
    "riskRewardRatio": 1.96,
    "recommendedRiskPct": 1.0
  },
  "metadata": {
    "timestamp": "2026-11-08T14:30:00.000Z",
    "provenance": "ELVARIS_VPS_RESEARCH_ENGINE",
    "sourceEventId": "sig_ps01_17940428"
  }
}`}
          </pre>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/risk-management"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Sovereign Risk Governance
        </Link>
        <Link
          href="/docs/faq"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Quantitative FAQ →
        </Link>
      </div>
    </article>
  );
}

