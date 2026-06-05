import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { ProblemAdvantage } from "@/components/home/ProblemAdvantage";
import { CapabilityFlow } from "@/components/home/CapabilityFlow";
import { SkillMarketplace } from "@/components/home/SkillMarketplace";
import { DemoGallery } from "@/components/home/DemoGallery";
import { HomeNews } from "@/components/home/HomeNews";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FounderKeynote } from "@/components/home/FounderKeynote";
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
      title="CloudBee Robotics — Build, Train and Deploy Physical AI"
      description="Describe a task. CloudBee generates data, trains models, deploys agents and continuously improves robotic systems. Backed by EXIST, RWTH Aachen, Collective Incubator."
      path="/"
    >
      <HeroSection />
      <PlatformOverview />
      <ProblemAdvantage />
      <CapabilityFlow />
      <SkillMarketplace />
      <DemoGallery />
      <FounderKeynote />
      <HomeNews />
      <FinalCTA />
      <TrustStrip />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;
