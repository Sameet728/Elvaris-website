"use client";

import { useState } from "react";
import { 
  ExternalLink, ShieldCheck, Zap, 
  Activity, ArrowUpRight, ChevronRight 
} from "lucide-react";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
  time?: string;
}

interface StrategyConfig {
  id: string;
  name: string;
  badge: string;
  category: string;
  instrument: string;
  timeframe: string;
  entryPrice: number;
  tpPrice: number;
  slPrice: number;
  tpLabel: string;
  rrRatio: string;
  currentPrice: number;
  priceMin: number;
  priceMax: number;
  winRate: string;
  profitFactor: string;
  maxDrawdown: string;
  sharpe: string;
  signals: {
    type: string;
    direction: "BUY" | "SELL";
    price: number;
    time: string;
    date: string;
    isHit?: boolean;
  }[];
}

const STRATEGIES: Record<string, StrategyConfig> = {
  "PS-04": {
    id: "PS-04",
    name: "Elite",
    badge: "80.7% WR",
    category: "Volatility Exhaustion & Momentum",
    instrument: "XAUUSD",
    timeframe: "15m",
    entryPrice: 4096.74,
    tpPrice: 4113.74,
    slPrice: 4082.74,
    tpLabel: "TP: $4113.74 - ✔ HIT (+1.21R)",
    rrRatio: "+1.21R",
    currentPrice: 4071.67,
    priceMin: 4020,
    priceMax: 4160,
    winRate: "80.7%",
    profitFactor: "7.84",
    maxDrawdown: "1.8%",
    sharpe: "8.92",
    signals: [
      { type: "TP HIT", direction: "BUY", price: 4113.74, time: "18:45", date: "Nov 5", isHit: true },
      { type: "ENTRY LONG", direction: "BUY", price: 4096.74, time: "16:30", date: "Nov 5" },
      { type: "TP HIT", direction: "BUY", price: 4142.10, time: "09:15", date: "Nov 5", isHit: true },
      { type: "ENTRY LONG", direction: "BUY", price: 4126.50, time: "07:30", date: "Nov 5" }
    ]
  },
  "PS-01": {
    id: "PS-01",
    name: "Grandmaster",
    badge: "82.6% WR",
    category: "Macro Regime Liquidity Reversal",
    instrument: "XAUUSD",
    timeframe: "15m",
    entryPrice: 2641.80,
    tpPrice: 2657.40,
    slPrice: 2633.40,
    tpLabel: "TP: $2657.40 - ✔ HIT (+1.85R)",
    rrRatio: "+1.85R",
    currentPrice: 2654.80,
    priceMin: 2620,
    priceMax: 2680,
    winRate: "82.6%",
    profitFactor: "6.11",
    maxDrawdown: "2.3%",
    sharpe: "7.02",
    signals: [
      { type: "TP HIT", direction: "BUY", price: 2657.40, time: "14:15", date: "Nov 5", isHit: true },
      { type: "ENTRY LONG", direction: "BUY", price: 2641.80, time: "10:15", date: "Nov 5" }
    ]
  },
  "PS-02": {
    id: "PS-02",
    name: "Apex",
    badge: "88.5% WR",
    category: "Institutional Liquidity Sweep",
    instrument: "XAUUSD",
    timeframe: "15m",
    entryPrice: 2643.50,
    tpPrice: 2661.10,
    slPrice: 2635.20,
    tpLabel: "TP: $2661.10 - ✔ HIT (+2.14R)",
    rrRatio: "+2.14R",
    currentPrice: 2658.20,
    priceMin: 2620,
    priceMax: 2680,
    winRate: "88.5%",
    profitFactor: "9.31",
    maxDrawdown: "1.4%",
    sharpe: "10.71",
    signals: [
      { type: "TP HIT", direction: "BUY", price: 2661.10, time: "15:45", date: "Nov 5", isHit: true },
      { type: "ENTRY LONG", direction: "BUY", price: 2643.50, time: "11:15", date: "Nov 5" }
    ]
  }
};

