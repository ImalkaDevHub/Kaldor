"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTag from "@/components/ui/SectionTag";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <AnimatedSection className="max-w-3xl mb-16">
        <SectionTag>Selected Work</SectionTag>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-body tracking-tight text-white">
          Projects That Speak for<br />Themselves
        </h2>
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-xl">
          Crafting high-performance digital experiences for the next generation of startups 
          and enterprises.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.slice(0, 3).map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <Link href={project.link} className="group cursor-pointer flex flex-col h-full" suppressHydrationWarning>
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-bg-surface-2 border border-border-subtle overflow-hidden mb-6 relative">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // Placeholder when no image is provided
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-500 bg-bg-surface">
                    <span className="text-sm font-medium">Image Placeholder</span>
                    <span className="text-xs mt-2 opacity-50">800 x 600</span>
                  </div>
                )}
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-base transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent-base border border-accent-base/30 bg-accent-base/5 rounded uppercase">
                    {project.category}
                  </span>
                </div>
                <p className="text-text-secondary text-[13px] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="flex justify-center">
        <Link href="/work" className="flex items-center gap-2 text-[13px] font-bold text-white/70 hover:text-white transition-colors group">
          View All Projects 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedSection>
    </section>
  );
}
