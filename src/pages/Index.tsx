import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { SeeItWork } from "@/components/site/SeeItWork";
import { ProblemAnswer } from "@/components/site/ProblemAnswer";
import { ExploreTeasers } from "@/components/site/ExploreTeasers";
import { Traction } from "@/components/site/Traction";
import { TeamStrip } from "@/components/site/TeamStrip";
import { EventGallery } from "@/components/site/EventGallery";
import { LatestPosts } from "@/components/site/LatestPosts";
import { FundingStrip } from "@/components/site/FundingStrip";
import { InvestorBand } from "@/components/site/InvestorBand";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionRail } from "@/components/site/SectionRail";
import { FaqWidget } from "@/components/FaqWidget";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location]);

  return (
    <PageShell
      title="CloudBee Robotics · The capability factory for agentic physical AI"
      description="Describe the task, we help build the skill for your robot, in your own work cell. Touch and force data generated on GPUs, adapted open foundation models and a self-improving OS for robot arms, humanoids and dexterous hands. RWTH Aachen spin-off."
      path="/"
    >
      <SectionRail
        items={[
          { id: "see-it-work", label: "See it work" },
          { id: "problem", label: "The problem" },
          { id: "explore", label: "Explore" },
          { id: "pilots", label: "Traction" },
          { id: "team", label: "Team" },
          { id: "funding", label: "Funding" },
          { id: "investors", label: "Investors" },
        ]}
      />
      <Hero />
      <SeeItWork />
      <ProblemAnswer />
      <ExploreTeasers />
      <Traction />
      <TeamStrip />
      <EventGallery />
      <LatestPosts />
      <FundingStrip />
      <InvestorBand />
      <FinalCta />
      <FaqWidget />
    </PageShell>
  );
};

export default Index;
