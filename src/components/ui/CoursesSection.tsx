"use client";

import React, { useState, useEffect } from "react";
import { COURSES, Course } from "@/data/platformData";
import { ArrowRight, Code, Cpu, Layers, Database, Cloud, Cog, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { CourseCard3D } from "./CourseCard3D";

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onViewAllCourses: () => void;
}

// Subtle floating objects related to learning: code, AI, design, data, cloud, robotics
const FLOATING_OBJECTS = [
  {
    id: "obj-code",
    label: "</> Code Primitives",
    icon: Code,
    top: "6%",
    left: "4%",
    speed: 0.04,
    rotation: -6,
  },
  {
    id: "obj-ai",
    label: "∇θ Frontier AI",
    icon: Cpu,
    top: "14%",
    right: "3%",
    speed: 0.05,
    rotation: 8,
  },
  {
    id: "obj-design",
    label: "◬ Spatial UX",
    icon: Layers,
    top: "52%",
    left: "2%",
    speed: 0.035,
    rotation: -4,
  },
  {
    id: "obj-data",
    label: "⌗ Tensor Stream",
    icon: Database,
    top: "70%",
    right: "4%",
    speed: 0.045,
    rotation: 6,
  },
  {
    id: "obj-cloud",
    label: "☁ GPU Cluster",
    icon: Cloud,
    bottom: "6%",
    left: "8%",
    speed: 0.03,
    rotation: -8,
  },
  {
    id: "obj-robotics",
    label: "⚙ Embodied Robotics",
    icon: Cog,
    bottom: "10%",
    right: "6%",
    speed: 0.04,
    rotation: 10,
  },
];

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onViewAllCourses,
}) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouseOffset({
        x: ((e.clientX - cx) / cx) * 5,
        y: ((e.clientY - cy) / cy) * 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="courses"
      className="relative py-28 sm:py-36 bg-[#F6F7F9]/80 backdrop-blur-[2px] border-t border-[rgba(15,23,42,0.06)] overflow-hidden"
    >
      {/* IMMERSIVE AR/VR LEARNING VISUAL ENVIRONMENT IN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Ambient Lighting */}
        <div
          className="absolute top-1/3 right-1/4 w-[750px] h-[750px] rounded-full blur-[170px] opacity-[0.03] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3155FF 0%, transparent 70%)",
          }}
        />

        {/* Floating Learning Objects (Code, AI, Design, Data, Cloud, Robotics) */}
        {FLOATING_OBJECTS.map((obj, idx) => {
          const Icon = obj.icon;
          const parallaxX = mouseOffset.x * (idx % 2 === 0 ? 0.7 : -0.7);
          const parallaxY = mouseOffset.y * (idx % 2 === 0 ? 0.7 : -0.7);

          return (
            <div
              key={obj.id}
              className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(15,23,42,0.06)] shadow-xs text-[11px] font-mono text-[#4B5563] transition-transform duration-700 ease-out will-change-transform"
              style={{
                top: obj.top,
                bottom: obj.bottom,
                left: obj.left,
                right: obj.right,
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) rotate(${obj.rotation}deg)`,
              }}
            >
              <Icon className="w-3.5 h-3.5 text-[#3155FF]" />
              <span>{obj.label}</span>
            </div>
          );
        })}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(15,23,42,0.08)] shadow-2xs mb-3 text-xs font-mono font-medium text-[#3155FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
                <span>Interactive Learning Environment</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-[750] text-[#101216] tracking-tight">
                Learn something that moves you forward.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#4B5563] max-w-xl">
                Rigorous, project-based courses designed to take you from foundational understanding to production deployment.
              </p>
            </div>

            <button
              onClick={onViewAllCourses}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3155FF] hover:text-[#2344E0] transition-colors self-start sm:self-auto group"
            >
              <span>View all courses</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* 6 Featured Course Floating Learning Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {COURSES.map((course, idx) => (
            <ScrollReveal key={course.id} delay={idx * 0.05}>
              <CourseCard3D
                course={course}
                onSelect={onSelectCourse}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewAllCourses}
            className="inline-flex items-center gap-2 py-3.5 px-7 rounded-xl bg-white hover:bg-[#EEF1F4] border border-[rgba(15,23,42,0.12)] text-xs font-[600] text-[#17191D] transition-all hover:-translate-y-0.5 shadow-xs"
          >
            <span>View all courses</span>
            <ArrowRight className="w-4 h-4 text-[#3155FF]" />
          </button>
        </div>
      </div>
    </section>
  );
};
