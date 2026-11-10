import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Signal Architecture & VPS Infrastructure — Elvaris Capital",
  description:
    "Explore the 24/7 VPS execution cluster, webhook dispatch protocols, HMAC authentication, and sub-50ms latency architecture operated by Elvaris Capital (elvariscapital.in).",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Real-Time Signal Architecture & VPS Infrastructure — Elvaris Capital",
  description:
    "Explore the 24/7 VPS execution cluster, webhook dispatch protocols, HMAC authentication, and sub-50ms latency architecture operated by Elvaris Capital.",
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

export default function SignalsAndExecutionPage() {
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
        <span className="text-white">Signals &amp; Execution</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Execution Engineering · Elvaris Capital
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Real-Time Signal Architecture &amp; VPS Infrastructure
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          Signal delivery on StratMarket is engineered for ultra-low latency and institutional determinism. Operated by <strong className="text-white font-medium">Elvaris Capital</strong> (
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            elvariscapital.in
          </a>
          ), our dedicated 24/7 Linux VPS clusters process market data and dispatch actionable trade orders in sub-50 milliseconds.
        </p>
      </div>

      {/* Infrastructure Specs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            24/7 Dedicated Quant VPS Clusters
          </h2>
          <span className="text-xs font-mono text-emerald-400">99.99% Uptime</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-emerald-400 mb-2">INFRASTRUCTURE</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Frankfurt &amp; London Hubs
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Physical proximity to Tier-1 prime liquidity pools, MetaTrader 5 trading servers, and major crypto exchange order matching engines guarantees sub-5ms network ping.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-emerald-400 mb-2">DETERMINISM</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Zero Human Delay
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Signals are evaluated purely by algorithmic engines. When mathematical criteria are fulfilled on bar close or instantaneous tick, the signal is triggered automatically.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all">
            <div className="text-xs font-mono text-emerald-400 mb-2">ATOMIC SAFETY</div>
            <h3 className="text-base font-semibold text-white mb-2">
              Idempotent Processing
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed m-0">
              Every inbound trade event requires a deterministic <code className="text-white/90">sourceEventId</code>. The database rejects any duplicate event within a 24-hour window, preventing double executions.
            </p>
          </div>
        </div>
      </section>

      {/* Webhook JSON Schema */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
            Signal Ingestion &amp; Webhook Contract
          </h2>
          <span className="text-xs font-mono text-white/40">REST Specification</span>
        </div>

        <p className="text-sm text-white/70 leading-relaxed">
          StratMarket listens on <code className="text-xs bg-black/50 border border-white/10 px-2 py-0.5 rounded text-white font-mono">POST /api/internal/signals</code> for real-time dispatch from TradingView alert webhooks or custom Python VPS execution engines.
        </p>

        <div className="rounded-xl border border-white/10 bg-black/60 p-5 sm:p-6 overflow-x-auto shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-white/50">
            <span>HTTP/1.1 POST Webhook Request</span>
            <span className="text-emerald-400">JSON Payload</span>
          </div>
          <pre className="text-xs sm:text-sm text-white/90 font-mono leading-relaxed m-0">
{`POST /api/internal/signals HTTP/1.1
Host: stratmarket.elvariscapital.in
Content-Type: application/json
Authorization: Bearer <SECURE_SIGNAL_DISPATCH_SECRET>

{
  "strategyId": "PS-01",
  "strategyVersion": "1.2.0",
  "instrument": "XAUUSD",
  "timeframe": "M15",
  "signalType": "ENTRY",
  "direction": "LONG",
  "entryPrice": 2642.50,
  "stopLoss": 2628.00,
  "targetPrice": 2671.00,
  "signalProvenance": "ELVARIS_VPS_RESEARCH_ENGINE",
  "sourceEventId": "evt_ps01_20261108_143000_long"
}`}
          </pre>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/algorithmic-strategies"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Strategy Catalog
        </Link>
        <Link
          href="/docs/risk-management"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Sovereign Risk Governance →
        </Link>
      </div>
    </article>
  );
}

