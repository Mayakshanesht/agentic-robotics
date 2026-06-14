import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/landing/Hero";
import { Statement } from "@/components/landing/Statement";
import { Metrics } from "@/components/landing/Metrics";
import { FinalStatement } from "@/components/landing/FinalStatement";
import { PartnerStrip } from "@/components/home/PartnerStrip";
import { SelfImprovingLoop } from "@/components/home/SelfImprovingLoop";
import { SixGNervousSystem } from "@/components/home/SixGNervousSystem";
import { PlatformComingSoon } from "@/components/home/PlatformComingSoon";
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
      description="Describe a task in plain language. CloudBee generates synthetic experience, trains the policy and deploys a self-improving robot fleet — for warehousing, manufacturing and industrial automation."
      path="/"
    >
      <Hero />
      <PartnerStrip />
      <Statement />
      <SelfImprovingLoop />
      <SixGNervousSystem />
      <Metrics />
      <PlatformComingSoon />
      <FinalStatement />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;
