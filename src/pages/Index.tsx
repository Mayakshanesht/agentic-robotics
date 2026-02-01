import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LatestUpdateStrip } from "@/components/LatestUpdateStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";
import { AskCloudBee } from "@/components/AskCloudBee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LatestUpdateStrip />
        <ProblemSection />
        <SolutionSection />
        <NewsSection />
      </main>
      <Footer />
      <AskCloudBee />
    </div>
  );
};

export default Index;
