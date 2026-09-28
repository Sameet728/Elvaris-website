'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight, Search } from 'lucide-react';
import { GithubIcon as Github } from '@/components/ui/Icons';
import { useTheme } from '@/lib/theme';
import { navigationItems } from '@/data/content';

export default function Navigation({ onSearchOpen }: { onSearchOpen?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-color)]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Elvaris home"
            >
              <div className="w-10 h-10 relative flex-shrink-0">
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
                <span className="text-[var(--text-primary)] font-bold text-[16px] tracking-[0.15em] leading-tight">
                  ELVARIS
                </span>
                <span className="text-[var(--text-muted)] font-medium text-[9px] tracking-[0.3em] uppercase">
                  Funding
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-[13.5px] rounded-md transition-colors ${
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-[var(--bg-hover)] transition-colors"
                            >
                              <span className="text-[13.5px] font-medium text-[var(--text-primary)]">
                                {sub.label}
                              </span>
                              <span className="text-[12px] text-[var(--text-muted)]">
                                {sub.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={onSearchOpen}
                className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-colors"
                aria-label="Open search"
              >
                <Search size={14} />
                <span>Search</span>
                <kbd className="text-[11px] px-1.5 py-0.5 bg-[var(--bg-elevated)] rounded text-[var(--text-muted)] font-mono ml-2">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--bg-surface)]"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--bg-surface)]"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>

              <Link
                href="/research"
                className="ml-2 flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                Explore Research
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onSearchOpen}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Open search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-[var(--bg-primary)] overflow-y-auto lg:hidden"
          >
            <div className="p-6 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-[15px] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="text-[var(--text-muted)]" />}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 pl-4 border-l border-[var(--border-color)] space-y-0.5">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-3 py-2 text-[13.5px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-[var(--border-color)] space-y-2">
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-surface)]"
                >
                  Contact
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-surface)]"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <Link
                  href="/research"
                  className="flex items-center justify-center gap-1.5 mx-4 mt-2 px-4 py-3 text-[14px] font-medium bg-[var(--accent)] text-white rounded-lg"
                >
                  Explore Research
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
