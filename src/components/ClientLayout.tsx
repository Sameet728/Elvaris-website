'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { ThemeProvider } from '@/lib/theme';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';
import SearchModal from '@/components/ui/SearchModal';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <ThemeProvider>
      <Navigation onSearchOpen={() => setSearchOpen(true)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
