import React from "react";
import { cn } from "@/lib/utils";

export default function SectionTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("inline-block mb-4 relative", className)}>
      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent-base flex items-center">
        {children}
      </span>
      <div className="absolute -bottom-2 left-0 w-[150%] h-[1px] bg-gradient-to-r from-accent-base/50 to-transparent" />
    </div>
  );
}
