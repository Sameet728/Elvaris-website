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

import { CustomCursor } from "../components/custom-cursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <body className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-foreground antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
