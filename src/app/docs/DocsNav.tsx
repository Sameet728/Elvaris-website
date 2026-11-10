"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StratMarketLogo } from "@/components/StratMarketLogo";

export const DOCS_PAGES = [
  {
    category: "Overview",
    items: [
      { href: "/docs", title: "Documentation Hub", badge: "Start" },
      { href: "/docs/elvaris-capital", title: "About Elvaris Capital", badge: "Parent Org" },
      { href: "/docs/faq", title: "Quantitative FAQ", badge: "Popular" },
    ],
  },
  {
    category: "Quantitative Science",
    items: [
      { href: "/docs/quantitative-methodology", title: "Research Methodology", badge: null },
      { href: "/docs/algorithmic-strategies", title: "Strategy Catalog (PS & PY)", badge: "13 Models" },
      { href: "/docs/risk-management", title: "Sovereign Risk Governance", badge: null },
    ],
  },
  {
    category: "Execution & Engineering",
    items: [
      { href: "/docs/signals-and-execution", title: "Signals & VPS Architecture", badge: "Sub-50ms" },
      { href: "/docs/broker-integration", title: "Broker Integration & Webhooks", badge: "APIs" },
    ],
  },
  {
    category: "Platform Links",
    items: [
      { href: "/documentation", title: "Full Research Hub", badge: "Main Site" },
      { href: "https://stratmarket.elvariscapital.in", title: "StratMarket Live App", badge: "Terminal" },
    ],
  },
];

export function DocsNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <aside className="docs-aside">
      {/* Mobile Accordion Toggle */}
      <div className="docs-mobile-bar block lg:hidden mb-4">
        <button
          type="button"
          className="docs-mobile-btn w-full flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-surface-100 text-sm font-medium text-white transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2">
            <StratMarketLogo size={16} color="#ffffff" />
            <span>Documentation Topics</span>
          </span>
          <span className="text-xs text-white/70 font-mono">{mobileOpen ? "Close ▲" : "Browse Topics ▼"}</span>
        </button>
      </div>

      <div className={`docs-aside-inner ${mobileOpen ? "block" : "hidden"} lg:block space-y-8`}>
        <div className="docs-aside-header pb-4 border-b border-white/10">
          <Link href="/" className="inline-flex items-center gap-2.5 text-white no-underline mb-3">
            <StratMarketLogo size={22} color="#ffffff" />
            <span className="text-[17px] font-bold tracking-tight text-white">StratMarket</span>
          </Link>
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/50 block font-semibold mb-1">
            Quantitative Research Library
          </span>
          <p className="text-xs text-white/40 leading-relaxed m-0">
            Engineered by{" "}
            <Link href="/" className="text-white hover:underline">
              Elvaris Capital
            </Link>
          </p>
        </div>

        <nav className="flex flex-col gap-6">
          {DOCS_PAGES.map((sec, idx) => (
            <div key={idx}>
              <span className="text-[10px] uppercase font-mono tracking-wider text-white/40 font-semibold block mb-2 px-1">
                {sec.category}
              </span>
              <ul className="space-y-1 list-none p-0 m-0">
                {sec.items.map((item, i) => {
                  const isActive = pathname === item.href;
                  const isExternal = item.href.startsWith("http");
                  return (
                    <li key={i}>
                      {isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-white/60 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/60">
                              {item.badge} ↗
                            </span>
                          )}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                            isActive
                              ? "bg-white/10 text-white font-semibold border border-white/15 shadow-sm"
                              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                                isActive ? "bg-white text-black font-semibold" : "bg-white/[0.06] text-white/60"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Parent Organization Callout Box */}
        <div className="p-4 rounded-xl border border-white/10 bg-surface-100/60 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 block font-semibold">
            Parent Organization
          </span>
          <p className="text-xs text-white/40 leading-relaxed m-0">
            StratMarket operates under the sovereign risk governance of Elvaris Capital.
          </p>
          <a
            href="https://elvariscapital.in"
            className="text-xs font-medium text-white hover:underline inline-flex items-center gap-1 pt-1"
          >
            <span>elvariscapital.in</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default DocsNav;

