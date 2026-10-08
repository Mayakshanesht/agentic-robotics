import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { RobotDemonstrations } from "@/components/site/RobotDemonstrations";
import { SelfImprovingOs } from "@/components/site/SelfImprovingOs";
import { ContactRich } from "@/components/site/ContactRich";
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
      const aliases: Record<string, string> = { problem: "customer-industries", explore: "customer-industries", pilots: "how-it-works", investors: "funding" };
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
      title="CloudBee Robotics · The self-improving OS for robots"
      description="We are building a self-improving OS for robots, powered by synthetic contact-rich data. Watch our simulation demonstrations and explore an industrial pilot with our Aachen team."
      path="/"
    >
      <SectionRail
        items={[
          { id: "what-we-make", label: "What we build" },
          { id: "see-it-work", label: "Demonstrations" },
          { id: "self-improving", label: "Self-improving OS" },
          { id: "contact-rich", label: "Synthetic data" },
          { id: "customer-industries", label: "Your industry" },
          { id: "how-it-works", label: "Pilot journey" },
          { id: "funding", label: "Our supporters" },
        ]}
      />
      <Hero />
      <LogoMarquee />
      <WhatWeMake />
      <RobotDemonstrations />
      <SelfImprovingOs />
      <ContactRich />
      <CustomerApplications />
      <HumanoidWalk />
      <HowItWorks />
      <FundingStrip />
      <LatestPosts />
      <FinalCta />
      <FaqWidget />
    </PageShell>
  );
};

export default Index;
