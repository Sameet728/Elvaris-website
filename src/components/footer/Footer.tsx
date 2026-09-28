import Link from 'next/link';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '@/components/ui/Icons';

const footerLinks = {
  Research: [
    { label: 'Research', href: '/research' },
    { label: 'Projects', href: '/projects' },
    { label: 'Insights', href: '/blog' },
  ],
  Documentation: [
    { label: 'Getting Started', href: '/documentation/introduction' },
    { label: 'Methods', href: '/documentation/backtesting' },
    { label: 'Glossary', href: '/documentation/sharpe-ratio' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-12 h-12 relative flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Elvaris Funding Logo" 
                  className="w-full h-full object-contain rounded-md theme-invert"
                  onError={(e) => {
                    // Fallback to stylized text if image is not yet in public folder
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('hidden');
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[var(--text-primary)] font-bold text-[18px] tracking-[0.15em] leading-tight">
                  ELVARIS
                </span>
                <span className="text-[var(--text-muted)] font-medium text-[10px] tracking-[0.3em] uppercase">
                  Funding
                </span>
              </div>
            </Link>
            <p className="text-[var(--text-muted)] text-sm max-w-xs leading-relaxed mb-6">
              Researching Intelligence for Markets.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} Elvaris. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[var(--text-muted)]">
              Research and educational information only.
            </span>
            <span className="text-[var(--border-color)]">·</span>
            <Link href="/privacy" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12px] text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
