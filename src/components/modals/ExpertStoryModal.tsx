"use client";

import React, { useState, useEffect } from "react";
import { ExpertStory } from "@/data/platformData";
import { X, Play, Pause, Volume2, Sparkles, Award } from "lucide-react";

interface ExpertStoryModalProps {
  story: ExpertStory | null;
  onClose: () => void;
}

export const ExpertStoryModal: React.FC<ExpertStoryModalProps> = ({ story, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(24);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-[#101216]/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[rgba(15,23,42,0.1)] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-[rgba(15,23,42,0.06)] flex items-center justify-between bg-[#F6F7F9]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3155FF] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-[#4B5563] uppercase font-semibold">
              RHEVIX Frontier Voices · Audio Dispatch
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#101216] hover:bg-[#EEF1F4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.avatar}
              alt={story.name}
              className="w-20 h-20 rounded-xl object-cover border border-[rgba(15,23,42,0.1)] shadow-xs"
            />
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#EEF1F4] text-[#3155FF] border border-[rgba(15,23,42,0.08)]">
                <Award className="w-3 h-3" /> {story.specialty}
              </div>
              <h3 className="text-xl font-[700] text-[#101216]">{story.name}</h3>
              <p className="text-xs text-[#4B5563]">{story.education}</p>
              <p className="text-xs font-mono font-medium text-emerald-600">{story.rate} Compensation</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-5 rounded-xl bg-[#F6F7F9] border border-[rgba(15,23,42,0.08)] relative">
            <span className="absolute -top-3 left-4 px-2 py-0.5 rounded-md bg-white border border-[rgba(15,23,42,0.08)] text-[10px] font-mono uppercase text-[#6B7280]">
              Field Notes
            </span>
            <p className="text-sm italic leading-relaxed text-[#17191D] pt-1">
              &ldquo;{story.testimonial}&rdquo;
            </p>
          </div>

          {/* Audio Player Interface */}
          <div className="p-4 rounded-xl bg-[#101216] text-white space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
              <span className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-[#3155FF]" /> Stereo Dispatch
              </span>
              <span>{story.duration}</span>
            </div>

            {/* Simulated Animated Waveform */}
            <div className="flex items-center gap-1 h-8 px-1">
              {[40, 65, 30, 85, 95, 45, 60, 100, 75, 40, 55, 90, 70, 35, 80, 60, 45, 90, 75, 50, 65, 85, 40, 30, 70].map(
                (h, idx) => {
                  const isActive = (idx / 25) * 100 <= progress;
                  return (
                    <div
                      key={idx}
                      className="flex-1 rounded-full transition-all duration-150"
                      style={{
                        height: isPlaying ? `${Math.max(15, (h * (idx % 2 === 0 ? 1 : 0.7)))}%` : "20%",
                        backgroundColor: isActive ? "#3155FF" : "#334155",
                      }}
                    />
                  );
                }
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 py-1.5 px-4 rounded-lg bg-[#3155FF] hover:bg-[#2344E0] text-white text-xs font-[550] transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? "Pause Dispatch" : "Resume"}
              </button>

              <span className="text-[11px] font-mono text-[#9CA3AF]">
                Frontier Calibration Archive
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-[rgba(15,23,42,0.06)] bg-[#F6F7F9] flex items-center justify-between">
          <span className="text-xs text-[#6B7280] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#3155FF]" /> Verified RHEVIX Member Story
          </span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#17191D] hover:text-[#3155FF]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
