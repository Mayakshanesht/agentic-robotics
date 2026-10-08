import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { SeeItWork } from "@/components/site/SeeItWork";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { HumanoidWalk } from "@/components/site/HumanoidWalk";
import { WhatWeMake } from "@/components/site/WhatWeMake";
import { CustomerApplications } from "@/components/site/CustomerApplications";
import { HowItWorks } from "@/components/site/HowItWorks";
import { LatestPosts } from "@/components/site/LatestPosts";
import { FundingStrip } from "@/components/site/FundingStrip";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionRail } from "@/components/site/SectionRail";
import { FaqWidget } from "@/components/FaqWidget";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const aliases: Record<string, string> = { "self-improving": "how-it-works", problem: "customer-industries", explore: "customer-industries", pilots: "how-it-works", investors: "funding" };
      let id = location.hash.slice(1);
      try { id = decodeURIComponent(id); } catch { return; }
      const el = document.getElementById(aliases[id] ?? id);
      if (el) {
        const timer = setTimeout(() => el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }), 50);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <PageShell
      title="CloudBee Robotics · Describe the task. Deploy the capability."
      description="CloudBee Robotics helps industrial teams turn everyday tasks into useful robot capabilities. Explore our pilot programme and meet our team in Aachen. RWTH Aachen spin-off."
      path="/"
    >
      <SectionRail
        items={[
          { id: "what-we-make", label: "Customer benefits" },
          { id: "customer-industries", label: "Your industry" },
          { id: "humanoid", label: "Robots" },
          { id: "how-it-works", label: "Pilot journey" },
          { id: "funding", label: "Our supporters" },
          { id: "blog", label: "Company updates" },
        ]}
      />
      <Hero />
      <LogoMarquee />
      <WhatWeMake />
      <CustomerApplications />
      <HumanoidWalk />
      <HowItWorks />
      <SeeItWork />
      <FundingStrip />
      <LatestPosts />
      <FinalCta />
      <FaqWidget />
    </PageShell>
  );
};

export default Index;
