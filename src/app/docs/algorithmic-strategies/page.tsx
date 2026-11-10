import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algorithmic Strategy Catalog (PS & PY) — Elvaris Capital",
  description:
    "Complete technical breakdown of all 13 quantitative trading strategies on StratMarket by Elvaris Capital (elvariscapital.in). Pine Script champion gold models and Python MT5 ensembles.",
};

const pineStrategies = [
  {
    id: "PS-01",
    slug: "grandmaster",
    name: "Grandmaster Dual 10R / 8R",
    instrument: "XAUUSD (Gold)",
    timeframe: "M15",
    category: "Mean reversion",
    ret: "+28.67R (+28.7%)",
    dd: "2.0% (2.00R)",
    pf: "4.19",
    win: "80.43%",
    sharpe: "6.85",
    calmar: "14.3",
    summary:
      "Proprietary volatility exhaustion envelope with dual 10R / 8R asymmetric target payoffs, dynamic macro regime gating, and strict ATR bracket stops.",
  },
  {
    id: "PS-02",
    slug: "us-afternoon-reversal",
    name: "US Afternoon Reversal (Apex)",
    instrument: "XAUUSD (Gold)",
    timeframe: "M15",
    category: "Mean reversion",
    ret: "+24.49R (+24.5%)",
    dd: "1.0% (1.00R)",
    pf: "9.16",
    win: "87.50%",
    sharpe: "10.71",
    calmar: "24.5",
    summary:
      "High-conviction mean-reversion with strict volatility clearance and institutional liquidity tail requirements. Highest win rate (87.5%) and lowest drawdown (1.0%) in catalog.",
  },
  {
    id: "PS-03",
    slug: "london-core-expansion",
    name: "London Core Expansion (Strict R:R)",
    instrument: "XAUUSD (Gold)",
    timeframe: "M15",
    category: "Mean reversion / Expansion",
    ret: "+27.75R (+27.8%)",
    dd: "1.0% (1.00R)",
    pf: "5.62",
    win: "82.86%",
    sharpe: "6.72",
    calmar: "27.8",
    summary:
      "Asymmetric reward-to-risk bracket strategy providing substantial mathematical edge over breakeven with a verified 82.86% win rate and 5.62 profit factor.",
  },
];

const pythonEnsembles = [
  { id: "PY-01", name: "Dual-Engine Alpha", ret: "+498.4%", profit: "+$124,592", dd: "9.12%", pf: "2.14", sharpe: "1.72", desc: "Dual-engine ensemble combining London session breakout with NY mean reversion." },
  { id: "PY-02", name: "Tri-Core Momentum", ret: "+492.1%", profit: "+$123,018", dd: "9.45%", pf: "2.08", sharpe: "1.68", desc: "Triple-engine momentum model with volatility-targeted sizing across Gold and US Tech 100." },
  { id: "PY-03", name: "Quad-Asset Trend", ret: "+489.7%", profit: "+$122,421", dd: "9.35%", pf: "1.99", sharpe: "1.66", desc: "Rank #3 ensemble with high diversification, trend-regime shield, and 10.48 Calmar ratio." },
  { id: "PY-04", name: "Inverse-DD Fleet", ret: "+486.8%", profit: "+$121,693", dd: "9.77%", pf: "2.02", sharpe: "1.69", desc: "Heavy low-drawdown engine concentration designed for rapid recovery from equity dips." },
  { id: "PY-05", name: "Ultra-Shield", ret: "+470.7%", profit: "+$117,681", dd: "9.53%", pf: "2.28", sharpe: "1.70", desc: "Rank #5 highest profit factor (2.28) and shortest loss streak with asymmetric stops." },
  { id: "PY-06", name: "Trend Shield", ret: "+465.3%", profit: "+$116,331", dd: "9.74%", pf: "2.16", sharpe: "1.74", desc: "Balanced multi-session trend capture combining London/NY windows with Friday risk embargo." },
  { id: "PY-07", name: "Multi-Regime", ret: "+463.9%", profit: "+$115,984", dd: "9.80%", pf: "2.04", sharpe: "1.65", desc: "High microstructure regime robustness across hiking cycles, banking turbulence, and trend runs." },
  { id: "PY-08", name: "High-Sharpe Fleet", ret: "+462.2%", profit: "+$115,560", dd: "9.50%", pf: "2.29", sharpe: "1.89", desc: "Top annualized Sharpe ratio (1.89) and exceptionally low equity variance across 5 years." },
  { id: "PY-09", name: "Asian Squeeze", ret: "+460.5%", profit: "+$115,122", dd: "9.96%", pf: "2.21", sharpe: "1.68", desc: "Asian session order flow compression exploitation with dynamic chandelier trailing defense." },
  { id: "PY-10", name: "Low-Loss Fleet", ret: "+460.0%", profit: "+$115,009", dd: "9.43%", pf: "2.11", sharpe: "1.67", desc: "Long-term trend-following engine with low trade frequency and loss clustering mitigation." },
];

