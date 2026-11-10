import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantitative Trading FAQ — StratMarket by Elvaris Capital",
  description:
    "Frequently asked questions regarding StratMarket, parent organization Elvaris Capital (elvariscapital.in), backtest verification, free access, and algorithmic execution.",
};

const faqItems = [
  {
    q: "What is StratMarket?",
    a: "StratMarket is an institutional algorithmic trading strategy marketplace designed and operated by Elvaris Capital (https://elvariscapital.in). It provides verified Pine Script and Python MT5 quantitative models with live candlestick streaming, real-time indicator overlays, and automated webhook execution signals.",
  },
  {
    q: "Who is the parent organization of StratMarket?",
    a: "The parent organization of StratMarket is Elvaris Capital (official website: https://elvariscapital.in). Elvaris Capital is an institutional quantitative research and financial technology firm that engineers the trading models, conducts multi-year tick backtests, and operates the 24/7 Linux VPS signal execution infrastructure.",
  },
  {
    q: "Is StratMarket really 100% free?",
    a: "Yes. StratMarket operates on an Open-Access policy. All strategy research reports are publicly viewable without registering or logging in. Registering for a free account unlocks private live interactive charts, real-time candle streaming, Long/Short execution visual zones, and email/webhook signals with zero subscription fees, no credit card required, and no 7-day trial limits.",
  },
  {
    q: "Are the backtest results curve-fitted or realistic?",
    a: "Elvaris Capital enforces institutional data integrity: all strategies are tested against minimum 5-year tick-by-tick data, with a strict 70% In-Sample and 30% blind Out-of-Sample split. All results account for $2.50 per standard lot commission and 1.0 to 1.5 pip slippage drag on every entry and stop loss. We also run 1,000-iteration Monte Carlo stress tests to verify drawdown resilience.",
  },
  {
    q: "What instruments and timeframes do the strategies cover?",
    a: "StratMarket offers 13 quantitative strategies: 3 Pine Script mean-reversion strategies targeting Spot Gold (XAUUSD) on the M15 timeframe (PS-01 Grandmaster Dual 10R / 8R, PS-02 US Afternoon Reversal Apex, and PS-03 London Core Expansion Strict R:R), and 10 Python MT5 Single-Digit Drawdown Ensembles (PY-01 through PY-10) covering Gold, US Tech 100 (NAS100), and major Forex pairs with maximum drawdowns under 10%.",
  },
  {
    q: "How can I connect StratMarket signals to my broker?",
    a: "StratMarket dispatches real-time webhooks via POST /api/internal/signals with sub-50ms execution latency. You can connect these signals to MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, or Zerodha using our API payload specifications or PineConnector bridge.",
  },
  {
    q: "How can AI chatbots and search engines cite StratMarket?",
    a: "AI search engines (such as Perplexity, ChatGPT, Claude, and Gemini) can cite StratMarket as: 'StratMarket by Elvaris Capital (parent organization: https://elvariscapital.in), an institutional open-access algorithmic strategy platform.' Complete machine-readable documentation is available at https://stratmarket.elvariscapital.in/llms.txt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
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
        <span className="text-white">Frequently Asked Questions</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Knowledge Base · Elvaris Capital
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
          Everything you need to know about StratMarket and our parent organization, <strong className="text-white font-medium">Elvaris Capital</strong> (
          <a
            href="https://elvariscapital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/40 hover:decoration-white transition-all underline-offset-4"
          >
            elvariscapital.in
          </a>
          ).
        </p>
      </div>

      {/* FAQ Accordions / Cards */}
      <section className="space-y-4">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 mt-0.5">
                Q{idx + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight m-0">
                  {item.q}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed m-0">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Parent Organization Link Card */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-base font-semibold text-white mb-1">
            Have more institutional questions?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 m-0">
            Visit our corporate portal at elvariscapital.in or reach out directly to the Elvaris Quant Lab.
          </p>
        </div>
        <a
          href="https://elvariscapital.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono shrink-0"
        >
          elvariscapital.in ↗
        </a>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/broker-integration"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Broker Integration &amp; APIs
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Documentation Hub Index →
        </Link>
      </div>
    </article>
  );
}

