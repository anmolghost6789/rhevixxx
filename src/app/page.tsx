"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { AnimatedBackground } from "@/components/background/AnimatedBackground";
import { Navbar } from "@/components/ui/Navbar";
import { OpportunityTicker } from "@/components/ui/OpportunityTicker";
import { Hero } from "@/components/ui/Hero";
import { TrustMetrics } from "@/components/ui/TrustMetrics";
import { EditorialSection } from "@/components/ui/EditorialSection";
import { WhyJoin } from "@/components/ui/WhyJoin";
import { ExpertCarousel } from "@/components/ui/ExpertCarousel";
import { ExpertiseExplorer } from "@/components/ui/ExpertiseExplorer";
import { OpportunityGrid } from "@/components/ui/OpportunityGrid";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { CompanyCTA } from "@/components/ui/CompanyCTA";
import { Newsletter } from "@/components/ui/Newsletter";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { Footer } from "@/components/ui/Footer";

// Modals
import { TalentApplyModal } from "@/components/modals/TalentApplyModal";
import { EnterpriseHireModal } from "@/components/modals/EnterpriseHireModal";
import { OpportunityDetailModal } from "@/components/modals/OpportunityDetailModal";
import { ExpertStoryModal } from "@/components/modals/ExpertStoryModal";

import { Opportunity, ExpertStory } from "@/data/platformData";

export default function HomePage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [selectedStory, setSelectedStory] = useState<ExpertStory | null>(null);
  const [initialRoleForApply, setInitialRoleForApply] = useState<string | undefined>(undefined);
  const [forceReducedMotion, setForceReducedMotion] = useState(false);

  const handleOpenApply = (prefilledRole?: string) => {
    setInitialRoleForApply(prefilledRole);
    setIsApplyModalOpen(true);
  };

  const handleExploreOpportunities = () => {
    const el = document.getElementById("opportunities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategoryFromExplorer = (categoryTitle: string) => {
    const el = document.getElementById("opportunities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#F6F7F9] text-[#17191D] selection:bg-[#3155FF] selection:text-white">
        {/* Living AI Ambient Multi-Layer Background */}
        <AnimatedBackground forceReducedMotion={forceReducedMotion} />

        {/* Fixed Navigation Bar */}
        <Navbar
          onOpenApply={() => handleOpenApply()}
          onOpenHire={() => setIsHireModalOpen(true)}
          reducedMotion={forceReducedMotion}
          onToggleMotion={() => setForceReducedMotion((prev) => !prev)}
        />

        <main className="relative z-10 flex flex-col">
          {/* Editorial Grand Hero */}
          <Hero
            onOpenApply={() => handleOpenApply()}
            onExploreOpportunities={handleExploreOpportunities}
          />

          {/* Live Opportunity Ticker */}
          <OpportunityTicker
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
          />

          {/* Institutional Statistics & Scale */}
          <TrustMetrics />

          {/* Editorial Technology Magazine Section */}
          <EditorialSection onOpenApply={() => handleOpenApply()} />

          {/* Why RHEVIX / Value Propositions */}
          <WhyJoin onOpenApply={() => handleOpenApply()} />

          {/* Frontier Voices & Audio Dispatch Carousel */}
          <ExpertCarousel
            onPlayStory={(story) => setSelectedStory(story)}
          />

          {/* Interactive Expertise Taxonomies */}
          <ExpertiseExplorer
            onSelectCategoryFilter={handleSelectCategoryFromExplorer}
          />

          {/* Opportunity Marketplace */}
          <OpportunityGrid
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
          />

          {/* 4-Step Calibration & Workflow */}
          <HowItWorks onOpenApply={() => handleOpenApply()} />

          {/* Full-Width Enterprise Company CTA */}
          <CompanyCTA onOpenHire={() => setIsHireModalOpen(true)} />

          {/* Newsletter & Opportunity Dispatch */}
          <Newsletter />

          {/* Final Conversion Section */}
          <FinalCTA
            onOpenApply={() => handleOpenApply()}
            onExploreOpportunities={handleExploreOpportunities}
          />
        </main>

        {/* Footer */}
        <Footer
          onOpenApply={() => handleOpenApply()}
          onOpenHire={() => setIsHireModalOpen(true)}
        />

        {/* Interactive Modals */}
        <TalentApplyModal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          initialRole={initialRoleForApply}
        />

        <EnterpriseHireModal
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
        />

        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onOpenApplyModal={() => {
            setSelectedOpportunity(null);
            handleOpenApply();
          }}
        />

        <ExpertStoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
