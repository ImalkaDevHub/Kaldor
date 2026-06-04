"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "STARTER",
    price: "From Rs.40,000",
    description: "Perfect for MVPs and landing pages",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO",
      "1 revision round",
      "7-day delivery",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "From Rs.80,000",
    description: "For growing businesses that need more",
    features: [
      "Up to 15 pages",
      "Custom animations",
      "Advanced SEO",
      "CMS integration",
      "3 revision rounds",
      "14-day delivery",
      "Priority support",
    ],
    buttonText: "Start Project",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    description: "For large-scale platforms and apps",
    features: [
      "Unlimited pages",
      "Full-stack development",
      "AI integration",
      "DevOps & CI/CD",
      "Dedicated team",
      "Ongoing support",
    ],
    buttonText: "Contact Us",
    isPopular: false,
  },
];

interface Particle {
  id: number;
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
}

export default function Pricing() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="pricing" className="py-24 relative bg-bg-base border-t border-border-subtle/30 overflow-hidden">
      {/* Massive Glowing Top Background */}
      <motion.div 
        animate={{ opacity: [0.6, 0.9, 0.6] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-[-10%] inset-x-0 h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_80%)] pointer-events-none" 
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-body text-white tracking-tight mb-4">
            Transparent Pricing
          </h2>
          <p className="text-text-secondary text-[15px] max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose a plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl flex flex-col h-full bg-[#111111] border ${
                plan.isPopular
                  ? "border-accent-base shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : "border-white/10 hover:border-white/20"
              } transition-colors duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-base text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-[11px] font-bold tracking-wider text-text-secondary uppercase mb-4">
                  {plan.name}
                </h3>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  {plan.price}
                </div>
                <p className="text-text-secondary text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="w-full h-px bg-white/10 mb-8" />

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-[14px]">
                    <Check
                      className={`w-4 h-4 mr-3 shrink-0 ${
                        plan.isPopular ? "text-accent-base" : "text-text-secondary"
                      }`}
                      strokeWidth={3}
                    />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#cta"
                className={`w-full py-3.5 px-6 rounded-full font-bold text-sm text-center transition-all duration-300 block ${
                  plan.isPopular
                    ? "bg-accent-base text-white hover:bg-accent-hover shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-transparent text-white border border-white/20 hover:bg-white/5"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
