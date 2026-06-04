"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/#process" },
    { name: "About", href: "/#about" },
  ];

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 px-4", scrolled ? "pt-4" : "pt-6")}>
      <nav
        className={cn(
          "w-full flex items-center justify-between transition-all duration-500 relative",
          scrolled 
            ? "max-w-5xl px-6 py-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl" 
            : "max-w-7xl px-2 py-2 bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="k-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <mask id="k-cut">
                <rect width="100" height="100" fill="white" />
                <line x1="-10" y1="105" x2="105" y2="-10" stroke="black" strokeWidth="10" />
              </mask>
            </defs>
            <path 
              d="M 15 10 L 40 10 L 40 45 L 75 10 L 100 10 L 55 55 L 100 100 L 75 100 L 40 65 L 40 100 L 15 100 Z" 
              fill="url(#k-grad)" 
              mask="url(#k-cut)" 
            />
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">Kaldor</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={cn(
          "absolute left-0 w-full bg-[#0a0a0a] border border-white/10 p-6 flex flex-col gap-4 md:hidden",
          scrolled ? "top-[calc(100%+12px)] rounded-2xl shadow-xl" : "top-full border-t-0 rounded-b-2xl"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-text-secondary hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-5 py-3 text-center rounded-lg bg-white text-black font-semibold"
          >
            Start Project
          </Link>
        </div>
      )}
      </nav>
    </div>
  );
}
