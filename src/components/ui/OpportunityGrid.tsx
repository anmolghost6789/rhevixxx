"use client";

import React, { useState } from "react";
import { OPPORTUNITIES, Opportunity } from "@/data/platformData";
import { Search, Sparkles, ArrowRight, MapPin, Building, Flame } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface OpportunityGridProps {
  onSelectOpportunity: (opportunity: Opportunity) => void;
  selectedCategoryFilter?: string;
}

export const OpportunityGrid: React.FC<OpportunityGridProps> = ({
  onSelectOpportunity,
}) => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI", "Engineering", "Data", "Research", "Design", "Science"];

  const filtered = OPPORTUNITIES.filter((item) => {
    const matchesTab = activeTab === "All" || item.category === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <section id="opportunities" className="relative py-28 sm:py-36 bg-[#F6F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)] text-[#3155FF] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Frontier Marketplace
              </div>
              <h2 className="text-3xl sm:text-5xl font-[700] text-[#101216] tracking-tight">
                Frontier contracts and lab opportunities.
              </h2>
              <p className="mt-3 text-[#4B5563] text-sm sm:text-base">
                Direct engagements with autonomous billing, zero employer lock-in, and guaranteed weekly wire or crypto settlement.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Filter by skill, model, or lab..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[rgba(15,23,42,0.12)] text-xs sm:text-sm text-[#17191D] focus:outline-none focus:ring-2 focus:ring-[#3155FF]/20 focus:border-[#3155FF] shadow-xs"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[rgba(15,23,42,0.08)] scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-[550] transition-all whitespace-nowrap ${
                  activeTab === cat
                    ? "bg-[#101216] text-white shadow-xs"
                    : "bg-white text-[#4B5563] hover:text-[#101216] hover:bg-[#EEF1F4] border border-[rgba(15,23,42,0.08)]"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-[#6B7280] pl-4 hidden sm:inline">
              Showing {filtered.length} frontier seats
            </span>
          </div>
        </ScrollReveal>

        {/* Opportunity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((opp, idx) => (
            <ScrollReveal key={opp.id} delay={idx * 0.05}>
              <div
                onClick={() => onSelectOpportunity(opp)}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)] hover:border-[rgba(49,85,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Top Strip: Rate & Client Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-3xl font-[750] font-mono text-[#101216] group-hover:text-[#3155FF] transition-colors">
                        {opp.compensation}
                        <span className="text-xs font-medium text-[#6B7280] ml-1 font-mono">
                          {opp.rateType}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#4B5563] font-medium mt-0.5">
                        <Building className="w-3 h-3 text-[#9CA3AF]" />
                        <span>{opp.clientName}</span>
                        <span>·</span>
                        <span className="font-mono text-[#6B7280]">{opp.clientType}</span>
                      </div>
                    </div>

                    {opp.isUrgent ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                        <Flame className="w-3 h-3 text-amber-600" /> Urgent
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#EEF1F4] text-[#3155FF] border border-[rgba(15,23,42,0.08)] shrink-0">
                        {opp.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-[700] text-[#101216] tracking-tight leading-snug group-hover:text-[#3155FF] transition-colors">
                    {opp.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-2">
                    {opp.summary}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {opp.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#F6F7F9] text-[#4B5563] border border-[rgba(15,23,42,0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {opp.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#6B7280]">
                        +{opp.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom Action */}
                <div className="pt-6 mt-6 border-t border-[rgba(15,23,42,0.06)] flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[#6B7280] font-medium">
                    <MapPin className="w-3 h-3 text-[#9CA3AF]" /> {opp.location}
                  </span>

                  <span className="inline-flex items-center gap-1 font-bold text-[#3155FF] group-hover:text-[#2344E0] group-hover:translate-x-0.5 transition-all">
                    <span>VIEW OPPORTUNITY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] space-y-3">
            <p className="text-[#4B5563] text-sm">
              No open frontier contracts found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveTab("All");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-[#3155FF] hover:underline"
            >
              Reset filters & search query
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
