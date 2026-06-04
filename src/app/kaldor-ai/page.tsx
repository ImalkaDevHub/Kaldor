"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SplineSceneBasic } from "@/components/sections/SplineDemo";

export default function KaldorAIPage() {
  return (
    <div className="pt-32 pb-12">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-20">
        <Link href="/work" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-accent-base font-bold tracking-[0.2em] text-xs uppercase">Case Study</span>
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent-base border border-accent-base/30 bg-accent-base/5 rounded uppercase">SAAS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-body text-white tracking-tight mb-8">
            Kaldor AI
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
            An AI-powered SaaS platform delivering intelligent automation, predictive analytics, and smart workflow optimization for enterprise teams.
          </p>

          <div className="flex flex-wrap gap-8 py-8 border-y border-white/10">
            <div>
              <div className="text-[11px] text-text-secondary font-bold tracking-wider uppercase mb-2">Platform / App</div>
              <div className="text-white font-medium">SaaS Platform</div>
            </div>
            <div>
              <div className="text-[11px] text-text-secondary font-bold tracking-wider uppercase mb-2">Timeline</div>
              <div className="text-white font-medium">12 Weeks</div>
            </div>
            <div>
              <div className="text-[11px] text-text-secondary font-bold tracking-wider uppercase mb-2">Client Industry</div>
              <div className="text-white font-medium">Enterprise Tech</div>
            </div>
            <div>
              <div className="text-[11px] text-text-secondary font-bold tracking-wider uppercase mb-2">Live Site</div>
              <a href="https://ai.kaldor.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-accent-base font-medium hover:underline">
                ai.kaldor.dev <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-border-subtle relative group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/kaldor3.jpg" 
            alt="Kaldor AI Platform Dashboard"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[13px] font-bold text-accent-base tracking-[0.2em] uppercase mb-6">The Solution</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            We rebuilt the platform from the ground up using a microservices architecture — decoupling the data ingestion pipeline, ML inference layer, and visualization engine into independently scalable components.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            A real-time event streaming backbone (Kafka + WebSockets) replaced the old polling system, cutting latency from 4-6 seconds down to under 80ms. The frontend was rewritten as a React-based SPA with virtualized rendering, eliminating browser freeze under high data volumes.
          </p>

          <div className="flex flex-wrap gap-3">
            {["React", "Kafka", "WebSockets", "Microservices", "ML Pipeline", "Node.js"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-[13px] font-medium text-accent-base border border-accent-base/30 bg-accent-base/5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Spline Interactive 3D Demo */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <SplineSceneBasic />
      </section>

      {/* The Results */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-[13px] font-bold text-accent-base tracking-[0.2em] uppercase mb-6">The Results</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            The new platform went live in week 10 of a 12-week sprint. Within the first month of deployment, the client reported measurable improvements across all key performance indicators.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
              <div className="text-5xl font-medium tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-base to-white/80">98</span>
                <span className="text-white">ms</span>
              </div>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                Average data latency, down from 5.2s before the new platform launch.
              </p>
            </div>
            
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
              <div className="text-5xl font-medium tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-base to-white/80">3</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-base to-accent-base/70">x</span>
              </div>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                Overall throughput increase during peak traffic hours without server strain.
              </p>
            </div>

            <div className="p-8 flex flex-col">
              <div className="text-5xl font-medium tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent-base to-white/80">0</span>
              </div>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                Total browser freezes reported post-launch under heavy data volumes.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
