import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata: Metadata = {
  title: {
    default: "Kaldor | Next-Gen Digital Innovation & Software Development",
    template: "%s | Kaldor Agency",
  },
  description: "Leading software development, AI, Cloud, and SaaS solutions. We build scalable, high-performance digital products for modern enterprises.",
  keywords: ["software development", "web design", "SaaS development", "AI integration", "cloud architecture", "digital agency", "Kaldor"],
  authors: [{ name: "Kaldor Agency" }],
  creator: "Kaldor Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaldoragency.com",
    title: "Kaldor | Next-Gen Digital Innovation",
    description: "Leading software development, AI, Cloud, and SaaS solutions.",
    siteName: "Kaldor Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaldor | Next-Gen Digital Innovation",
    description: "Leading software development, AI, Cloud, and SaaS solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
