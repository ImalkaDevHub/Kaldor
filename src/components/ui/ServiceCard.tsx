"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

import { GlowCard } from "@/components/ui/spotlight-card";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

export default function ServiceCard({ icon, title, description, featured }: ServiceCardProps) {
  // @ts-ignore
  const IconComponent = Icons[icon] || Icons.Circle;

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <GlowCard 
        customSize 
        glowColor="purple" 
        className="group !p-8 h-full bg-bg-surface border-0 !rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-base/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-accent-base/5 border border-accent-base/20 flex items-center justify-center mb-6 text-accent-base group-hover:bg-accent-base group-hover:text-white transition-colors duration-300">
            <IconComponent size={20} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
      </GlowCard>
    </motion.div>
  );
}
