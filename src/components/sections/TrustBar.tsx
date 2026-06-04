"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";

export default function TrustBar() {
  const stats = [
    { value: "7-Day", label: "Avg Delivery", isAnimated: false },
    { value: 90, suffix: "+", label: "PageSpeed Score", isAnimated: true, duration: 2000 },
    { value: "AI-Powered", label: "Workflow", isAnimated: false },
    { value: 10, suffix: "+", label: "Projects Delivered", isAnimated: true, duration: 1000 },
  ];

  return (
    <section className="py-8 border-y border-border-subtle bg-bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="text-center text-xs md:text-sm font-medium text-text-muted mb-6">
          Trusted by forward-thinking companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex items-baseline gap-2">
                <span className="text-base md:text-lg font-bold text-white">
                  {stat.isAnimated ? (
                    <CountUp end={stat.value as number} suffix={stat.suffix} duration={stat.duration} />
                  ) : (
                    stat.value
                  )}
                </span>
                <span className="text-sm text-text-secondary">{stat.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
