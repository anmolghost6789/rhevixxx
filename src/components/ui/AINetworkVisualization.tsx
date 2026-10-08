"use client";

import React, { useState } from "react";
import { Brain, ArrowRight, ShieldCheck } from "lucide-react";

interface NodeBranch {
  id: string;
  role: string;
  subdomain: string;
  skill: string;
  compensation: string;
  project: string;
  status: string;
}

const BRANCHES: NodeBranch[] = [
  {
    id: "branch-ai",
    role: "AI ENGINEERING",
    subdomain: "ALIGNMENT & EVAL",
    skill: "PYTHON / TRANSFORMERS",
    compensation: "$250 / TASK",
    project: "Reasoning CoT Eval",
    status: "Active Match",
  },
  {
    id: "branch-data",
    role: "DATA SCIENCE",
    subdomain: "SYNTHETIC PIPELINES",
    skill: "POLARS / DIVERSITY",
    compensation: "$180 / TASK",
    project: "Token Diversity Audit",
    status: "Active Match",
  },
  {
    id: "branch-research",
    role: "RESEARCH",
    subdomain: "FORMAL PROOFS",
    skill: "LEAN 4 / LOGIC",
    compensation: "$340 / HR",
    project: "Olympiad Benchmark",
    status: "Pre-Funded Lab",
  },
  {
    id: "branch-llm",
    role: "LLM REASONING",
    subdomain: "POST-TRAINING",
    skill: "RLHF / DPO CURATION",
    compensation: "$290 / HR",
    project: "Frontier Alignment",
    status: "Immediate Pod",
  },
  {
    id: "branch-software",
    role: "SOFTWARE",
    subdomain: "GPU ORCHESTRATION",
    skill: "CUDA / SLURM INFRA",
    compensation: "$275 / HR",
    project: "100k Cluster Tuning",
    status: "Immediate Seat",
  },
  {
    id: "branch-robotics",
    role: "ROBOTICS",
    subdomain: "EMBODIED PERCEPTION",
    skill: "3D GAUSSIAN / ROS2",
    compensation: "$260 / HR",
    project: "Spatial Teleoperation",
    status: "Lab Priority",
  },
];

export const AINetworkVisualization: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<string>("branch-ai");

  return (
    <div className="relative w-full max-w-4xl mx-auto my-3 p-4 sm:p-7 rounded-2xl bg-white/85 backdrop-blur-md border border-[rgba(15,23,42,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] select-none overflow-hidden">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[rgba(15,23,42,0.06)] text-xs text-[#6B7280]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono font-medium text-[#17191D]">RHEVIX Intelligence Network</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="hidden sm:inline text-[#6B7280]">Latency: 14ms</span>
          <span className="text-[#3155FF] font-semibold bg-[#EEF1F4] px-2 py-0.5 rounded-full border border-[rgba(15,23,42,0.08)]">
            2,480 Active Threads
          </span>
        </div>
      </div>

      {/* Network Architecture Grid */}
      <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
        {/* Left Column: Central RHEVIX Core Node */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3.5">
          {/* Central RHEVIX Node: Subtle breathing instead of spinning */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-[#101216] text-white flex flex-col items-center justify-center p-3 shadow-md animate-core-breathe border border-[rgba(255,255,255,0.12)]">
              <Brain className="w-7 h-7 text-[#3155FF] mb-1" />
              <span className="text-[11px] font-mono tracking-wider font-bold text-white">
                RHEVIX
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-[#101216] tracking-tight">
              Frontier Match Engine
            </h4>
            <p className="text-xs text-[#4B5563] mt-1 max-w-xs leading-relaxed">
              Autonomous calibration mapping frontier verified talent directly to funded AI contracts.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF1F4]/70 border border-[rgba(15,23,42,0.07)] text-[11px] space-y-1.5 w-full">
            <div className="flex justify-between text-[#4B5563]">
              <span>Calibration Standard:</span>
              <span className="font-mono font-semibold text-[#101216]">Frontier V4.2</span>
            </div>
            <div className="flex justify-between text-[#4B5563]">
              <span>Escrow Routing:</span>
              <span className="font-mono font-semibold text-emerald-600">Active</span>
            </div>
          </div>
        </div>

        {/* Right Column: Connected Nodes */}
        <div className="lg:col-span-8 space-y-2.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B7280] px-1 flex justify-between">
            <span>Connected AI Domains</span>
            <span>Select to inspect thread</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {BRANCHES.map((b) => {
              const isSelected = activeBranch === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() => setActiveBranch(b.id)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white border-[#3155FF] shadow-md ring-1 ring-[#3155FF]/20"
                      : "bg-white/80 hover:bg-white border-[rgba(15,23,42,0.08)] hover:border-[rgba(15,23,42,0.16)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-[#101216]">
                      {b.role}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#3155FF]">
                      {b.compensation}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[11px] text-[#4B5563]">
                    <span className="truncate">{b.subdomain}</span>
                    <span className="font-mono text-[10px] text-emerald-600 font-semibold shrink-0">
                      {b.status}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-2 pt-2 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-[10px] font-mono text-[#6B7280]">
                      <span>{b.skill}</span>
                      <span className="text-[#3155FF] font-semibold">View specs →</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom assurance footer */}
      <div className="pt-3 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-[11px] text-[#6B7280]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#3155FF]" /> Non-Custodial Smart Escrow
        </span>
        <span className="font-mono text-[#4B5563]">Autonomous Settlement Engine</span>
      </div>
    </div>
  );
};
