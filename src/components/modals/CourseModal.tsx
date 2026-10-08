"use client";

import React, { useState } from "react";
import { Course } from "@/data/platformData";
import { X, Clock, BookOpen, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleEnroll = () => {
    setEnrolled(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#3155FF", "#4F46E5", "#10B981"],
      });
    } catch {}
  };

  const handleClose = () => {
    setEnrolled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#101216]/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Course Header Banner */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase">
              {course.level}
            </span>
            <h3 className="text-lg sm:text-xl font-[700] text-white mt-1 leading-snug">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5 text-xs text-[#4B5563]">
          {/* Instructor Block */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.06)]">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[rgba(15,23,42,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={course.expertPhoto}
                alt={course.expertName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="font-[650] text-[#101216]">{course.expertName}</div>
              <div className="text-[11px] text-[#6B7280]">{course.expertRole}</div>
            </div>
          </div>

          {/* Description */}
          <p className="leading-relaxed text-[#4B5563] text-sm">
            {course.description}
          </p>

          {/* Details strip */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.06)] text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3155FF]" />
              <span className="text-[#17191D] font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#3155FF]" />
              <span className="text-[#17191D] font-medium">{course.lessonsCount} Interactive Lessons</span>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2">
            {enrolled ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Enrolled successfully! Course materials unlocked.
              </div>
            ) : (
              <button
                onClick={handleEnroll}
                className="w-full py-3 px-4 bg-[#101216] hover:bg-[#3155FF] text-white font-[550] text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Enroll in Masterclass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
