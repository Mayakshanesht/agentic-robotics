import { PageShell } from "@/components/PageShell";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DigitalTwin } from "@/components/site/DigitalTwin";
import { ContactRich } from "@/components/site/ContactRich";
import { TwoPolicies } from "@/components/site/TwoPolicies";
import { WebApp } from "@/components/site/WebApp";
import { VideoBlock } from "@/components/site/VideoBlock";
import { ModelAdapts } from "@/components/site/anim/ModelAdapts";
import { BOOK_A_PILOT_PATH, CONTACT_EMAIL, robotFamilies, sectors } from "@/data/company";

const fromYou = [
  "The task, described in plain words",
  "Optionally a phone video of your cell, or a few demonstrations",
  "Access to the cell during the pilot",
  "One engineer on your side, not an R&D team",
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How it works · CloudBee Robotics"
      description="Describe the task, we generate training data with touch and force, adapt an open robot model to your cell, and keep the skill improving while it runs."
      path="/how-it-works"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>How it works</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              Four steps from a described task to a working skill.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              You describe the task. We do the rest in your own cell, and the skill keeps getting better once it runs.
            </p>
            <Link to={BOOK_A_PILOT_PATH} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </Link>
          </FadeUp>
        </div>
      </section>

      <WebApp />

      <HowItWorks />

      <DigitalTwin />
      <VideoBlock
        id="walking-twin"
        kicker="The twin, at full scale"
        title="A humanoid can walk through it."
        body="The twin is the whole room, not a tabletop. A Unitree G1 on LinkerHand O6 hands walks across the twin of our own lab on its own legs, stops at the cabinet, reaches the bench and lifts a screwdriver. Full physics decides whether it keeps its balance and whether the grip holds."
        src="/media/g1-walk.mp4"
        poster="/media/g1-walk-poster.jpg"
        alt="A Unitree G1 humanoid walking across a digital twin of the CloudBee lab, stopping at a cabinet, reaching the bench and lifting a screwdriver"
        caption="Full physics, real time, in the twin of our own lab. The route map and the figures are the simulation's own readouts."
        tone="white"
      />
      <TwoPolicies />
      <ContactRich />
      <VideoBlock
        id="dataset"
        kicker="Dataset generation"
        title="One task, many generated situations."
        body="The same task is played out again and again: the object moved, turned, heavier or more slippery; the robot standing somewhere else; the room lit differently. Hard cases are kept, including the ones that fail."
        src="/media/dataset-generation.mp4"
        poster="/media/dataset-generation-poster.jpg"
        alt="One task played out as many generated situations: the object moved, the robot standing elsewhere, the room lit differently"
        caption="Part 1: generating the dataset."
        aspect="aspect-[1600/680]"
        mobileSrc="/media/dataset-generation-mobile.mp4"
        mobilePoster="/media/dataset-generation-mobile-poster.jpg"
        mobileAspect="aspect-[1180/680]"
      />

      <Section className="border-t border-border bg-white">
        <FadeUp className="max-w-3xl">
          <Kicker>The model</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            We adapt an open model to your cell.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
            We do not build foundation models. We take the best open one and make it work with your sensors, your
            gripper and your task.
          </p>
        </FadeUp>
        <div className="mt-10">
          <ModelAdapts />
        </div>
      </Section>

      <VideoBlock
        id="trained-model"
        kicker="The trained model"
        title="The same situation, before and after training."
        body="An open robot model, trained on the generated data, tested on situations it never saw during training. Off the shelf it fails; trained on this data it completes the task."
        src="/media/trained-model.mp4"
        poster="/media/trained-model-poster.jpg"
        alt="The same new situation attempted by an off-the-shelf model on the left and by the same model trained on generated data on the right"
        caption="Part 2: the trained model running. The same new situation, attempted twice at the same moment."
        aspect="aspect-[1600/340]"
        splitLabels={{ left: "Off the shelf · fails", right: "Trained on our data · succeeds" }}
        mobileSrc="/media/trained-model-mobile.mp4"
        mobilePoster="/media/trained-model-mobile-poster.jpg"
        mobileAspect="aspect-[790/680]"
        tone="white"
      />

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <Kicker>What we need from you</Kicker>
            <ul className="mt-6 space-y-3">
              {fromYou.map((f) => (
                <li key={f} className="flex gap-3 text-[17px] leading-relaxed text-[#13233B]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Kicker>Where it runs</Kicker>
            <div className="mt-6 flex flex-wrap gap-2">
              {robotFamilies.map((r) => (
                <span key={r} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-[#13233B]">
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Sectors we work in: {sectors.join(", ").toLowerCase()}.</p>
            <Link to={BOOK_A_PILOT_PATH} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Or write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </FadeUp>
        </div>
      </Section>
    </PageShell>
  );
}
