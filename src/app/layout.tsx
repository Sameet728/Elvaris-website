import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvaris Capital — Researching Intelligence for Markets",
  description:
    "Elvaris is a research and technology initiative exploring artificial intelligence, quantitative methods, market data, and systematic research.",
  openGraph: {
    title: "Elvaris Capital — Researching Intelligence for Markets",
    description:
      "Elvaris is a research and technology initiative exploring artificial intelligence, quantitative methods, market data, and systematic research.",
    url: "https://www.elvariscapital.in/",
    siteName: "Elvaris Capital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvaris Capital",
    description:
      "Researching Intelligence for Markets. An independent research and technology initiative.",
  }
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.elvariscapital.in/#organization",
  "name": "Elvaris Capital",
  "alternateName": ["Elvaris", "Elvaris Capital Technologies", "StratMarket by Elvaris"],
  "url": "https://www.elvariscapital.in/",
  "logo": "https://www.elvariscapital.in/icon.png",
  "foundingDate": "2026",
  "description": "Elvaris Capital is an autonomous quantitative research and technology firm founded in 2026 by Vedant Asawale (CEO) and Sameet Pisal (MD & Head of Research), engineering verifiable algorithmic trading strategies and market intelligence platforms.",
  "founders": [
    {
      "@type": "Person",
      "@id": "https://www.elvariscapital.in/#vedant-asawale",
      "name": "Vedant Asawale",
      "jobTitle": "Chief Executive Officer & Co-Founder",
      "worksFor": { "@id": "https://www.elvariscapital.in/#organization" },
      "sameAs": ["https://www.linkedin.com/in/vedant-asawale-263327364/"]
    },
    {
      "@type": "Person",
      "@id": "https://www.elvariscapital.in/#sameet-pisal",
      "name": "Sameet Pisal",
      "jobTitle": "Managing Director, Head of Research & Co-Founder",
      "worksFor": { "@id": "https://www.elvariscapital.in/#organization" },
      "sameAs": ["https://www.linkedin.com/in/sameet-pisal/"]
    }
  ]
};

import { CustomCursor } from "../components/custom-cursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-foreground antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
