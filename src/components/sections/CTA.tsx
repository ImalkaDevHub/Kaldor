"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-bg-base relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-bg-surface border border-border-subtle/50 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Subtle background glow inside the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent-base/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-body text-white mb-4">
              Ready to build your next big thing?
            </h2>
            <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              We're currently accepting new projects. Join our list of successful partners and let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-12">
              <Link href="/contact" className="w-full sm:w-auto block">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-base text-white font-bold tracking-wide hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                  <Scissors className="w-4 h-4" /> Start a Project
                </button>
              </Link>
              
              <Link href="/work" className="w-full sm:w-auto block">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-border-subtle bg-bg-surface-2/50 text-white font-bold tracking-wide hover:bg-bg-surface-2 transition-colors">
                  View More Work
                </button>
              </Link>
            </div>
            
            <div className="text-sm text-text-muted flex items-center justify-center gap-2">
              <span>Free consultation</span>
              <span>&middot;</span>
              <span>Quick response</span>
              <span>&middot;</span>
              <span>No obligation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