// Generate realistic candles replicating the screenshot waveform
function generateCandleData(strategyId: string): Candle[] {
  if (strategyId === "PS-04") {
    // 90 institutional candles closely replicating the high-resolution TradingView waveform from PS-04
    const points = [
      // 0-11: Initial high peak around 4140 - 4152
      4136, 4140, 4145, 4149, 4152, 4148, 4145, 4148, 4142, 4136, 4130, 4122,
      // 12-23: Bounce and consolidation
      4126, 4130, 4125, 4128, 4133, 4138, 4136, 4131, 4125, 4120, 4115, 4110,
      // 24-34: Selloff into trade entry setup
      4114, 4118, 4114, 4109, 4104, 4108, 4103, 4098, 4094, 4098, 4093,
      // 35-46: Trade Entry at 4096.74 (Bar 35) -> TP hit at 4113.74 (Bar 40) -> roll over
      4096.74, 4099, 4104, 4108, 4112, 4113.74, 4117, 4114, 4110, 4105, 4098, 4092,
      // 47-58: Dropping through 4070 down to 4040
      4086, 4088, 4082, 4076, 4070, 4064, 4067, 4060, 4053, 4046, 4040, 4035,
      // 59-70: Bottom at 4031 and first strong bounce to 4068
      4031, 4034, 4038, 4044, 4050, 4056, 4062, 4068, 4064, 4058, 4052, 4046,
      // 71-82: Double bottom retest at 4038-4042 and upward reversal
      4040, 4043, 4047, 4052, 4057, 4062, 4065, 4061, 4056, 4059, 4063, 4067,
      // 83-89: Current leg to 4071.67
      4065, 4068, 4071, 4069, 4072, 4070, 4071.67
    ];

    return points.map((p, idx) => {
      const prev = idx > 0 ? points[idx - 1] : p - 1.2;
      const isUp = p >= prev;
      const open = +(prev).toFixed(2);
      const close = +(p).toFixed(2);
      const high = +(Math.max(open, close) + Math.random() * 2.2 + 0.8).toFixed(2);
      const low = +(Math.min(open, close) - Math.random() * 2.2 - 0.6).toFixed(2);
      return { open, close, high, low };
    });
  }

  // Fallback generation for other strategies
  const base = STRATEGIES[strategyId].currentPrice;
  const list: Candle[] = [];
  let cur = base - 15;
  for (let i = 0; i < 70; i++) {
    const open = cur;
    const delta = (Math.random() - 0.48) * 3.2;
    const close = +(open + delta).toFixed(2);
    cur = close;
    const high = +(Math.max(open, close) + Math.random() * 2.2).toFixed(2);
    const low = +(Math.min(open, close) - Math.random() * 2.2).toFixed(2);
    list.push({ open, close, high, low });
  }
  return list;
}

