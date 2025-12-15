import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Orange POS AI | Modern POS for Real Businesses",
  description:
    "Fast, reliable POS built for retail and hospitality. Orange POS AI powers payments, inventory, and smooth daily operations.",
  openGraph: {
    title: "Orange POS AI | Modern POS for Real Businesses",
    description:
      "Fast, reliable POS built for retail and hospitality. Orange POS AI powers payments, inventory, and smooth daily operations.",
    url: "https://orangepos.ch",
    siteName: "Orange POS AI",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Orange POS AI logo"
      }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-navy text-slate-100 antialiased">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1224] to-[#090f1d]">
          <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
          <div className="absolute inset-0 bg-grid-light bg-[length:28px_28px] opacity-20" aria-hidden />
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}

