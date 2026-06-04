"use client";

import { motion } from "framer-motion";
import GlareHover from "@/components/ui/GlareHover";

const stats = [
  {
    value: "10+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "7 Days",
    label: "Average Delivery",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative bg-bg-base border-t border-border-subtle/30 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-accent-base font-bold tracking-[0.2em] text-xs uppercase mb-4">
              About Us
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold font-body text-white tracking-tight mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-text-secondary text-[15px] leading-relaxed">
              <p>
                Kaldor is a boutique web development agency specialising in high-performance digital products. We combine senior engineering expertise with AI-powered workflows to deliver results that traditional agencies simply cannot match.
              </p>
              <p>
                Based globally, serving clients worldwide.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <GlareHover
                key={stat.label}
                width="100%"
                height="100%"
                background="#111111"
                borderColor="rgba(255, 255, 255, 0.1)"
                borderRadius="1rem"
                glareColor="rgba(255, 255, 255, 0.1)"
                className="p-8 flex flex-col justify-center min-h-[160px]"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.label}
                </div>
              </GlareHover>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
