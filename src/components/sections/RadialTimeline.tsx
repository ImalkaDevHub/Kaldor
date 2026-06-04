"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export default function RadialTimelineSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-base border-t border-border-subtle/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold font-body text-white tracking-tight mb-6">
            Ecosystem Overview
          </h2>
          <p className="text-text-secondary text-[15px] max-w-2xl mx-auto">
            Explore our project lifecycle and interconnected system architecture in a complete 360-degree view.
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
