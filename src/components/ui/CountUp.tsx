"use client";

import { useEffect, useState, useRef } from "react";

export default function CountUp({ 
  end, 
  suffix = "", 
  duration = 2000 
}: { 
  end: number, 
  suffix?: string, 
  duration?: number 
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use a much smoother easeOutQuad so it actually counts 1, 2, 3 sequentially
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 2);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure it stops exactly at the end value
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
