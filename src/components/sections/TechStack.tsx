"use client";

import { motion } from "framer-motion";
import { 
  SiVuedotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiSupabase,
  SiMysql,
  SiGnubash,
  SiAstro
} from "react-icons/si";

const techStack = [
  { name: "Vue", icon: SiVuedotjs, color: "#41B883" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwindcss", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
  { name: "Astro", icon: SiAstro, color: "#FF5D01" },
];

export default function TechStack() {
  return (
    <section className="py-8 border-y border-border-subtle/30 bg-bg-base overflow-hidden">
      <div 
        className="relative w-full overflow-hidden flex flex-row items-center"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <motion.div
          className="flex flex-row items-center gap-20 py-2 min-w-max w-max"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity
          }}
        >
          {/* Duplicate the array twice for seamless looping */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors duration-300"
            >
              <tech.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: tech.color }} />
              <span className="text-base md:text-lg font-bold font-body">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