export function StratMarketProduct() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>("PS-04");
  const strat = STRATEGIES[selectedStrategy] || STRATEGIES["PS-04"];

  return (
    <section id="stratmarket" className="relative z-20 w-full bg-transparent text-white pt-[58px] pb-6 sm:pt-[64px] sm:pb-8 overflow-hidden border-b border-white/[0.08]">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#a3e635]/40 to-transparent" />
      <div className="absolute top-8 right-1/4 w-[700px] h-[400px] bg-gradient-to-br from-[#a3e635]/[0.06] via-[#089981]/[0.04] to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* 2-COLUMN SPLIT: LEFT WRITTEN WORK, RIGHT CHART TERMINAL (FITS IN A SINGLE FRAME) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* LEFT SIDE: The Written Work */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a3e635]/35 bg-[#a3e635]/[0.08] px-3.5 py-1.5 shadow-[0_0_20px_rgba(163,230,53,0.15)] w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#a3e635]">
                StratMarket Launch // Product Showcase
              </span>
              <span className="text-white/20">|</span>
              <span className="text-white/70 font-mono text-[11px]">By Elvaris Capital</span>
            </div>

            {/* Headline - Bold Institutional Presence */}
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] xl:text-[42px] leading-[1.12] font-light tracking-tight text-white">
              <span>Institutional algorithmic trading.</span>{" "}
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#a3e635]">
                Live terminal execution & verified trades.
              </span>
            </h2>

            {/* Strategy Model Selector - Sleek Segmented Switcher */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                <span className="text-zinc-400 font-semibold">Audited Strategy Model</span>
                <span className="text-[#a3e635] font-semibold flex items-center gap-1.5">
                  <span className="inline-block size-1.5 rounded-full bg-[#a3e635] animate-pulse" />
                  Live In Production
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                {Object.values(STRATEGIES).map((s) => {
                  const active = selectedStrategy === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStrategy(s.id)}
                      className={`py-2.5 px-2.5 rounded-lg text-xs font-mono transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                        active
                          ? "bg-[#181b22] text-white border border-white/15 shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.03] border border-transparent"
                      }`}
                    >
                      <span className={`font-bold text-xs sm:text-[13px] tracking-wide ${active ? "text-[#a3e635]" : "text-zinc-300"}`}>{s.id}</span>
                      <span className="text-[10.5px] text-zinc-400 truncate max-w-full">{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Audited HUD Strategy Metrics (4-Column Telemetry Bar) */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-3 font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Win Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-bold text-[#a3e635]">{strat.winRate}</span>
                </div>
                <span className="text-[9px] text-zinc-500 block mt-0.5">Audited</span>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-3 font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Profit Factor</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-bold text-white">{strat.profitFactor}</span>
                </div>
                <span className="text-[9px] text-zinc-500 block mt-0.5">Gross W/L</span>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-3 font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Max DD</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-bold text-emerald-400">{strat.maxDrawdown}</span>
                </div>
                <span className="text-[9px] text-zinc-500 block mt-0.5">Holdout</span>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-3 font-mono">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Sharpe</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-bold text-white">{strat.sharpe}</span>
                </div>
                <span className="text-[9px] text-zinc-500 block mt-0.5">Annual</span>
              </div>
            </div>

            {/* Quick CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`https://strat-market-chi.vercel.app/chart/${strat.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-[#a3e635] px-6 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#bef264] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)] active:scale-95 cursor-pointer"
              >
                <span>Open Live Terminal</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://strat-market-chi.vercel.app/market"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <span>Browse Catalog</span>
                <ChevronRight className="size-3.5 text-white/40" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: The Live Chart Terminal */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Subtle ambient glow behind terminal */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#a3e635]/15 via-emerald-500/10 to-[#a3e635]/15 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0d14] overflow-hidden shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(163,230,53,0.06),inset_0_1px_0_rgba(255,255,255,0.12)]">
            
                {/* Mac Window Header / Status Bar */}
                <div className="h-[38px] bg-[#09090b] border-b border-[#1f1f23] px-3.5 flex items-center justify-between text-xs select-none">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-[#ff5f56]/70 border border-[#ff5f56]/90" />
                      <span className="size-2.5 rounded-full bg-[#ffbd2e]/70 border border-[#ffbd2e]/90" />
                      <span className="size-2.5 rounded-full bg-[#27c93f]/70 border border-[#27c93f]/90" />
                    </div>
                    <div className="w-[1px] h-3.5 bg-zinc-800" />
                    <span className="font-mono text-[11px] text-zinc-300 font-semibold tracking-wide flex items-center gap-1.5">
                      <span className="text-[#a3e635]">✦</span> StratMarket Terminal · {strat.instrument} ({selectedStrategy})
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <span className="inline-block size-1.5 rounded-full bg-[#a3e635] animate-ping" />
                      <span className="text-[#a3e635] font-semibold">Live WebGL Engine</span>
                    </span>
                    <a
                      href={`https://strat-market-chi.vercel.app/chart/${selectedStrategy}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      title="Open full screen in new tab"
                    >
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>

                {/* The Live Original Interactive Chart from StratMarket */}
                <div className="relative w-full h-[480px] sm:h-[510px] lg:h-[530px] bg-[#131722]">
                  <iframe
                    key={selectedStrategy}
                    src={`https://strat-market-chi.vercel.app/chart/${selectedStrategy}`}
                    className="w-full h-full border-0 block bg-[#131722]"
                    title={`StratMarket ${selectedStrategy} Live Interactive Chart`}
                    allow="clipboard-write; fullscreen"
                    loading="eager"
                  />
                </div>
              </div>{/* Close relative rounded-2xl */}
            </div>{/* Close relative group */}
          </div>{/* Close lg:col-span-7 */}
        </div>{/* Close grid-cols-12 */}

        {/* StratMarket Promotional Highlights - Spacious Lower Section */}
        <div className="grid gap-6 md:grid-cols-3 mt-14 pt-10 border-t border-white/[0.06]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm">
            <div className="size-9 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-4">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">Zero Curve-Fitting Guarantee</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every candidate strategy is evaluated across 30% out-of-sample holdout datasets and 1,000+ Monte Carlo simulations before listing on StratMarket.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm">
            <div className="size-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <Zap className="size-5" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">Sub-50ms VPS Signal Dispatch</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Ultra-low latency execution webhooks dispatch directly to TradingView, Python MetaTrader 5, and institutional FIX endpoints.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm">
            <div className="size-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
              <Activity className="size-5" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">100% Free Open Access</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              StratMarket provides open access to interactive candlestick charts, backtest reports, and trade execution overlays without paywalls.
            </p>
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-10 rounded-2xl border border-[#a3e635]/25 bg-gradient-to-r from-[#a3e635]/[0.07] via-white/[0.01] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#a3e635] font-semibold mb-1">
              Live Product Deployment
            </div>
            <h4 className="text-xl sm:text-2xl font-light text-white">
              Explore the complete StratMarket quantitative strategy catalog.
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Browse tick-level performance metrics, interactive candlestick charts, and signal overlays on the official platform.
            </p>
          </div>

          <a
            href="https://strat-market-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#a3e635] transition-all duration-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.5)]"
          >
            <span>Visit strat-market-chi.vercel.app</span>
            <ExternalLink className="size-4 transition-transform group-hover:scale-110" />
          </a>
        </div>

        {/* Scroll cue down to Quantitative Research System */}
        <div className="mt-12 text-center">
          <a
            href="#research-pipeline"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2 px-4 rounded-full border border-white/5 hover:border-white/20 bg-white/[0.02]"
          >
            <span>Explore Elvaris Quantitative Research System & Pipeline</span>
            <span className="text-[#a3e635]">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
