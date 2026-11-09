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
    // 70 bars closely matching the screenshot:
    // Left high around 4140, dropping to 4110, bounce, drop to 4096 (Trade entry), rally to 4125 (TP Hit), drop to 4030, bounce to 4071.67
    const points = [
      4136, 4142, 4148, 4144, 4152, 4146, 4149, 4138, 4132, 4120, // 0-9
      4126, 4118, 4124, 4122, 4129, 4124, 4127, 4134, 4139, 4136, // 10-19
      4131, 4125, 4128, 4118, 4110, 4104, 4112, 4100, 4096, 4094, // 20-29
      4092, 4098, 4106, 4114, 4121, 4118, 4126, 4119, 4112, 4108, // 30-39 (TP Hit at bar ~33: 4113.74)
      4102, 4095, 4088, 4092, 4084, 4078, 4068, 4072, 4064, 4056, // 40-49
      4048, 4042, 4038, 4034, 4040, 4045, 4052, 4061, 4068, 4064, // 50-59
      4058, 4052, 4046, 4038, 4032, 4042, 4054, 4062, 4068, 4071.67 // 60-69
    ];

    return points.map((p, idx) => {
      const prev = idx > 0 ? points[idx - 1] : p - 1.5;
      const isUp = p >= prev;
      const open = +(prev).toFixed(2);
      const close = +(p).toFixed(2);
      const spread = Math.abs(close - open);
      const high = +(Math.max(open, close) + Math.random() * 2.8 + 1).toFixed(2);
      const low = +(Math.min(open, close) - Math.random() * 2.8 - 0.8).toFixed(2);
      return { open, close, high, low };
    });
  }

  // Fallback generation for other strategies
  const base = STRATEGIES[strategyId].currentPrice;
  const list: Candle[] = [];
  let cur = base - 15;
  for (let i = 0; i < 60; i++) {
    const open = cur;
    const delta = (Math.random() - 0.48) * 3.5;
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

    const width = 1100;
    const height = 480;
    const paddingRight = 72; // Space for price scale
    const paddingBottom = 32; // Space for time scale
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
      const w = Math.max(3, candleW * 0.72);

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
        color: isUp ? "#26a69a" : "#ef5350",
        fill: isUp ? "#26a69a" : "#ef5350"
      };
    });

    // Position Box Coordinates for trade
    // Entry at bar 28 in PS-04 dataset
    const entryBarIdx = selectedStrategy === "PS-04" ? 28 : 22;
    const exitBarIdx = selectedStrategy === "PS-04" ? 38 : 34;

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
    <section id="stratmarket" className="relative z-20 w-full bg-[#0a0a0c] text-white pt-20 pb-12 sm:pt-24 sm:pb-20 overflow-hidden border-b border-white/[0.08]">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#a3e635]/40 to-transparent" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#26a69a]/[0.025] blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* Promo Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 px-4 py-1.5 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-[#a3e635]">
                StratMarket Launch · Product Showcase
              </span>
              <span className="text-white/20">|</span>
              <span className="text-white/70 font-mono text-xs">By Elvaris Capital</span>
            </div>

            <h2 className="text-[clamp(28px,3.8vw,48px)] leading-[1.08] font-light tracking-tight text-white">
              Institutional algorithmic trading.<br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#a3e635]">
                Live terminal execution & verified trades.
              </span>
            </h2>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://strat-market-chi.vercel.app/chart/PS-04"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#a3e635] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#bef264] hover:shadow-[0_0_35px_rgba(163,230,53,0.4)] active:scale-95"
            >
              <span>Open Live Terminal</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://strat-market-chi.vercel.app/market"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-mono font-medium uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
            >
              <span>Browse Catalog</span>
              <ChevronRight className="size-4 text-white/50" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE TERMINAL INTERFACE (MATCHING SCREENSHOT)                              */}
        {/* ========================================================================= */}
        <div className="rounded-2xl border border-[#27272a] bg-[#131722] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)]">
          
          {/* Top Brand Toolbar */}
          <div className="h-[54px] bg-[#09090b] border-b border-[#1f1f23] px-3 sm:px-4 flex items-center justify-between text-xs select-none">
            
            {/* Left toolbar items */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
              {/* Back to StratMarket Link */}
              <a
                href="https://strat-market-chi.vercel.app/market"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors font-semibold"
                title="StratMarket by Elvaris Capital"
              >
                {/* StratMarket Polygon Logo */}
                <svg width="18" height="18" viewBox="0 0 100 118" fill="#ffffff" className="shrink-0" aria-label="StratMarket Logo">
                  <path d="M 99.32 12.66 L 74.40 0.68 L 68.26 0.00 L 2.05 38.65 L 0.00 43.10 L 0.00 60.54 L 1.37 63.62 L 3.41 65.67 L 30.03 79.01 L 47.78 68.75 L 23.55 57.80 L 22.18 56.09 Z" />
                  <path d="M 99.32 59.17 L 96.59 55.41 L 66.55 41.04 L 43.34 54.38 L 70.99 68.06 L 3.07 104.66 L 28.33 116.97 L 35.15 116.97 L 97.27 82.43 L 99.66 77.64 Z" />
                </svg>
                <span className="text-white font-bold tracking-tight text-sm">StratMarket</span>
                <span className="hidden md:inline text-[10.5px] text-zinc-400 font-medium">by Elvaris Capital</span>
              </a>

              <div className="w-[1px] h-4 bg-zinc-800 shrink-0" />

              {/* Strategy Selector Dropdown */}
              <div className="relative shrink-0">
                <select
                  value={selectedStrategy}
                  onChange={(e) => setSelectedStrategy(e.target.value)}
                  className="bg-white/5 border border-white/15 text-white text-xs font-semibold rounded-md px-2.5 py-1.5 pr-7 appearance-none cursor-pointer hover:border-white/30 focus:outline-none focus:ring-1 focus:ring-[#a3e635] transition-all"
                  title="Switch Active Trading Model"
                >
                  <option value="PS-04" className="bg-[#131722] text-white">PS-04 · Elite (80.7% WR)</option>
                  <option value="PS-01" className="bg-[#131722] text-white">PS-01 · Grandmaster (82.6% WR)</option>
                  <option value="PS-02" className="bg-[#131722] text-white">PS-02 · Apex (88.5% WR)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white/50 text-[10px]">
                  ▼
                </div>
              </div>

              {/* Symbol & Timeframe */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-white shrink-0">
                <span className="font-bold text-white">{strat.instrument}</span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400">{strat.timeframe}</span>
              </div>
            </div>

            {/* Right toolbar items */}
            <div className="flex items-center gap-2 shrink-0">
              
              {/* Position Boxes Toggle (Requested Key Feature!) */}
              <button
                type="button"
                onClick={() => setShowBoxes(!showBoxes)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-mono font-medium transition-all ${
                  showBoxes 
                    ? "bg-[#a3e635]/15 border border-[#a3e635]/40 text-[#a3e635] shadow-[0_0_12px_rgba(163,230,53,0.2)]" 
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
                }`}
                title="Toggle Visual Long/Short Position Tool Boxes on Chart"
              >
                <span className={`size-1.5 rounded-full ${showBoxes ? "bg-[#a3e635] shadow-[0_0_6px_#a3e635]" : "bg-zinc-600"}`} />
                <span>Position Boxes</span>
              </button>

              {/* Alerts Button */}
              <button
                type="button"
                onClick={() => setAlertsOn(!alertsOn)}
                className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-mono font-medium border transition-colors ${
                  alertsOn ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-zinc-500"
                }`}
              >
                <span>{alertsOn ? "Alerts ON" : "Alerts OFF"}</span>
              </button>

              {/* Live Feed Status Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono">
                <span className="relative flex h-1.5 w-1.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] ${isLiveStreaming ? "opacity-75" : "opacity-0"}`}></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#a3e635]"></span>
                </span>
                <span className="text-[#a3e635] font-semibold hidden sm:inline">Live Feed</span>
              </div>

              {/* Strategy Details Drawer Toggle */}
              <button
                type="button"
                onClick={() => setPanelOpen(!panelOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-mono transition-colors ${
                  panelOpen ? "bg-[#a3e635] text-black font-bold" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
                title="Toggle Strategy Details & Live VPS Signals"
              >
                <Sliders className="size-3.5" />
                <span className="hidden sm:inline">Strategy</span>
              </button>
            </div>
          </div>

          {/* Sub-header Bar (TradingView style symbol + timeframe + indicators) */}
          <div className="h-[38px] bg-[#131722] border-b border-[#2a2e39] px-3 sm:px-4 flex items-center justify-between text-zinc-400 text-xs font-mono select-none">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold tracking-wide">{strat.instrument}</span>
              <div className="flex items-center gap-1 text-zinc-400 hover:text-white cursor-pointer">
                <span>15m</span>
                <span className="text-[9px]">▼</span>
              </div>
              <div className="w-[1px] h-3.5 bg-zinc-800" />
              <div className="flex items-center gap-2">
                <button type="button" title="Candles" className="p-0 bg-transparent border-0 flex items-center">
                  <CandlestickChart className="size-4 text-zinc-400 hover:text-white cursor-pointer" />
                </button>
                <span className="hover:text-white cursor-pointer hidden sm:inline">fx Indicators</span>
              </div>
              <div className="w-[1px] h-3.5 bg-zinc-800 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-zinc-500">
                <Undo2 className="size-3.5 hover:text-zinc-300 cursor-pointer" />
                <Redo2 className="size-3.5 hover:text-zinc-300 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-500">
              <span className="hidden md:inline text-[10px] text-zinc-400">Institutional Feed: LMAX · FIX 4.4</span>
              <button type="button" title="Take Screenshot" className="p-0 bg-transparent border-0 flex items-center">
                <Camera className="size-3.5 hover:text-zinc-300 cursor-pointer" />
              </button>
              <button type="button" title="Fullscreen" className="p-0 bg-transparent border-0 flex items-center">
                <Maximize2 className="size-3.5 hover:text-zinc-300 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Main Chart Area with Left Tools + SVG Canvas + Optional Side Panel */}
          <div className="relative flex w-full min-h-[460px] sm:min-h-[520px] bg-[#131722]">
            
            {/* Left TradingView Toolbar */}
            <div className="hidden sm:flex w-[46px] border-r border-[#2a2e39] bg-[#131722] flex-col items-center py-2 gap-3 text-zinc-500 shrink-0 select-none">
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Crosshair"><Crosshair className="size-4 text-zinc-300" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Trend Line"><Slash className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Gann & Fibonacci"><Compass className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Geometric Shapes"><PenTool className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Text Annotation"><Type className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Patterns"><Shapes className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Measure Distance"><Ruler className="size-4 text-zinc-400" /></button>
              <div className="w-5 h-[1px] bg-zinc-800 my-1" />
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Zoom In"><Search className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors" title="Magnet Mode"><Magnet className="size-4" /></button>
              <button className="p-1.5 rounded hover:bg-white/5 hover:text-zinc-200 transition-colors mt-auto" title="Clear All"><Trash2 className="size-4 hover:text-red-400" /></button>
            </div>

            {/* Central Chart Viewport */}
            <div className="relative flex-1 h-[460px] sm:h-[520px] overflow-hidden bg-[#131722]">
              
              {chart && (
                <svg
                  viewBox={`0 0 ${chart.width} ${chart.height}`}
                  preserveAspectRatio="none"
                  className="w-full h-full block select-none"
                >
                  <defs>
                    {/* Position Box Gradients matching screenshot */}
                    <linearGradient id="tpBoxGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.10" />
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
                          stroke="#1e222d"
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
                        stroke="#1e222d"
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
                    stroke="#2a2e39"
                    strokeWidth="1"
                  />

                  {/* Bottom Time Axis Separator Line */}
                  <line
                    x1="0"
                    x2={chart.width}
                    y1={chart.chartH}
                    y2={chart.chartH}
                    stroke="#2a2e39"
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
                      {/* Small triangle pin at entry */}
                      <path
                        d={`M${chart.boxX1},${chart.entryY} l-5,6 h10 z`}
                        fill="#ffffff"
                      />
                      <text
                        x={chart.boxX1 + 10}
                        y={chart.entryY + 4}
                        fill="#ffffff"
                        fontSize="11"
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
                        stroke="#a3e635"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                      />
                      <text
                        x={chart.boxX1 + 10}
                        y={chart.tpY - 5}
                        fill="#a3e635"
                        fontSize="11"
                        fontFamily="ui-monospace, Menlo, monospace"
                        fontWeight="700"
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
                      <text
                        x={chart.boxX1 + 10}
                        y={chart.slY + 12}
                        fill="#ef4444"
                        fontSize="10"
                        fontFamily="ui-monospace, Menlo, monospace"
                        fontWeight="700"
                      >
                        SL: ${strat.slPrice.toFixed(2)}
                      </text>
                    </g>
                  )}

                  {/* Current Price Horizontal Dotted Line */}
                  <line
                    x1="0"
                    x2={chart.chartW}
                    y1={chart.currentPriceY}
                    y2={chart.currentPriceY}
                    stroke="#089981"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />

                  {/* Current Price Axis Pill (Teal background, White Text) */}
                  <rect
                    x={chart.chartW + 2}
                    y={chart.currentPriceY - 10}
                    width="66"
                    height="20"
                    rx="3"
                    fill="#089981"
                  />
                  <text
                    x={chart.chartW + 35}
                    y={chart.currentPriceY + 4}
                    fill="#ffffff"
                    fontSize="11"
                    fontFamily="ui-monospace, Menlo, monospace"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {currentTickPrice.toFixed(2)}
                  </text>

                  {/* Bottom Time Axis Labels */}
                  {selectedStrategy === "PS-04" ? (
                    <>
                      <text x="120" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">06:00</text>
                      <text x="280" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">12:00</text>
                      <text x="440" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                      <text x="580" y={chart.chartH + 20} fill="#a1a1aa" fontWeight="600" fontSize="10" fontFamily="ui-monospace, monospace">Nov 6</text>
                      <text x="720" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">06:00</text>
                      <text x="860" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">12:00</text>
                      <text x="960" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                    </>
                  ) : (
                    <>
                      <text x="150" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">10:00</text>
                      <text x="380" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">14:00</text>
                      <text x="620" y={chart.chartH + 20} fill="#787b86" fontSize="10" fontFamily="ui-monospace, monospace">18:00</text>
                      <text x="860" y={chart.chartH + 20} fill="#a1a1aa" fontWeight="600" fontSize="10" fontFamily="ui-monospace, monospace">Today</text>
                    </>
                  )}
                </svg>
              )}
            </div>

            {/* Strategy Side Panel (Collapsible Drawer matching chunk_chart.js) */}
            {panelOpen && (
              <aside className="w-[320px] bg-[#09090b] border-l border-[#1f1f23] p-4 flex flex-col gap-4 text-xs font-mono overflow-y-auto animate-fadeIn shrink-0">
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
                    <span className="text-[#a3e635] font-semibold">Pine Script v5 & MT5</span>
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
                      <span className="text-[#a3e635] font-bold">{strat.rrRatio}</span>
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
                          <span className={sig.isHit ? "text-[#a3e635]" : "text-sky-400"}>
                            {sig.isHit ? "✔" : "▲"}
                          </span>
                          <div>
                            <div className={`font-bold ${sig.isHit ? "text-[#a3e635]" : "text-white"}`}>{sig.type}</div>
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
                  href={`https://strat-market-chi.vercel.app/chart/${strat.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center py-2.5 rounded-lg bg-white/10 hover:bg-[#a3e635] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Open Full StratMarket Page ↗
                </a>
              </aside>
            )}
          </div>

          {/* Bottom Terminal Status Bar */}
          <div className="h-[36px] bg-[#09090b] border-t border-[#1f1f23] px-3 sm:px-4 flex items-center justify-between text-zinc-500 font-mono text-[11px] select-none">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="hover:text-zinc-300 cursor-pointer text-[#a3e635] font-bold">1D</span>
              <span className="hover:text-zinc-300 cursor-pointer">7D</span>
              <span className="hover:text-zinc-300 cursor-pointer">1M</span>
              <span className="hover:text-zinc-300 cursor-pointer">3M</span>
              <span className="hover:text-zinc-300 cursor-pointer hidden sm:inline">6M</span>
              <span className="hover:text-zinc-300 cursor-pointer hidden sm:inline">YTD</span>
              <span className="hover:text-zinc-300 cursor-pointer hidden sm:inline">1Y</span>
              <span className="hover:text-zinc-300 cursor-pointer hidden sm:inline">5Y</span>
              <span className="hover:text-zinc-300 cursor-pointer">ALL</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">14:43:11 UTC</span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="hidden sm:inline text-zinc-400">% log auto</span>
            </div>
          </div>
        </div>

        {/* Institutional Performance Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono">
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">Peak Win Rate</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#a3e635]">{strat.winRate}</span>
              <span className="text-xs text-zinc-500 font-normal">Audited</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono">
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">Profit Factor</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{strat.profitFactor}</span>
              <span className="text-xs text-zinc-500 font-normal">Gross W/L</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono">
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">Max Drawdown</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-400">{strat.maxDrawdown}</span>
              <span className="text-xs text-zinc-500 font-normal">Peak-to-Trough</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 font-mono">
            <span className="text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">Sharpe Ratio</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{strat.sharpe}</span>
              <span className="text-xs text-zinc-500 font-normal">Annualized</span>
            </div>
          </div>
        </div>

        {/* StratMarket Promotional Highlights */}
        <div className="grid gap-6 md:grid-cols-3 mt-8">
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
