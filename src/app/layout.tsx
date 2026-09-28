import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Elvaris Funding — Researching Intelligence for Markets',
    template: '%s | Elvaris Funding',
  },
  description:
    'Elvaris is a research and technology initiative exploring artificial intelligence, quantitative research, machine learning, market data, and systematic research.',
  keywords: [
    'quantitative research',
    'machine learning',
    'artificial intelligence',
    'market data',
    'systematic research',
    'backtesting',
    'data engineering',
  ],
  authors: [{ name: 'Elvaris' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elvaris.com',
    siteName: 'Elvaris',
    title: 'Elvaris — Researching Intelligence for Markets',
    description:
      'Elvaris is a research and technology initiative exploring artificial intelligence, quantitative research, machine learning, market data, and systematic research.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elvaris — Researching Intelligence for Markets',
    description:
      'Research and technology initiative exploring AI, quantitative research, machine learning, and market data.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
