import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ProblemStrip } from "@/components/home/ProblemStrip";
import { PlatformOverview } from "@/components/home/PlatformOverview";
import { SkillMarketplace } from "@/components/home/SkillMarketplace";
import { MissionVision } from "@/components/home/MissionVision";
import { Timeline } from "@/components/home/Timeline";
import { HomeNews } from "@/components/home/HomeNews";
import { FinalCTA } from "@/components/home/FinalCTA";
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
      title="CloudBee Robotics — Autonomous OS for Embodied AI"
      description="CloudBee Robotics builds the infrastructure layer for embodied AI. Synthetic 4D data, explainable VLA models, agentic ROS 2 runtime — deployable on any humanoid, arm, or AMR."
      path="/"
    >
      <HeroSection />
      <TrustStrip />
      <ProblemStrip />
      <PlatformOverview />
      <MissionVision />
      <SkillMarketplace />
      <Timeline />
      <HomeNews />
      <FinalCTA />
      <AskCloudBee />
    </PageShell>
  );
};

export default Index;
