import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { DefineGoal, FocusPilot, ReviewOutcome } from "@/components/site/anim/MakeSteps";
import { sectors } from "@/data/company";

const steps = [
  {
    art: <DefineGoal />,
    title: "Synthetic contact-rich data",
    body: "We develop synthetic data for robots interacting with objects: approaching, grasping, handling and assembling. The focus is the physical interaction that makes a task work, including variation in parts and situations.",
  },
  {
    art: <FocusPilot />,
    title: "Skills for your robot",
    body: "A useful robot skill must fit the task, the robot and its end effector. We work on capabilities for robot arms, humanoids and dexterous hands, with a pilot shaped around your equipment and success criteria.",
  },
  {
    art: <ReviewOutcome />,
    title: "A platform that keeps improving",
    body: "Our self-improving OS is designed to bring task development, evaluation and refinement into an ongoing capability cycle. The aim is to build on what a robot can already do as you explore new tasks and conditions.",
  },
];

export function WhatWeMake() {
  const reduce = useReducedMotion();

  return (
    <Section id="what-we-make" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>What we make</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Data. Robot skills. A platform that keeps improving.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We are building the foundations for robots that can take on more useful work: synthetic contact-rich
          data and a self-improving operating system. Start with an industrial task, develop a capability and
          use the results to guide what comes next.
        </p>
      </FadeUp>

      {/* Three connected parts of the public product story. */}
      <div className="relative mt-12 hidden md:block" aria-hidden>
        <div className="absolute inset-x-[16%] top-1/2 h-px -translate-y-1/2 border-t border-dashed border-primary/40" />
        <div className="relative grid grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="flex justify-center">
              <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-white" />
            </div>
          ))}
        </div>
        {!reduce && (
          <motion.span
            className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(13,148,136,0.14)]"
            initial={{ left: "16.6%" }}
            animate={{ left: ["16.6%", "50%", "83.3%", "83.3%"] }}
            transition={{ duration: 7, times: [0, 0.35, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="mt-6 grid gap-5 md:mt-8 lg:grid-cols-3">
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-[#F8FAFC] p-6">
              <div className="rounded-xl border border-border bg-white p-2">
                <div className="h-36">{s.art}</div>
              </div>
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="text-xl font-bold leading-snug text-foreground">{s.title}</h3>
              </div>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link to="/how-it-works" className="text-base font-semibold text-primary hover:underline">
          Explore our approach →
        </Link>
        <p className="text-sm text-muted-foreground">Built for {sectors.join(", ").toLowerCase()}.</p>
      </FadeUp>
    </Section>
  );
}
