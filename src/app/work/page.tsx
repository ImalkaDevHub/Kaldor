"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import { projects } from "@/lib/data/projects";

const categories = ["All Projects", "SaaS", "Custom Web", "AI Integration", "E-Commerce", "Web3"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory.toUpperCase());

  // Function to determine badge styling based on category
  const getBadgeColor = (category: string) => {
    // Using the site's global purple accent theme for all badges to maintain brand consistency
    return "text-accent-base bg-accent-base/10 border-accent-base/20";
  };

  return (
    <div className="pt-32 pb-12">
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-accent-base font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Our Projects
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-body text-white tracking-tight mb-6">
            Our Work in Action
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Crafting high-performance digital experiences for the next generation of startups and enterprises.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mt-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/70 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 min-h-[50vh]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={project.link} className="group flex flex-col cursor-pointer h-full">
                  {/* Project Info Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold font-body text-white group-hover:text-accent-base transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 text-[10px] font-bold tracking-wider rounded-full border uppercase ${getBadgeColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-text-secondary text-[15px] leading-relaxed pr-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="w-full aspect-[16/10] rounded-2xl bg-bg-surface-2 border border-border-subtle overflow-hidden relative">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20">
                        No Image
                      </div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
