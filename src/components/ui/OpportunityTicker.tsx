"use client";

import React from "react";
import { TICKER_ITEMS, OPPORTUNITIES, Opportunity } from "@/data/platformData";
import { ArrowRight } from "lucide-react";

interface OpportunityTickerProps {
  onSelectOpportunity: (opp: Opportunity) => void;
}

export const OpportunityTicker: React.FC<OpportunityTickerProps> = ({
  onSelectOpportunity,
}) => {
  // Exactly 2 identical sets for clean 50% translation infinite loop
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  const handleClickItem = (itemTitle: string) => {
    const matched =
      OPPORTUNITIES.find((o) =>
        o.title.toLowerCase().includes(itemTitle.toLowerCase().split(" ")[0])
      ) || OPPORTUNITIES[0];
    onSelectOpportunity(matched);
  };

  return (
    <div className="w-full relative overflow-hidden py-3 bg-[#EEF1F4]/70 backdrop-blur-md border-y border-[rgba(15,23,42,0.07)] select-none z-20">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F6F7F9] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F6F7F9] to-transparent z-10 pointer-events-none" />

      {/* True CSS linear marquee track */}
      <div className="animate-ticker-marquee flex items-center gap-3 sm:gap-4">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClickItem(item.title)}
            className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:border-[rgba(49,85,255,0.4)] hover:shadow-md cursor-pointer transition-all duration-200 shrink-0"
          >
            {/* Compensation Pill */}
            <div className="flex flex-col items-start leading-none">
              <span className="text-[13px] font-bold font-mono text-[#101216] group-hover:text-[#3155FF] transition-colors">
                {item.compensation}
              </span>
              <span className="text-[9px] font-mono text-[#6B7280] font-medium">
                {item.type}
              </span>
            </div>

            <div className="w-px h-6 bg-[rgba(15,23,42,0.08)]" />

            {/* Title & Category */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#17191D] tracking-tight group-hover:text-[#3155FF] transition-colors whitespace-nowrap">
                {item.title}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280]">
                <span className="w-1 h-1 rounded-full bg-[#3155FF]" />
                <span className="font-mono text-[#4B5563]">{item.client}</span>
                <span>·</span>
                <span className="text-[#6B7280]">{item.category}</span>
              </div>
            </div>

            <ArrowRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#3155FF] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
