import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "../../public/fonts/dd5b29ae2b046b59-s.p.dc67a.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/0111709e9c3a944f-s.p.dc67a.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/8c7fe42fb350dd8a-s.p.dc67a.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/723e11e5093b8e80.p.dc67a.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuxAlgo | The AI Trading & Charting Platform",
  description:
    "State-of-the-art charts for every market, multi-asset orderflow, and Quant, our coding agent. Build, test, and execute on LuxAlgo. Free to start.",
  openGraph: {
    title: "LuxAlgo | The AI Trading & Charting Platform",
    description:
      "State-of-the-art charts for every market, multi-asset orderflow, and Quant, our coding agent. Build, test, and execute on LuxAlgo. Free to start.",
    url: "https://www.luxalgo.com/",
    siteName: "LuxAlgo",
    type: "website",
    images: [{ url: "/images/luxalgo_og_default.7b78a.jpg", width: 1200, height: 630, alt: "LuxAlgo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LuxAlgo",
    title: "LuxAlgo | The AI Trading & Charting Platform",
    description:
      "State-of-the-art charts for every market, multi-asset orderflow, and Quant, our coding agent. Build, test, and execute on LuxAlgo. Free to start.",
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "48x48" },
      { url: "/images/favicon-96x96-20260821-blue2.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${aeonik.variable} bg-black text-fg-100 antialiased`}>{children}</body>
    </html>
  );
}
