"use client";

import { motion } from "framer-motion";
import { X, Check, Circle, Zap, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Comparison() {
  const badTraits = [
    {
      title: "Slow Turnaround",
      desc: "Weeks of back-and-forth. Projects drag on for months with unclear timelines.",
    },
    {
      title: "Inflated Pricing",
      desc: "Large teams, billable hours, and hidden costs that balloon your budget.",
    },
    {
      title: "Outdated Tech",
      desc: "Legacy frameworks and WordPress templates that don't scale with your business.",
    },
    {
      title: "Communication Gaps",
      desc: "Talk to project managers, not developers. Updates come weekly if you're lucky.",
    },
  ];

  const goodTraits = [
    {
      title: "Days, Not Months",
      desc: "Lean team, efficient workflow. Most projects delivered within 7-14 days.",
    },
    {
      title: "Transparent Pricing",
      desc: "Fixed project quotes. No hourly billing surprises, no hidden fees. You know the cost upfront.",
    },
    {
      title: "Modern Stack, Built to Scale",
      desc: "Next.js, React, TypeScript — production-grade architecture from day one.",
    },
    {
      title: "Talk Directly to Your Developer",
      desc: "No middlemen. Direct Slack or WhatsApp access to the engineer building your product.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-body tracking-tight text-white">
          Why Teams Choose<br/>Kaldor
        </h2>
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-2xl mx-auto">
          We deliver premium results at a fraction of the cost and time. No bloated teams, 
          no endless timelines — just clean code, shipped fast.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Typical Agency Card */}
        <AnimatedSection delay={0.1}>
          <div className="p-8 md:p-10 rounded-2xl bg-bg-surface border border-border-subtle h-full">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Circle className="w-4 h-4 text-white/40" />
              </div>
              <h3 className="text-lg font-bold text-white/90 tracking-wide">Typical Agency</h3>
            </div>

            <div className="flex flex-col gap-8">
              {badTraits.map((trait, i) => (
                <div key={i} className="flex items-start gap-4">
                  <X className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white/80 font-semibold text-sm mb-1">{trait.title}</h4>
                    <p className="text-white/40 text-[13px] leading-relaxed">{trait.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* The Kaldor Way Card */}
        <AnimatedSection delay={0.2}>
          <div className="relative p-8 md:p-10 rounded-2xl bg-bg-surface-2 border border-accent-base/20 h-full overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-accent-base/5" />
            
            {/* Sparkle icon at top right */}
            <Sparkles className="absolute top-8 right-8 w-6 h-6 text-accent-base/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-accent-base/10 border border-accent-base/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent-base" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">The Kaldor Way</h3>
              </div>

              <div className="flex flex-col gap-8">
                {goodTraits.map((trait, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-4 h-4 text-accent-base shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{trait.title}</h4>
                      <p className="text-white/60 text-[13px] leading-relaxed">{trait.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Progress Bars */}
      <AnimatedSection delay={0.4} className="max-w-full lg:px-6 mx-auto flex flex-col gap-8">
        <div>
          <div className="flex justify-between items-end mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">Cost Savings</span>
            <span className="text-[12px] text-accent-base font-medium">Up to 60% less than traditional agencies</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full bg-accent-base"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">Delivery Speed</span>
            <span className="text-[12px] text-accent-base font-medium">7-14 day average turnaround</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full bg-accent-base"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
