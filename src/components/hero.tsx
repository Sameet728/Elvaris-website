"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";


function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Abstract data grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-data-grid animate-grid-pan opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(20,20,30,0.5),transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] flex flex-col items-center justify-center min-h-[65vh]">
        {/* Announcement badge */}
        <div
          className="animate-[reveal-in_700ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none flex justify-center mb-12"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span
              aria-hidden="true"
              className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_100%)]"
            />
            <Link
              href="/research"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#050505] py-1.5 pr-5 pl-2 text-[13px] font-medium text-white/70 transition-all duration-300 hover:text-white"
            >
              <span className="rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-white">
                Initiative
              </span>
              Independent Research &amp; Technology
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </span>
        </div>

        {/* Main heading + subtitle */}
        <div className="mx-auto max-w-[1100px] space-y-10 text-center">
          <div
            className="animate-[reveal-in_700ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none"
            style={{ animationDelay: "60ms" }}
          >
            <h1 className="text-[clamp(40px,6vw,76px)] leading-[1.05] font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 pb-2 drop-shadow-2xl">
              <span className="whitespace-nowrap">Researching Intelligence</span><br />
              <span className="whitespace-nowrap">for Markets.</span>
            </h1>
          </div>

          <div
            className="animate-[reveal-in_700ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none"
            style={{ animationDelay: "200ms" }}
          >
            <p className="mx-auto max-w-2xl text-[19px] leading-relaxed text-white/50 font-light tracking-wide text-pretty">
              Elvaris is an independent research and technology initiative exploring artificial intelligence, quantitative methods, market data, and systematic research.
            </p>
          </div>

          <div
            className="animate-[reveal-in_700ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none pt-6"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition-all duration-300 ease-out hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] active:scale-[0.98]"
                href="/research"
              >
                Explore Research
                <ArrowRight />
              </Link>
              <Link
                className="group relative inline-flex items-center gap-2 rounded-full bg-white/[0.03] backdrop-blur-sm ring-1 ring-inset ring-white/10 px-8 py-3.5 text-[15px] font-medium text-white/80 transition-all duration-300 ease-out hover:bg-white/10 hover:text-white hover:ring-white/30 hover:scale-[1.02] active:scale-[0.98]"
                href="/documentation"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
