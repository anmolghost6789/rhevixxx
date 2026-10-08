"use client";

import React, { useState } from "react";
import { EXPERT_STORIES, ExpertStory } from "@/data/platformData";
import { Play, ChevronLeft, ChevronRight, Sparkles, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertCarouselProps {
  onPlayStory: (story: ExpertStory) => void;
}

export const ExpertCarousel: React.FC<ExpertCarouselProps> = ({ onPlayStory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXPERT_STORIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === EXPERT_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#F6F7F9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Controls */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Frontier Dispatches
              </div>
              <h2 className="text-3xl sm:text-5xl font-[700] text-[#101216] tracking-tight">
                Stories from the research frontier.
              </h2>
              <p className="mt-3 text-[#4B5563] text-sm sm:text-base">
                Listen to firsthand accounts from independent researchers, systems engineers, and specialists delivering high-impact work.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] shadow-xs hover:border-[#3155FF] hover:text-[#3155FF] flex items-center justify-center text-[#17191D] transition-all active:scale-95"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-white border border-[rgba(15,23,42,0.1)] shadow-xs hover:border-[#3155FF] hover:text-[#3155FF] flex items-center justify-center text-[#17191D] transition-all active:scale-95"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Card Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERT_STORIES.map((story, idx) => {
            const isFeatured = idx === currentIndex;
            return (
              <ScrollReveal key={story.id} delay={idx * 0.06}>
                <div
                  className={`group relative rounded-2xl p-6 bg-white border transition-all duration-300 flex flex-col justify-between h-full ${
                    isFeatured
                      ? "border-[#3155FF] shadow-[0_16px_32px_-8px_rgba(49,85,255,0.12)] -translate-y-1"
                      : "border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[rgba(15,23,42,0.16)] hover:-translate-y-0.5"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Portrait with Play Overlay */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Subtle Play Trigger */}
                      <button
                        onClick={() => onPlayStory(story)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#101216] text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-103"
                        title="Play dispatch audio"
                      >
                        <Play className="w-3.5 h-3.5 fill-[#3155FF] text-[#3155FF]" />
                        <span>{story.duration}</span>
                      </button>

                      <div className="absolute bottom-3 left-3 text-[11px] font-mono font-medium text-white/90">
                        {story.rate}
                      </div>
                    </div>

                    {/* Profile info */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-[700] text-[#101216] group-hover:text-[#3155FF] transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-xs font-medium text-[#4B5563] line-clamp-1">
                        {story.profession}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280] font-mono">
                        <GraduationCap className="w-3.5 h-3.5 text-[#6B7280] shrink-0" />
                        <span className="truncate">{story.education}</span>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs text-[#4B5563] leading-relaxed italic border-l-2 border-[#3155FF]/40 pl-3">
                      &ldquo;{story.testimonial}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-4 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#6B7280] tracking-wider">
                      {story.specialty}
                    </span>
                    <button
                      onClick={() => onPlayStory(story)}
                      className="text-xs font-semibold text-[#3155FF] hover:text-[#2344E0]"
                    >
                      Listen →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-9">
          {EXPERT_STORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#3155FF]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
