"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects are delivered within 7–14 days from the time we align on scope and design direction. Larger builds with custom features may take 3–4 weeks. We always give you a clear timeline upfront before any work begins."
  },
  {
    question: "How does your pricing work?",
    answer: "We work on fixed project quotes — no hourly billing, no surprise invoices. Once we agree on scope, the price is locked. You'll always know exactly what you're paying before we start."
  },
  {
    question: "What technologies do you build with?",
    answer: "We use modern, production-grade tools: Next.js, React, TypeScript, Tailwind CSS, and Supabase. Every project is built to scale, perform, and be easy for your team to maintain after handoff."
  },
  {
    question: "How many revisions are included?",
    answer: "We include two rounds of revisions in every project. This covers design adjustments, copy tweaks, and layout changes. Additional revision rounds can be added for a small flat fee."
  },
  {
    question: "Who will I be communicating with?",
    answer: "You'll be communicating directly with the senior engineers and designers working on your project. We eliminate middlemen to ensure clear, fast, and accurate communication throughout the build."
  },
  {
    question: "What happens after the project is delivered?",
    answer: "We provide a 30-day bug-fix warranty on all our work. After that, we offer optional ongoing maintenance and support packages if you'd like us to continue managing and scaling your application."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We've built for SaaS startups, e-commerce brands, Web3 platforms, and enterprise teams. If you need a high-performance web product that looks premium and works flawlessly, we're a good fit."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-bg-base relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-base font-bold text-sm tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-body text-white mb-6 tracking-tight">
            Questions We Get Asked
          </h2>
          <p className="text-text-secondary text-lg">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="flex flex-col border-t border-border-subtle/50">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border-subtle/50">
              <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 rounded-full border border-accent-base/30 bg-accent-base/10 flex items-center justify-center text-accent-base font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-lg md:text-xl font-bold text-white group-hover:text-accent-base transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14 text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
