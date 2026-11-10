"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  ExternalLink, Play, Pause, TrendingUp, ShieldCheck, Zap, 
  Activity, ArrowUpRight, BarChart3, ChevronRight, Check,
  Crosshair, Slash, Compass, PenTool, Type, Shapes, Ruler,
  Search, Magnet, Trash2, Sliders, Bell, LayoutGrid, CheckCircle2,
  Maximize2, Camera, Undo2, Redo2, CandlestickChart
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
  const [showBoxes, setShowBoxes] = useState<boolean>(true);
  const [alertsOn, setAlertsOn] = useState<boolean>(true);
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const [candles, setCandles] = useState<Candle[]>([]);
  const [currentTickPrice, setCurrentTickPrice] = useState<number>(4071.67);
  const [isLiveStreaming, setIsLiveStreaming] = useState<boolean>(true);

  const strat = STRATEGIES[selectedStrategy] || STRATEGIES["PS-04"];

  // Initialize candles on strategy change
  useEffect(() => {
    const data = generateCandleData(selectedStrategy);
    setCandles(data);
    setCurrentTickPrice(strat.currentPrice);
  }, [selectedStrategy, strat.currentPrice]);

  // Live price ticking stream
  useEffect(() => {
    if (!isLiveStreaming) return;

    const interval = setInterval(() => {
      setCandles((prev) => {
        if (!prev.length) return prev;
        const last = prev[prev.length - 1];
        const tick = (Math.random() - 0.48) * 1.8;
        const nextClose = +(last.close + tick).toFixed(2);
        const nextHigh = +(Math.max(last.high, nextClose)).toFixed(2);
        const nextLow = +(Math.min(last.low, nextClose)).toFixed(2);

        setCurrentTickPrice(nextClose);

        const updated = [...prev];
        updated[updated.length - 1] = {
          ...last,
          close: nextClose,
          high: nextHigh,
          low: nextLow
        };
        return updated;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  // SVG Chart Dimensions & Scale
  const chart = useMemo(() => {
    if (!candles.length) return null;

    const width = 1000;
    const height = 480;
    const paddingRight = 68; // Space for price scale
    const paddingBottom = 26; // Space for time scale
    const chartW = width - paddingRight;
    const chartH = height - paddingBottom;

    const minP = strat.priceMin;
    const maxP = strat.priceMax;
    const rangeP = maxP - minP;

    const scaleY = (p: number) => chartH - ((p - minP) / rangeP) * chartH;
    const candleW = chartW / candles.length;

    // Build elements
    const elements = candles.map((c, i) => {
      const isUp = c.close >= c.open;
      const x = i * candleW;
      const cx = x + candleW / 2;
      const yOpen = scaleY(c.open);
      const yClose = scaleY(c.close);
      const yHigh = scaleY(c.high);
      const yLow = scaleY(c.low);

      const top = Math.min(yOpen, yClose);
      const h = Math.max(2, Math.abs(yClose - yOpen));
      const w = Math.max(3.6, candleW * 0.62);

      return {
        cx,
        x: cx - w / 2,
        top,
        h,
        w,
        yHigh,
        yLow,
        isUp,
        // TradingView candle colors
        color: isUp ? "#089981" : "#f23645",
        fill: isUp ? "#089981" : "#f23645"
      };
    });

    // Position Box Coordinates for trade
    // Entry at bar 35 in PS-04 dataset, TP hit at bar 44
    const entryBarIdx = selectedStrategy === "PS-04" ? 35 : 24;
    const exitBarIdx = selectedStrategy === "PS-04" ? 44 : 36;

    const boxX1 = entryBarIdx * candleW + candleW / 2;
    const boxX2 = exitBarIdx * candleW + candleW / 2;
    const boxWidth = boxX2 - boxX1;

    const entryY = scaleY(strat.entryPrice);
    const tpY = scaleY(strat.tpPrice);
    const slY = scaleY(strat.slPrice);

    const greenBoxTop = tpY;
    const greenBoxH = entryY - tpY;

    const redBoxTop = entryY;
    const redBoxH = slY - entryY;

    const currentPriceY = scaleY(currentTickPrice);

    return {
      width,
      height,
      chartW,
      chartH,
      elements,
      scaleY,
      candleW,
      boxX1,
      boxX2,
      boxWidth,
      entryY,
      tpY,
      slY,
      greenBoxTop,
      greenBoxH,
      redBoxTop,
      redBoxH,
      currentPriceY,
      minP,
      maxP
    };
  }, [candles, strat, selectedStrategy, currentTickPrice]);

  return (
    <section id="stratmarket" className="relative z-20 w-full bg-transparent text-white pt-[58px] pb-6 sm:pt-[64px] sm:pb-8 overflow-hidden border-b border-white/[0.08]">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#CBB894]/40 to-transparent" />
      <div className="absolute top-8 right-1/4 w-[700px] h-[400px] bg-gradient-to-br from-[#CBB894]/[0.06] via-[#089981]/[0.04] to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* 2-COLUMN SPLIT: LEFT WRITTEN WORK, RIGHT CHART TERMINAL (FITS IN A SINGLE FRAME) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* LEFT SIDE: The Written Work - Highlighted with Ambient Spotlight & High-Contrast Typography */}
          <div className="relative lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5">
            
            {/* Ambient Glow Spotlight behind Written Work */}
            <div className="absolute -top-16 -left-12 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(203,184,148,0.12)_0%,rgba(255,255,255,0.03)_40%,transparent_70%)] blur-3xl pointer-events-none -z-10" />
            
            {/* Launch Badge matching Elvaris Gold */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CBB894]/35 bg-[#CBB894]/[0.08] px-3.5 py-1.5 shadow-[0_0_20px_rgba(203,184,148,0.15)] w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CBB894] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CBB894] shadow-[0_0_8px_#CBB894]"></span>
              </span>
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#CBB894]">
                StratMarket Launch // Product Showcase
              </span>
              <span className="text-white/30">|</span>
              <span className="text-white/80 font-mono text-[11px] font-medium">By Elvaris Capital</span>
            </div>

            {/* Headline - Highlighted Typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] leading-[1.12] font-normal tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
              <span className="text-white font-medium">Institutional algorithmic trading.</span>{" "}
              <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#CBB894] drop-shadow-[0_0_30px_rgba(203,184,148,0.25)]">
                Live terminal execution & verified trades.
              </span>
            </h2>

            {/* Strategy Model Selector - Sleek Segmented Switcher */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                <span className="text-zinc-300 font-semibold tracking-wide">Audited Strategy Model</span>
                <span className="text-[#CBB894] font-semibold flex items-center gap-1.5 drop-shadow-[0_0_8px_rgba(203,184,148,0.4)]">
                  <span className="inline-block size-1.5 rounded-full bg-[#CBB894] shadow-[0_0_6px_#CBB894] animate-pulse" />
                  Live In Production
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-xl bg-[#090b10]/90 border border-white/[0.12] shadow-[0_4px_24px_rgba(0,0,0,0.65)] backdrop-blur-md">
                {Object.values(STRATEGIES).map((s) => {
                  const active = selectedStrategy === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStrategy(s.id)}
                      className={`py-2.5 px-2.5 rounded-lg text-xs font-mono transition-all text-center flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                        active
                          ? "bg-[#161a24] text-white border border-[#CBB894]/50 shadow-[0_0_20px_rgba(203,184,148,0.18),inset_0_1px_0_rgba(255,255,255,0.15)]"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      <span className={`font-bold text-xs sm:text-[13px] tracking-wide ${active ? "text-[#CBB894] drop-shadow-[0_0_8px_rgba(203,184,148,0.4)]" : "text-zinc-300"}`}>{s.id}</span>
                      <span className="text-[10.5px] text-zinc-400 truncate max-w-full font-medium">{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Audited HUD Strategy Metrics - Highlighted Telemetry Cards */}
            <div className="grid grid-cols-4 gap-2.5 pt-1">
              <div className="relative rounded-xl border border-white/[0.14] hover:border-[#CBB894]/40 bg-gradient-to-b from-[#11131a]/95 to-[#08090d]/95 p-3 font-mono shadow-[0_4px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md transition-all duration-300 overflow-hidden group/metric">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBB894]/50 to-transparent" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Win Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]">{strat.winRate}</span>
                </div>
                <span className="text-[9.5px] text-[#CBB894] font-medium block mt-0.5">Audited</span>
              </div>

              <div className="relative rounded-xl border border-white/[0.14] hover:border-white/30 bg-gradient-to-b from-[#11131a]/95 to-[#08090d]/95 p-3 font-mono shadow-[0_4px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md transition-all duration-300 overflow-hidden group/metric">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Profit Factor</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">{strat.profitFactor}</span>
                </div>
                <span className="text-[9.5px] text-zinc-400 block mt-0.5">Gross W/L</span>
              </div>

              <div className="relative rounded-xl border border-white/[0.14] hover:border-emerald-400/40 bg-gradient-to-b from-[#11131a]/95 to-[#08090d]/95 p-3 font-mono shadow-[0_4px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md transition-all duration-300 overflow-hidden group/metric">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Max DD</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-emerald-400 drop-shadow-[0_0_14px_rgba(52,211,153,0.45)]">{strat.maxDrawdown}</span>
                </div>
                <span className="text-[9.5px] text-emerald-400/85 font-medium block mt-0.5">Holdout</span>
              </div>

              <div className="relative rounded-xl border border-white/[0.14] hover:border-white/30 bg-gradient-to-b from-[#11131a]/95 to-[#08090d]/95 p-3 font-mono shadow-[0_4px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-md transition-all duration-300 overflow-hidden group/metric">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1">Sharpe</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">{strat.sharpe}</span>
                </div>
                <span className="text-[9.5px] text-zinc-400 block mt-0.5">Annual</span>
              </div>
            </div>

            {/* Quick CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://stratmarket.elvariscapital.in/chart/PS-01"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#CBB894] shadow-[0_0_30px_rgba(255,255,255,0.2),0_6px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(203,184,148,0.4)] active:scale-95 cursor-pointer"
              >
                <span>Open Live Terminal</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://stratmarket.elvariscapital.in/market"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.04] px-6 py-3 text-xs sm:text-sm font-mono font-medium uppercase tracking-wider text-zinc-200 hover:text-white hover:border-[#CBB894]/60 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <span>Browse Catalog</span>
                <ChevronRight className="size-3.5 text-white/50" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: The Live Chart Terminal - Highlighted with Luminous Ambient Halo & Precision Frame */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Radiant Ambient Aura Highlighting the Entire Terminal */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#CBB894]/20 via-white/[0.04] to-[#CBB894]/15 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              <div className="relative rounded-2xl border border-white/[0.18] hover:border-[#CBB894]/45 transition-colors duration-500 bg-[#020204] overflow-hidden shadow-[0_0_60px_rgba(203,184,148,0.08),0_25px_80px_rgba(0,0,0,0.98),inset_0_1px_0_rgba(255,255,255,0.12)]">
                {/* Top Illuminated Accent Hairline */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#CBB894] to-transparent z-30 opacity-80 shadow-[0_0_10px_#CBB894]" />
            
                {/* Pro Terminal Top Header Bar */}
                <div className="h-[44px] bg-black border-b border-white/[0.08] px-3 sm:px-4 flex items-center justify-between text-xs select-none">
                  
                  {/* Left items: Window Dots + Logo + Symbol */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {/* Mac Window Dots - Highlighted */}
                    <div className="hidden sm:flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.8)]" />
                      <span className="size-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.8)]" />
                      <span className="size-2.5 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.8)]" />
                    </div>

                    <div className="hidden sm:block w-[1px] h-3.5 bg-zinc-800" />

                    {/* StratMarket Brand */}
                    <a
                      href="https://stratmarket.elvariscapital.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#CBB894] transition-colors"
                      title="StratMarket by Elvaris Capital"
                    >
                      <svg width="17" height="17" viewBox="0 0 100 118" fill="#CBB894" className="shrink-0 drop-shadow-[0_0_8px_rgba(203,184,148,0.4)]" aria-label="StratMarket Logo">
                        <path d="M 99.32 12.66 L 74.40 0.68 L 68.26 0.00 L 2.05 38.65 L 0.00 43.10 L 0.00 60.54 L 1.37 63.62 L 3.41 65.67 L 30.03 79.01 L 47.78 68.75 L 23.55 57.80 L 22.18 56.09 Z" />
                        <path d="M 99.32 59.17 L 96.59 55.41 L 66.55 41.04 L 43.34 54.38 L 70.99 68.06 L 3.07 104.66 L 28.33 116.97 L 35.15 116.97 L 97.27 82.43 L 99.66 77.64 Z" />
                      </svg>
                      <span className="text-white font-bold tracking-tight text-xs font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">StratMarket</span>
                    </a>

                    <div className="w-[1px] h-3.5 bg-zinc-800" />

                    {/* Symbol & Timeframe */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 font-mono text-[11px] text-white">
                      <span className="font-bold text-white">{strat.instrument}</span>
                      <span className="text-zinc-500">·</span>
                      <span className="text-white font-semibold">{strat.timeframe}</span>
                    </div>

                    {/* Active Model Pill */}
                    <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                      <span className="text-zinc-600">//</span>
                      <span className="text-white font-bold">{strat.id}</span>
                      <span className="text-[#CBB894] font-semibold">({strat.badge})</span>
                    </div>
                  </div>

                  {/* Right toolbar items */}
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    {/* Position Boxes Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowBoxes(!showBoxes)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono transition-all cursor-pointer ${
                        showBoxes 
                          ? "bg-white/[0.08] border border-white/20 text-white shadow-[0_0_12px_rgba(255,255,255,0.1)]" 
                          : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                      }`}
                      title="Toggle Visual Long/Short Position Tool Boxes on Chart"
                    >
                      <span className={`size-1.5 rounded-full ${showBoxes ? "bg-[#CBB894] shadow-[0_0_6px_#CBB894]" : "bg-zinc-600"}`} />
                      <span>Position Boxes</span>
                    </button>

                    {/* Live Feed Status Indicator */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.04] border border-white/10 text-[10.5px]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 ${isLiveStreaming ? "opacity-75" : "opacity-0"}`}></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                      </span>
                      <span className="text-zinc-300 font-semibold">LMAX FIX 4.4</span>
                    </div>

                    {/* Strategy Details Drawer Toggle */}
                    <button
                      type="button"
                      onClick={() => setPanelOpen(!panelOpen)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                        panelOpen ? "bg-[#CBB894] text-black font-bold" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      }`}
                      title="Toggle Strategy Details & Live VPS Signals"
                    >
                      <Sliders className="size-3" />
                      <span className="hidden sm:inline">Strategy</span>
                    </button>
                  </div>
                </div>

                {/* Sub-header Bar (TradingView style indicators + tools) */}
                <div className="h-[30px] bg-[#030303] border-b border-white/[0.08] px-3 sm:px-4 flex items-center justify-between text-zinc-400 text-[11px] font-mono select-none">
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://stratmarket.elvariscapital.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-300 hover:text-white cursor-pointer"
                      title="Open Candlestick Chart on StratMarket"
                    >
                      <CandlestickChart className="size-3.5 text-zinc-400" />
                      <span>Candles</span>
                    </a>
                    <div className="w-[1px] h-3 bg-zinc-800" />
                    <a
                      href="https://stratmarket.elvariscapital.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white cursor-pointer text-zinc-400 hidden sm:inline"
                      title="Explore Quantitative Indicators on StratMarket"
                    >
                      fx Indicators
                    </a>
                    <div className="w-[1px] h-3 bg-zinc-800 hidden sm:block" />
                    <div className="hidden sm:flex items-center gap-2 text-zinc-500">
                      <Undo2 className="size-3 hover:text-zinc-300 cursor-pointer" />
                      <Redo2 className="size-3 hover:text-zinc-300 cursor-pointer" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-zinc-500 text-[10px]">
                    <span className="hidden md:inline">Continuous Tick Stream</span>
                    <a
                      href="https://stratmarket.elvariscapital.in/chart/PS-01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      title="Open full PS-01 chart terminal"
                    >
                      <Maximize2 className="size-3" />
                    </a>
                  </div>
                </div>

          {/* Main Chart Area with Left Tools + SVG Canvas + Optional Side Panel */}
          <div className="relative flex w-full h-[430px] sm:h-[470px] lg:h-[490px] bg-black">
            
            {/* Left TradingView Toolbar */}
            <div className="hidden sm:flex w-[40px] border-r border-white/[0.08] bg-[#030303] flex-col items-center py-1.5 gap-2 text-zinc-500 shrink-0 select-none">
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Crosshair (Open PS-01 Chart)"><Crosshair className="size-3.5 text-zinc-300" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Trend Line (Open PS-01 Chart)"><Slash className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Gann & Fibonacci (Open PS-01 Chart)"><Compass className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Geometric Shapes (Open PS-01 Chart)"><PenTool className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Text Annotation (Open PS-01 Chart)"><Type className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Patterns (Open PS-01 Chart)"><Shapes className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Measure Distance (Open PS-01 Chart)"><Ruler className="size-3.5 text-zinc-400" /></a>
              <div className="w-4 h-[1px] bg-zinc-800 my-0.5" />
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Zoom In (Open PS-01 Chart)"><Search className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors cursor-pointer" title="Magnet Mode (Open PS-01 Chart)"><Magnet className="size-3.5" /></a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors mt-auto cursor-pointer" title="Clear All (Open PS-01 Chart)"><Trash2 className="size-3.5 hover:text-red-400" /></a>
            </div>

            {/* Central Chart Viewport - Click directly opens the live PS-01 chart page */}
            <a
              href="https://stratmarket.elvariscapital.in/chart/PS-01"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1 h-full overflow-hidden bg-black block cursor-pointer group/chart select-none focus:outline-none"
              title="Click to open direct live interactive chart for PS-01 on StratMarket"
            >
              
              {chart && (
                <svg
                  viewBox={`0 0 ${chart.width} ${chart.height}`}
                  preserveAspectRatio="none"
                  className="w-full h-full block select-none pointer-events-none"
                >
                  <defs>
                    {/* Position Box Gradients - Highlighted */}
                    <linearGradient id="tpBoxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.12" />
                    </linearGradient>
                    <linearGradient id="slBoxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.22" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  {Array.from({ length: 15 }).map((_, idx) => {
                    const price = chart.minP + idx * 10;
                    const y = chart.scaleY(price);
                    return (
                      <g key={price}>
                        <line
                          x1="0"
                          x2={chart.chartW}
                          y1={y}
                          y2={y}
                          stroke="#111115"
                          strokeWidth="1"
                          strokeDasharray="2 3"
                        />
                        {/* Price label on right axis */}
                        <text
                          x={chart.chartW + 12}
                          y={y + 3.5}
                          fill="#787b86"
                          fontSize="10"
                          fontFamily="ui-monospace, Menlo, monospace"
                          textAnchor="start"
                        >
                          {price.toFixed(2)}
                        </text>
                      </g>
                    );
                  })}

                  {/* Vertical Time Grid lines */}
                  {[0.15, 0.35, 0.55, 0.75, 0.95].map((pos, idx) => {
                    const x = chart.chartW * pos;
                    return (
                      <line
                        key={idx}
                        x1={x}
                        x2={x}
                        y1="0"
                        y2={chart.chartH}
                        stroke="#111115"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                      />
                    );
                  })}

                  {/* Right Axis Separator Line */}
                  <line
                    x1={chart.chartW}
                    x2={chart.chartW}
                    y1="0"
                    y2={chart.chartH}
                    stroke="#18181b"
                    strokeWidth="1"
                  />

                  {/* Bottom Time Axis Separator Line */}
                  <line
                    x1="0"
                    x2={chart.width}
                    y1={chart.chartH}
                    y2={chart.chartH}
                    stroke="#18181b"
                    strokeWidth="1"
                  />

                  {/* Candlestick Series */}
                  {chart.elements.map((el, idx) => (
                    <g key={idx}>
                      {/* High/Low Wick */}
                      <line
                        x1={el.cx}
                        x2={el.cx}
                        y1={el.yHigh}
                        y2={el.yLow}
                        stroke={el.color}
                        strokeWidth="1.2"
                      />
                      {/* Candle Body */}
                      <rect
                        x={el.x}
                        y={el.top}
                        width={el.w}
                        height={el.h}
                        fill={el.fill}
                        stroke={el.color}
                        strokeWidth="1"
                      />
                    </g>
                  ))}

                  {/* ========================================================= */}
                  {/* POSITION BOXES OVERLAY (MATCHING SCREENSHOT PRECISELY)    */}
                  {/* ========================================================= */}
                  {showBoxes && (
                    <g className="cursor-pointer">
                      
                      {/* 1. GREEN TAKE PROFIT BOX */}
                      <rect
                        x={chart.boxX1}
                        y={chart.greenBoxTop}
                        width={chart.boxWidth}
                        height={chart.greenBoxH}
                        fill="url(#tpBoxGrad)"
                        stroke="#84cc16"
                        strokeWidth="1.2"
                      />

                      {/* 2. RED STOP LOSS BOX */}
                      <rect
                        x={chart.boxX1}
                        y={chart.redBoxTop}
                        width={chart.boxWidth}
                        height={chart.redBoxH}
                        fill="url(#slBoxGrad)"
                        stroke="#ef4444"
                        strokeWidth="1.2"
                      />

                      {/* 3. ENTRY PIN & CALLOUT */}
                      <path
                        d={`M${chart.boxX1},${chart.entryY} l-5,6 h10 z`}
                        fill="#ffffff"
                      />
                      <rect
                        x={chart.boxX1 + 6}
                        y={chart.entryY - 8}
                        width="114"
                        height="18"
                        rx="3"
                        fill="#0c0e14"
                        fillOpacity="0.9"
                        stroke="#ffffff"
                        strokeWidth="0.6"
                        strokeOpacity="0.3"
                      />
                      <text
                        x={chart.boxX1 + 12}
                        y={chart.entryY + 4}
                        fill="#ffffff"
                        fontSize="10"
                        fontFamily="ui-monospace, Menlo, monospace"
                        fontWeight="700"
                      >
                        ▲ LONG ${strat.entryPrice.toFixed(2)}
                      </text>

                      {/* 4. TAKE PROFIT TARGET LINE & "HIT" CONFIRMATION */}
                      <line
                        x1={chart.boxX1}
                        x2={chart.boxX2 + 80}
                        y1={chart.tpY}
                        y2={chart.tpY}
                        stroke="#089981"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                      />
                      <rect
                        x={chart.boxX1 + 6}
                        y={chart.tpY - 18}
                        width="154"
                        height="18"
                        rx="3"
                        fill="#051208"
                        fillOpacity="0.95"
                        stroke="#089981"
                        strokeWidth="1.2"
                      />
                      <text
                        x={chart.boxX1 + 12}
                        y={chart.tpY - 5}
                        fill="#089981"
                        fontSize="10"
                        fontFamily="ui-monospace, Menlo, monospace"
                        fontWeight="800"
                      >
                        {strat.tpLabel}
                      </text>

                      {/* 5. STOP LOSS LEVEL & CALLOUT */}
                      <line
                        x1={chart.boxX1}
                        x2={chart.boxX2 + 40}
                        y1={chart.slY}
                        y2={chart.slY}
                        stroke="#ef4444"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                      />
                      <rect
                        x={chart.boxX1 + 6}
                        y={chart.slY + 2}
                        width="100"
                        height="18"
                        rx="3"
                        fill="#0c0e14"
                        fillOpacity="0.9"
                        stroke="#ef4444"
                        strokeWidth="0.8"
                        strokeOpacity="0.6"
                      />
                      <text
                        x={chart.boxX1 + 12}
                        y={chart.slY + 14}
                        fill="#ef4444"
                        fontSize="10"
                        fontFamily="ui-monospace, Menlo, monospace"
                        fontWeight="700"
                      >
                        SL: ${strat.slPrice.toFixed(2)}
                      </text>
                    </g>
                  )}

                  {/* Current Price Horizontal Dotted Line - Highlighted */}
                  <line
                    x1="0"
                    x2={chart.chartW}
                    y1={chart.currentPriceY}
                    y2={chart.currentPriceY}
                    stroke="#089981"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                  />
                  {/* Pulsing live beacon at price endpoint */}
                  <circle
                    cx={chart.chartW - 6}
                    cy={chart.currentPriceY}
                    r="3.5"
                    fill="#34d399"
                  />

                  {/* Current Price Axis Pill (Teal background, Crisp White Text, Neon Glow) */}
                  <rect
                    x={chart.chartW + 2}
                    y={chart.currentPriceY - 10}
                    width="66"
                    height="20"
                    rx="3"
                    fill="#089981"
                    stroke="#34d399"
                    strokeWidth="0.8"
                  />
                  <text
                    x={chart.chartW + 35}
                    y={chart.currentPriceY + 4}
                    fill="#ffffff"
                    fontSize="11"
                    fontFamily="ui-monospace, Menlo, monospace"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    {currentTickPrice.toFixed(2)}
                  </text>

                  {/* Bottom Time Axis Labels */}
                  {selectedStrategy === "PS-04" ? (
                    <>
                      <text x="100" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">06:00</text>
                      <text x="230" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">12:00</text>
                      <text x="370" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                      <text x="500" y={chart.chartH + 19} fill="#a1a1aa" fontWeight="600" fontSize="10" fontFamily="ui-monospace, monospace">Nov 6</text>
                      <text x="630" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">06:00</text>
                      <text x="760" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">12:00</text>
                      <text x="860" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                    </>
                  ) : (
                    <>
                      <text x="140" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">10:00</text>
                      <text x="360" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">14:00</text>
                      <text x="580" y={chart.chartH + 19} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                      <text x="800" y={chart.chartH + 19} fill="#a1a1aa" fontWeight="600" fontSize="10" fontFamily="ui-monospace, monospace">Today</text>
                    </>
                  )}
                </svg>
              )}

              {/* Subtle hover overlay highlight */}
              <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover/chart:opacity-100 transition-opacity pointer-events-none" />

              {/* Floating Pill Cue on Chart Hover */}
              <div className="absolute top-3 right-3 z-20 pointer-events-none opacity-0 group-hover/chart:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/chart:translate-y-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/95 border border-[#CBB894]/40 text-[#CBB894] text-[11px] font-mono shadow-[0_4px_24px_rgba(0,0,0,0.95)] backdrop-blur-md">
                  <span>Open PS-01 Live Chart</span>
                  <ExternalLink className="size-3 text-[#CBB894]" />
                </div>
              </div>
            </a>

            {/* Strategy Side Panel (Collapsible Drawer matching chunk_chart.js) */}
            {panelOpen && (
              <aside className="w-[320px] bg-[#040404] border-l border-white/[0.08] p-4 flex flex-col gap-4 text-xs font-mono overflow-y-auto animate-fadeIn shrink-0">
                <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/15 px-2 py-0.5 rounded text-[11px] font-bold text-white">{strat.id}</span>
                    <h3 className="font-bold text-white text-sm">{strat.name}</h3>
                  </div>
                  <button onClick={() => setPanelOpen(false)} className="text-zinc-500 hover:text-white text-sm">✕</button>
                </div>

                {/* Platform info */}
                <div className="space-y-1.5 text-zinc-400">
                  <div className="flex justify-between">
                    <span>Platform</span>
                    <span className="text-white font-semibold">Pine Script v5 & MT5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asset & Timeframe</span>
                    <span className="text-white font-medium">{strat.instrument} · {strat.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category</span>
                    <span className="text-white font-medium">{strat.category}</span>
                  </div>
                </div>

                {/* Risk Governance */}
                <div className="border-t border-[#1f1f23] pt-3 space-y-2">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Risk Governance</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/[0.03] border border-white/5 p-2 rounded">
                      <span className="text-[10px] text-zinc-400 block">Target Payoff (TP)</span>
                      <span className="text-emerald-400 font-bold">{strat.rrRatio}</span>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 p-2 rounded">
                      <span className="text-[10px] text-zinc-400 block">Max Risk Stop (SL)</span>
                      <span className="text-red-400 font-bold">-1.00R</span>
                    </div>
                  </div>
                </div>

                {/* Live VPS Signals */}
                <div className="border-t border-[#1f1f23] pt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Live VPS Signals</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Active</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    {strat.signals.map((sig, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className={sig.isHit ? "text-emerald-400" : "text-sky-400"}>
                            {sig.isHit ? "✔" : "▲"}
                          </span>
                          <div>
                            <div className={`font-bold ${sig.isHit ? "text-emerald-400" : "text-white"}`}>{sig.type}</div>
                            <div className="text-[10px] text-zinc-400 font-mono">${sig.price.toFixed(2)}</div>
                          </div>
                        </div>
                        <div className="text-[10px] text-zinc-500 text-right">
                          <div>{sig.time}</div>
                          <div>{sig.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href="https://stratmarket.elvariscapital.in/chart/PS-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center py-2.5 rounded-lg bg-white/10 hover:bg-[#CBB894] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Open PS-01 Live Chart ↗
                </a>
              </aside>
            )}
          </div>

          {/* Bottom Terminal Status Bar */}
          <div className="h-[30px] sm:h-[34px] bg-black border-t border-white/[0.08] px-3 sm:px-4 flex items-center justify-between text-zinc-500 font-mono text-[11px] select-none">
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer text-[#CBB894] font-bold">1D</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer">7D</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer">1M</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer">3M</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer hidden sm:inline">6M</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer hidden sm:inline">YTD</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer hidden sm:inline">1Y</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer hidden sm:inline">5Y</a>
              <a href="https://stratmarket.elvariscapital.in/chart/PS-01" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 cursor-pointer">ALL</a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">14:43:11 UTC</span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="hidden sm:inline text-zinc-400">% log auto</span>
            </div>
          </div>{/* Close bottom status bar */}
              </div>{/* Close relative rounded-2xl */}
            </div>{/* Close relative group */}
          </div>{/* Close lg:col-span-7 */}
        </div>{/* Close grid-cols-12 */}

        {/* StratMarket Promotional Highlights - Spacious Lower Section */}
        <div className="grid gap-6 md:grid-cols-3 mt-14 pt-10 border-t border-white/[0.06]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-sm">
            <div className="size-9 rounded-lg bg-[#CBB894]/10 border border-[#CBB894]/20 flex items-center justify-center text-[#CBB894] mb-4">
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
        <div className="mt-10 rounded-2xl border border-[#CBB894]/25 bg-gradient-to-r from-[#CBB894]/[0.05] via-white/[0.01] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#CBB894] font-semibold mb-1">
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
            href="https://stratmarket.elvariscapital.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#CBB894] transition-all duration-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.5)]"
          >
            <span>Visit stratmarket.elvariscapital.in</span>
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
            <span className="text-[#CBB894]">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
