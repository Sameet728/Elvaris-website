"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ElvarisLogo } from "./logo";
import { usePathname } from "next/navigation";

const mainLinks = [
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "Documentation", href: "/documentation" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle scroll for dynamic border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "border-b border-white/[0.08] bg-black/50 backdrop-blur-xl" 
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6">
        
        {/* Logo and Brand */}
        <Link aria-label="Elvaris Capital home" className="flex items-center group" href="/">
          <div className="h-5 [&_svg]:h-5 [&_svg]:w-auto [&_svg]:overflow-visible text-white drop-shadow-md transition-transform duration-300 group-hover:scale-105">
            <ElvarisLogo />
          </div>
          <div className="h-4 w-px bg-white/20 mx-4" />
          <span className="text-[12px] font-inter uppercase tracking-[0.25em] font-medium text-white/80 transition-colors duration-300 group-hover:text-white mt-px">
            Elvaris Capital
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          {mainLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-[14px] font-inter transition-colors duration-300 group ${
                  isActive ? "text-white font-medium" : "text-white/60 hover:text-white font-normal"
                }`}
              >
                {link.name}
                {/* Glowing bottom indicator */}
                <span 
                  className={`absolute inset-x-4 -bottom-[25px] h-[2px] rounded-t-full transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-100" 
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
            className="rounded-full bg-white/[0.05] px-5 py-2 text-[13px] font-inter font-medium text-white ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-white hover:text-black hover:ring-white"
          >
            Client Portal
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full p-2.5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 lg:hidden"
        >
          <span aria-hidden="true" className="relative block size-5">
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
              className={`absolute inset-0 size-5 transition-[opacity,transform] duration-300 ${
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`absolute inset-0 size-5 transition-[opacity,transform] duration-300 ${
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] border-t border-white/10 opacity-100 bg-black/90 backdrop-blur-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          {mainLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[17px] font-inter transition-colors ${
                  isActive ? "text-white font-medium" : "text-white/60 hover:text-white font-normal"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <Link 
              href="/contact" 
              className="inline-flex w-full justify-center rounded-full bg-white px-5 py-2.5 text-[15px] font-inter font-medium text-black transition-colors hover:bg-white/90"
            >
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
