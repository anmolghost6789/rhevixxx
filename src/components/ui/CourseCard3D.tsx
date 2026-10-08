"use client";

import React, { useRef, useState } from "react";
import { Course } from "@/data/platformData";
import { Clock, BookOpen, ArrowRight, Sparkles } from "lucide-react";

interface CourseCard3DProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard3D: React.FC<CourseCard3DProps> = ({ course, onSelect }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Gentle 3D perspective tilt
    const rotX = ((y - centerY) / centerY) * -4.5;
    const rotY = ((x - centerX) / centerX) * 4.5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Skill level segment count
  const segmentsCount = course.level === "Advanced" ? 4 : course.level === "Intermediate" ? 3 : 2;

  return (
    <div className="relative select-none" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onClick={() => onSelect(course)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`group relative rounded-2xl overflow-hidden bg-white transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between h-full border ${
          isHovered
            ? "border-[rgba(49,85,255,0.32)] shadow-[0_20px_42px_-10px_rgba(49,85,255,0.12),0_4px_16px_rgba(15,23,42,0.03)]"
            : "border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.02)]"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) translateY(-5px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
          transition: isHovered ? "transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" : "all 0.5s ease",
        }}
      >
        {/* Holographic Edge Sheen */}
        <div
          className={`absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300 z-20 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(49,85,255,0.25) 0%, rgba(6,182,212,0.18) 50%, rgba(79,70,229,0.15) 100%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        <div>
          {/* Thumbnail with Independent Depth & Parallax */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.06)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Level Badge - Floating with Independent Depth */}
            <div
              className="absolute top-3 left-3 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateZ(18px)" : "translateZ(0px)",
              }}
            >
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-black/60 text-white backdrop-blur-md border border-white/20">
                {course.level}
              </span>
            </div>

            {/* Duration on image */}
            <div
              className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
              }}
            >
              <Clock className="w-3.5 h-3.5 text-blue-200" />
              <span>{course.duration}</span>
            </div>

            {/* Subtle Module ID watermark */}
            <div className="absolute top-3 right-3 text-[10px] font-mono text-white/50 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
              MOD-0{course.id.split("-")[1] || "1"}
            </div>
          </div>

          {/* Body Content with 3D Stacking */}
          <div className="p-6 space-y-3.5" style={{ transformStyle: "preserve-3d" }}>
            <h3
              className="text-base sm:text-lg font-[750] text-[#101216] tracking-tight leading-snug group-hover:text-[#3155FF] transition-colors"
              style={{
                transform: isHovered ? "translateZ(16px)" : "translateZ(0px)",
              }}
            >
              {course.title}
            </h3>

            <p
              className="text-xs text-[#4B5563] leading-relaxed line-clamp-2 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
              }}
            >
              {course.description}
            </p>

            {/* Animated Skill / Calibration Progress Indicators */}
            <div
              className="pt-1 space-y-1.5 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
              }}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#6B7280]">
                <span>Rigor Calibration</span>
                <span className="text-[#3155FF] font-semibold">{course.level}</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 h-1.5">
                {[1, 2, 3, 4].map((seg) => {
                  const isActive = seg <= segmentsCount;
                  return (
                    <div
                      key={seg}
                      className={`h-full rounded-full transition-all duration-500 ${
                        isActive
                          ? isHovered
                            ? "bg-[#3155FF] shadow-[0_0_8px_rgba(49,85,255,0.4)]"
                            : "bg-[#3155FF]/70"
                          : "bg-[#EEF1F4]"
                      }`}
                      style={{
                        transitionDelay: `${seg * 40}ms`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Instructor Info */}
            <div
              className="pt-2 flex items-center gap-2.5 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateZ(12px)" : "translateZ(0px)",
              }}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-[rgba(15,23,42,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.expertPhoto}
                  alt={course.expertName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-[#101216]">{course.expertName}</div>
                <div className="text-[11px] text-[#6B7280]">{course.expertRole}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Action footer with smooth reveal */}
        <div
          className="px-6 py-4 bg-[#F6F7F9] border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs transition-transform duration-300"
          style={{
            transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
          }}
        >
          <span className="text-[#6B7280] font-mono text-[11px] flex items-center gap-1">
            <BookOpen className="w-3 h-3 text-[#9CA3AF]" />
            {course.lessonsCount} lessons
          </span>

          <span
            className={`font-semibold flex items-center gap-1 transition-all duration-300 ${
              isHovered
                ? "text-[#3155FF] translate-x-0"
                : "text-[#6B7280] translate-x-1"
            }`}
          >
            <span>Course syllabus</span>
            <ArrowRight
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isHovered ? "translate-x-1 text-[#3155FF]" : "text-[#9CA3AF]"
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
