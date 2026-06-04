"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, BookOpen, PenTool, Code, Rocket } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

import BorderGlow from "@/components/ui/BorderGlow";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "We learn about your business, goals, and requirements in a free 30-minute call. This is where we understand your vision and define the project scope.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Strategy & Planning",
      desc: "Our team creates a detailed project roadmap with milestones, tech stack decisions, and deliverables. You get full visibility into the plan.",
      icon: BookOpen,
    },
    {
      num: "03",
      title: "Design & Prototype",
      desc: "Interactive prototypes and design systems built with your feedback at every step. No static mockups — you interact with real designs.",
      icon: PenTool,
    },
    {
      num: "04",
      title: "Development",
      desc: "Clean, performant code with weekly demos so you see real progress. We ship in sprints with continuous integration and testing.",
      icon: Code,
    },
    {
      num: "05",
      title: "Launch & Support",
      desc: "Rigorous testing, deployment to production, and ongoing support. We monitor performance and iterate based on real user data.",
      icon: Rocket,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <SectionTag className="justify-center">How We Work</SectionTag>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-body tracking-tight text-white">
          Our Process
        </h2>
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl mx-auto">
          From concept to launch, here is how we bring your vision to life.
        </p>
      </motion.div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        <div className="flex flex-col">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;
            
            // Mathematical precise timing for a constant-speed drawing line
            const badgeDelay = index * 0.8;
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            
            const lineDuration = isFirst || isLast ? 0.4 : 0.8;
            const lineDelay = isFirst ? 0 : 0.4 + (index - 1) * 0.8;

            return (
              <div 
                key={step.num} 
                className={`relative flex flex-col md:flex-row md:items-center py-6 md:py-8 ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Upper Segment (only if index > 0) */}
                {index > 0 && (
                  <div className="absolute left-[28px] md:left-1/2 top-0 bottom-[calc(50%+48px)] w-[2px] bg-white/5 md:-translate-x-1/2 z-0 overflow-hidden">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={isInView ? { height: "100%" } : { height: "0%" }}
                      transition={{ duration: 0.3, delay: badgeDelay - 0.4, ease: "linear" }}
                      className="w-full bg-gradient-to-b from-accent-base to-transparent"
                    />
                  </div>
                )}

                {/* Lower Segment (only if index < last) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[28px] md:left-1/2 top-[calc(50%+24px)] bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 z-0 overflow-hidden">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={isInView ? { height: "100%" } : { height: "0%" }}
                      transition={{ duration: 0.3, delay: badgeDelay + 0.3, ease: "linear" }}
                      className="w-full bg-accent-base"
                    />
                  </div>
                )}

                {/* Center Node / Mobile Left Node */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[60px] z-10">
                  {/* Floating Icon */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: index === 0 ? 0 : badgeDelay - 0.2, duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 text-accent-base flex items-center justify-center"
                    style={{ top: 'calc(50% - 48px)' }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Circle Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: badgeDelay, duration: 0.4 }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ top: '50%' }}
                  >
                    <div className="w-12 h-12 rounded-full border border-accent-base/50 bg-bg-base flex items-center justify-center text-accent-base font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.1)] relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: badgeDelay + 0.1, duration: 0.5 }}
                        className="absolute inset-0 rounded-full border border-accent-base/40 animate-ping"
                      />
                      {step.num}
                    </div>
                  </motion.div>
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                    transition={{ delay: badgeDelay + 0.2, duration: 0.5 }}
                    className="h-full"
                  >
                    <BorderGlow
                      backgroundColor="#111111"
                      glowColor="280 100 60"
                      colors={['#a855f7', '#d8b4fe', '#c084fc']}
                      borderRadius={16}
                      className="h-full"
                    >
                      <div className="p-8 relative z-10">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent-base bg-accent-base/10 border border-accent-base/20 rounded uppercase mb-4">
                          Step {step.num}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary text-[14px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </BorderGlow>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
