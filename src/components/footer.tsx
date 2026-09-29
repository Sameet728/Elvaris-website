import Link from "next/link";
import { ElvarisLogo } from "./logo";

const footerLinks = {
  Research: [
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
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
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        {/* Logo + columns */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          {/* Left: Logo + Tagline */}
          <div className="space-y-6">
            <Link href="/" className="inline-block text-white">
              <div className="h-6 w-[200px] [&_svg]:h-6 [&_svg]:w-auto">
                <ElvarisLogo />
              </div>
            </Link>
            <p className="text-sm text-fg-300 max-w-[280px]">
              Researching Intelligence for Markets.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-fg-300">
                  {title}
                </h3>
                <ul className="space-y-3 list-none pl-0">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-fg-300 transition-colors duration-150 hover:text-fg-100"
                      >
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
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-fg-300">
            © {new Date().getFullYear()} Elvaris. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-fg-300">
            <Link href="/privacy" className="hover:text-fg-100 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-fg-100 transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-[11px] leading-relaxed text-fg-300/60 max-w-4xl">
          Elvaris content is provided for educational and research purposes only. Nothing on this website constitutes financial, investment, or trading advice. Historical or simulated results do not guarantee future performance.
        </p>
      </div>
    </footer>
  );
}
