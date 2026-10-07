import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { SeeItWork } from "@/components/site/SeeItWork";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { HumanoidWalk } from "@/components/site/HumanoidWalk";
import { WhatWeMake } from "@/components/site/WhatWeMake";
import { SelfImprovingOs } from "@/components/site/SelfImprovingOs";
import { ProblemAnswer } from "@/components/site/ProblemAnswer";
import { ExploreTeasers } from "@/components/site/ExploreTeasers";
import { Traction } from "@/components/site/Traction";
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
      title="CloudBee Robotics · Describe the task. Deploy the capability."
      description="Describe the task, deploy the capability. The self-improving operating system for robots, powered by scalable, contact-rich synthetic data, touch and force, generated from a single video. Robot arms, humanoids and dexterous hands. RWTH Aachen spin-off."
      path="/"
    >
      <SectionRail
        items={[
          { id: "see-it-work", label: "See it work" },
          { id: "humanoid", label: "The humanoid" },
          { id: "what-we-make", label: "What we make" },
          { id: "self-improving", label: "Self-improving" },
          { id: "problem", label: "The problem" },
          { id: "pilots", label: "Traction" },
          { id: "funding", label: "Funding" },
          { id: "explore", label: "Explore" },
          { id: "investors", label: "Investors" },
        ]}
      />
      <Hero />
      <LogoMarquee />
      <SeeItWork />
      <HumanoidWalk />
      <WhatWeMake />
      <SelfImprovingOs />
      <ProblemAnswer />
      <Traction />
      <FundingStrip />
      <ExploreTeasers />
      <EventGallery />
      <LatestPosts />
      <InvestorBand />
      <FinalCta />
      <FaqWidget />
    </PageShell>
  );
};

export default Index;
