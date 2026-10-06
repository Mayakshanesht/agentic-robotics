import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/site/Hero";
import { SeeItWork } from "@/components/site/SeeItWork";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { DigitalTwin } from "@/components/site/DigitalTwin";
import { ContactRich } from "@/components/site/ContactRich";
import { VideoBlock } from "@/components/site/VideoBlock";
import { WebApp } from "@/components/site/WebApp";
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
          { id: "digital-twin", label: "Digital twin" },
          { id: "contact-rich", label: "Contact-rich data" },
          { id: "trained-model", label: "Trained model" },
          { id: "web-app", label: "Web app" },
          { id: "problem", label: "The problem" },
          { id: "explore", label: "Explore" },
          { id: "pilots", label: "Traction" },
          { id: "team", label: "Team" },
          { id: "funding", label: "Funding" },
          { id: "investors", label: "Investors" },
        ]}
      />
      <Hero />
      <LogoMarquee />
      <SeeItWork />
      <DigitalTwin />
      <ContactRich />
      <VideoBlock
        id="trained-model"
        kicker="The trained model"
        title="The same situation, before and after training."
        body="An open robot model, trained on the generated data, tested on situations it never saw during training. Off the shelf it fails; trained on this data it completes the task."
        src="/media/trained-model.mp4"
        poster="/media/trained-model-poster.jpg"
        alt="The same new situation attempted by an off-the-shelf model and by the same model trained on generated data"
        caption="Part 2: the trained model running."
        tone="white"
      />
      <WebApp />
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
