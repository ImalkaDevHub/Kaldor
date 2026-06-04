"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Mail, Shield, Zap, CheckCircle, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaGlobe, FaGithub } from "react-icons/fa";
import BorderGlow from "@/components/ui/BorderGlow";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Let's Build Something Great */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h3 className="text-accent-base font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Get In Touch
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-body text-white tracking-tight mb-6">
            <span className="whitespace-nowrap">Let's Build Something</span><br />Great
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            Ready to start your project? Reach out and we'll get back to<br />you within 24 hours.
          </p>

          <a 
            href="https://wa.me/94764241082"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#075E54]/20 border border-[#25D366]/30 hover:bg-[#075E54]/40 hover:border-[#25D366]/50 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-fit mb-12 group"
          >
            <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
            Chat on WhatsApp
            <ArrowUpRight className="w-4 h-4 text-[#25D366] opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="text-[10px] text-text-secondary tracking-[0.2em] font-bold uppercase mb-6">
            Or Reach Us At
          </div>
          
          <div className="flex items-center gap-4 text-white mb-5">
            <Mail className="w-5 h-5 text-accent-base" />
            <a href="mailto:kaldordesigns@gmail.com" className="text-[15px] font-medium hover:text-accent-base transition-colors">
              kaldordesigns@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-text-secondary mb-14">
            <Clock className="w-5 h-5 opacity-60" />
            <span className="text-[15px]">We typically respond within 2 hours</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-surface-2 text-text-secondary text-[13px] font-medium">
              <Shield className="w-4 h-4 text-accent-base" /> Free Consultation
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-surface-2 text-text-secondary text-[13px] font-medium">
              <Zap className="w-4 h-4 text-accent-base" /> Quick Response
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-surface-2 text-text-secondary text-[13px] font-medium">
              <CheckCircle className="w-4 h-4 text-accent-base" /> No Obligation
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Details & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Main Contact Card */}
          <div className="bg-bg-surface border border-border-subtle/50 rounded-[2rem] p-8 md:p-10">
            <h3 className="text-xl font-bold text-white mb-8">Contact Details</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-full bg-bg-surface-2 border border-border-subtle/50">
                  <Clock className="w-5 h-5 text-text-secondary" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1">Office Hours</div>
                  <div className="text-[14px] text-text-secondary">Mon – Fri, 9 AM – 6 PM (UTC+5:30)</div>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-full bg-bg-surface-2 border border-border-subtle/50">
                  <MapPin className="w-5 h-5 text-text-secondary" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1">Location</div>
                  <div className="text-[14px] text-text-secondary">Remote-first, Global Team</div>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-full bg-bg-surface-2 border border-border-subtle/50">
                  <Mail className="w-5 h-5 text-text-secondary" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-white mb-1">Email</div>
                  <div className="text-[14px] text-text-secondary">kaldordesigns@gmail.com</div>
                </div>
              </div>
            </div>

            <h4 className="text-[13px] font-bold text-text-secondary mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-3.5 rounded-xl bg-bg-surface-2 border border-border-subtle/50 text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3.5 rounded-xl bg-bg-surface-2 border border-border-subtle/50 text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3.5 rounded-xl bg-bg-surface-2 border border-border-subtle/50 text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <FaGlobe className="w-5 h-5" />
              </a>
              <a href="#" className="p-3.5 rounded-xl bg-bg-surface-2 border border-border-subtle/50 text-text-secondary hover:text-white hover:border-white/20 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Turnaround Card */}
          <BorderGlow
            backgroundColor="rgba(168, 85, 247, 0.05)"
            glowColor="268 100 76"
            borderRadius={32}
            className="w-full"
          >
            <div className="p-8 md:p-10">
              <div className="text-accent-base text-[11px] font-bold tracking-wider uppercase mb-3">
                Quick Turnaround
              </div>
              <h3 className="text-2xl font-bold font-body text-white mb-4">
                7-Day Average Delivery
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                We move fast without sacrificing quality. Most projects are scoped, designed, and delivered within a single sprint.
              </p>
            </div>
          </BorderGlow>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-bg-surface border border-border-subtle/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold text-white mb-1">10+</div>
              <div className="text-[11px] text-text-secondary">Projects</div>
            </div>
            <div className="bg-bg-surface border border-border-subtle/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-[11px] text-text-secondary">Satisfaction</div>
            </div>
            <div className="bg-bg-surface border border-border-subtle/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-[11px] text-text-secondary">Support</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
