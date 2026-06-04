"use client";

import { motion } from "framer-motion";

const skills = [
  "UI/UX Design",
  "Front-End Development",
  "Back-End Development",
  "AI/ML Development",
  "Mobile Apps",
  "Custom Applications",
];

export default function Expertise() {
  return (
    <section className="py-24 relative bg-bg-base border-t border-border-subtle/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold font-body tracking-tight text-white mb-6">
          Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-base to-purple-400">Website & Mobile App</span> Development
        </h2>
        
        {/* Subtitle */}
        <p className="text-text-secondary text-[15px] max-w-2xl mx-auto mb-20 leading-relaxed">
          We specialize in UI/UX design, front-end and back-end development, and cutting-edge AI/ML solutions
        </p>

        {/* Scrolling List Container with Fade Mask */}
        <div 
          className="relative h-[400px] overflow-hidden flex flex-col items-center justify-center select-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)"
          }}
        >
          {/* Animated Track */}
          <motion.div
            className="flex flex-col items-center gap-6 py-4"
            animate={{
              y: ["0%", "-50%"]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {/* Duplicated list for seamless infinite scrolling */}
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="text-2xl md:text-4xl font-bold font-body text-white hover:text-accent-base transition-colors duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
