import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HeroStats } from "@/components/HeroStats";
import { LatestUpdateStrip } from "@/components/LatestUpdateStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TrustIndicators } from "@/components/TrustIndicators";
import { DemoShowcase } from "@/components/DemoShowcase";
import { Footer } from "@/components/Footer";
import { AskCloudBee } from "@/components/AskCloudBee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HeroStats />
        <LatestUpdateStrip />
        <ProblemSection />
        <SolutionSection />
        <TrustIndicators />
        <DemoShowcase />
      </main>
      <Footer />
      <AskCloudBee />
    </div>
  );
};

export default Index;
