"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ElvarisLogo } from "./logo";
import { usePathname } from "next/navigation";

const mainLinks = [
  { name: "Research", href: "/research" },
  { name: "Product", href: "/product" },
  { name: "Insights", href: "/insights" },
  { name: "Documentation", href: "/documentation" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "border-b border-white/[0.04] bg-[#020202]/60 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "border-b border-transparent bg-transparent py-2"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
        
        {/* Logo and Brand */}
        <Link aria-label="Elvaris Capital home" className="flex items-center group" href="/">
          <div className="h-[18px] [&_svg]:h-[18px] [&_svg]:w-auto [&_svg]:overflow-visible text-white drop-shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            <ElvarisLogo />
          </div>
          <div className="h-4 w-px bg-white/10 mx-5 transition-colors duration-500 group-hover:bg-white/30" />
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] font-medium text-white/50 transition-all duration-500 group-hover:text-white mt-px">
            Elvaris Capital
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2.5 text-[13px] font-medium transition-colors duration-500 group ${
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {link.name}
                {/* Glowing bottom indicator */}
                <span 
                  className={`absolute inset-x-4 -bottom-[23px] h-[1px] transition-all duration-500 ${
                    isActive 
                      ? "bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                      : "bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
                  }`} 
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA / Right Side */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/contact" 
            className="group relative overflow-hidden rounded-full bg-white/[0.02] px-6 py-2.5 text-[13px] font-medium text-white/90 ring-1 ring-inset ring-white/10 transition-all duration-500 hover:bg-white/10 hover:text-white hover:ring-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <span className="relative z-10">Client Portal</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-[-15deg] transition-all duration-700 ease-out group-hover:translate-x-[150%]" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full p-2.5 text-white/50 hover:bg-white/[0.05] hover:text-white transition-all duration-300 lg:hidden"
        >
          <span aria-hidden="true" className="relative block size-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`absolute inset-0 size-5 transition-[opacity,transform] duration-500 ${
                mobileOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`absolute inset-0 size-5 transition-[opacity,transform] duration-500 ${
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-[500px] border-t border-white/[0.04] opacity-100 bg-[#020202]/95 backdrop-blur-3xl shadow-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-8 space-y-6">
          {mainLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[16px] font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-white/5">
            <Link 
              href="/contact" 
              className="inline-flex w-full justify-center rounded-full bg-white/[0.03] ring-1 ring-inset ring-white/10 px-5 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/10 hover:ring-white/30"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
