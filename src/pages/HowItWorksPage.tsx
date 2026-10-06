import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DataComparison } from "@/components/site/anim/DataComparison";
import { DigitalTwin } from "@/components/site/DigitalTwin";
import { ModelAdapts } from "@/components/site/anim/ModelAdapts";
import { BOOK_A_PILOT_MAILTO, robotFamilies, sectors } from "@/data/company";

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
            <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </a>
          </FadeUp>
        </div>
      </section>

      <HowItWorks />

      <Section className="border-t border-border">
        <FadeUp className="max-w-3xl">
          <Kicker>The data</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            Why touch and force change what a robot can learn.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
            A camera sees where the part is. It does not feel the moment a grip starts to slip. Training data that
            carries touch and force captures the part of the task that decides success.
          </p>
        </FadeUp>
        <div className="mt-10">
          <DataComparison />
        </div>
      </Section>

      <DigitalTwin />

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
            <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </a>
          </FadeUp>
        </div>
      </Section>
    </PageShell>
  );
}
