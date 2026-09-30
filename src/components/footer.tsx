import Link from "next/link";
import { ElvarisLogo } from "./logo";

const footerLinks = {
  Research: [
    { name: "Research", href: "/research" },
    { name: "Product", href: "/product" },
    { name: "Insights", href: "/insights" },
    { name: "Documentation", href: "/documentation" },
  ],
  Documentation: [
    { name: "Getting Started", href: "/documentation/introduction" },
    { name: "Methods", href: "/documentation/backtesting" },
    { name: "Glossary", href: "/documentation/sharpe-ratio" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-black overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[200px] bg-white/[0.015] blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-12 sm:py-20">
        {/* Logo + columns */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_3fr]">
          {/* Left: Logo + Tagline */}
          <div className="space-y-8">
            <Link href="/" className="group inline-block text-white">
              <div className="h-6 w-[200px] [&_svg]:h-6 [&_svg]:w-auto transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <ElvarisLogo />
              </div>
            </Link>
            <p className="text-[14px] leading-relaxed text-white/40 max-w-[280px] font-light">
              Researching Intelligence for Markets.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">
                  {title}
                </h3>
                <ul className="space-y-4 list-none pl-0">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-[1px] w-0 bg-white/40 transition-all duration-300 group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-[13px] text-white/30 font-light">
            © {new Date().getFullYear()} Elvaris Capital. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-8 text-[13px] text-white/30 font-light">
            <Link href="/privacy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-[11px] leading-relaxed text-white/20 max-w-4xl text-balance">
          Elvaris content is provided for educational and research purposes only. Nothing on this website constitutes financial, investment, or trading advice. Historical or simulated results do not guarantee future performance.
        </p>
      </div>
    </footer>
  );
}
