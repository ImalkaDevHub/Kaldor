"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Orb from "@/components/ui/Orb";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Scissors, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orb */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Orb
          hoverIntensity={2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#050014"
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-center mb-6"
          >
            Defining the Next Era of<br />Digital Innovation.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-[13px] md:text-[15px] text-white/50 max-w-2xl mx-auto font-body leading-relaxed"
          >
            We build high-performance, scalable digital products for forward-thinking companies.<br />Elite engineering meets precision design.
          </motion.p>

        </motion.div>
      </div>

      {/* Bottom area */}
      <div className="absolute bottom-6 w-full flex flex-col items-center gap-8 pointer-events-none">
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto block">
            <LiquidButton size="default" className="w-full sm:w-auto text-white/80 hover:text-white">
              <span className="flex items-center justify-center font-semibold tracking-wide">
                <Scissors className="w-4 h-4 mr-2 opacity-60" />
                Start Your Project
              </span>
            </LiquidButton>
          </Link>
          
          <Link href="/work" className="w-full sm:w-auto block group">
            <LiquidButton size="default" className="w-full sm:w-auto text-white/80 hover:text-white">
              <span className="flex items-center justify-center font-semibold tracking-wide">
                View Case Studies 
                <ArrowRight className="w-3.5 h-3.5 ml-2 opacity-60 group-hover:translate-x-1 transition-transform" />
              </span>
            </LiquidButton>
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-10 text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase"
        >
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind</span>
        </motion.div>

        {/* Bottom info bar */}
        <div className="text-center text-[9px] font-medium uppercase tracking-[0.3em] text-white/20">
          V2.0.4 <span className="mx-4 text-white/10">|</span> BUILD 82F1 <span className="mx-4 text-white/10">|</span> KALDOR AGENCY © 2026
        </div>
      </div>
    </section>
  );
}
