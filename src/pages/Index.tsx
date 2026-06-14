import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { CapabilityCompilerFeature } from "@/components/landing/CapabilityCompilerFeature";
import { Grants } from "@/components/landing/Grants";
import { Metrics } from "@/components/landing/Metrics";
import { FounderMoment } from "@/components/landing/FounderMoment";
import { InvestorCTA } from "@/components/landing/InvestorCTA";
import { FinalStatement } from "@/components/landing/FinalStatement";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { SelfImprovingLoop } from "@/components/home/SelfImprovingLoop";
import { SixGNervousSystem } from "@/components/home/SixGNervousSystem";
import { PlatformComingSoon } from "@/components/home/PlatformComingSoon";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AskCloudBee } from "@/components/AskCloudBee";

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
      title="CloudBee Robotics — Robots That Teach Themselves"
      description="Describe a task in plain language. CloudBee's Capability Compiler builds multi-agent capabilities, generates multimodal synthetic experience, trains our own models and deploys a self-improving robot fleet — with 6G real-time intelligence."
      path="/"
    >
      <Hero />
      <PartnerStrip />
      <PlatformComingSoon />
      <ProblemSolution />
      <CapabilityCompilerFeature />
      <SelfImprovingLoop />
      <SixGNervousSystem />
      <Grants />
      <Metrics />
      <FounderMoment />
      <InvestorCTA />
      <TrustStrip />
      <FinalStatement />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;