export default function AlgorithmicStrategiesPage() {
  return (
    <article className="space-y-12">
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
        <span className="text-white">Strategy Catalog</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 block font-semibold">
          Verified Quantitative Models · Elvaris Capital
        </span>
        <h1 className="text-[clamp(32px,4.5vw,46px)] font-bold tracking-tight text-white leading-[1.12]">
          Quantitative Strategy Catalog (PS &amp; PY)
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
          ) features 13 verified quantitative models: 3 champion Pine Script mean-reversion engines optimized for spot Gold (XAUUSD), and 10 institutional Python MT5 multi-engine fleets with guaranteed single-digit maximum drawdown (&lt; 10%).
        </p>
      </div>

      {/* Part 1: Pine Script Strategies */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
              Pine Script Gold Champion Trio (PS-01 – PS-03)
            </h2>
            <p className="text-xs text-white/50 font-mono m-0 mt-1">
              Deterministic 6,800-bar tick verified backtests · Non-correlated entries
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80 shrink-0 self-start sm:self-auto">
            XAUUSD · M15 Timeframe
          </span>
        </div>

        <div className="space-y-6">
          {pineStrategies.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {s.id}
                    </span>
                    <span className="text-xs font-mono text-white/40 uppercase">
                      {s.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight m-0">
                    {s.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://stratmarket.elvariscapital.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
                  >
                    StratMarket App ↗
                  </a>
                  <Link
                    href={`/documentation/algorithmic-strategies`}
                    className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
                  >
                    Full Specs →
                  </Link>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {s.summary}
              </p>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 rounded-xl bg-black/40 border border-white/5 p-4 font-mono">
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Return</span>
                  <strong className="text-sm text-emerald-400">{s.ret}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Max DD</span>
                  <strong className="text-sm text-white">{s.dd}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Profit Factor</span>
                  <strong className="text-sm text-white">{s.pf}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Win Rate</span>
                  <strong className="text-sm text-emerald-400">{s.win}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Sharpe</span>
                  <strong className="text-sm text-white">{s.sharpe}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase block mb-1">Calmar</span>
                  <strong className="text-sm text-white">{s.calmar}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Python MT5 Ensembles */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight m-0">
              Python MT5 Single-Digit Drawdown Ensembles (PY-01 – PY-10)
            </h2>
            <p className="text-xs text-white/50 font-mono m-0 mt-1">
              5-Year continuous tick audit · Sub-10% hard max drawdown guarantee
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 self-start sm:self-auto">
            Hard DD &lt; 10%
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-white/40 uppercase text-[11px] bg-white/[0.02]">
                <th className="py-3 px-4">ID &amp; Name</th>
                <th className="py-3 px-4">Net Profit</th>
                <th className="py-3 px-4">Max DD</th>
                <th className="py-3 px-4">PF</th>
                <th className="py-3 px-4">Sharpe</th>
                <th className="py-3 px-4 min-w-[240px]">Engine Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {pythonEnsembles.map((py) => (
                <tr key={py.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3 px-4 font-semibold text-white">
                    <span className="text-white/40 mr-1.5">{py.id}</span>
                    {py.name}
                  </td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{py.profit}</td>
                  <td className="py-3 px-4 text-white/90">{py.dd}</td>
                  <td className="py-3 px-4 text-white/90">{py.pf}</td>
                  <td className="py-3 px-4 text-white/90">{py.sharpe}</td>
                  <td className="py-3 px-4 text-white/60 font-sans text-xs">{py.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/docs/quantitative-methodology"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-mono"
        >
          ← Research Methodology
        </Link>
        <Link
          href="/docs/signals-and-execution"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium text-black bg-white hover:bg-white/90 transition-all font-mono"
        >
          Next: Signals &amp; VPS Execution →
        </Link>
      </div>
    </article>
  );
}

