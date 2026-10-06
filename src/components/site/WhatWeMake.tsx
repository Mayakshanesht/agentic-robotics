import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { OneVideoMany, SignalLanes, SkillOnRobot } from "@/components/site/anim/MakeSteps";
import { sectors } from "@/data/company";

const steps = [
  {
    art: <OneVideoMany />,
    title: "One video of your cell becomes thousands of runs",
    body: "A walk through the cell with a phone becomes a twin of it. The twin then plays your task again and again, with the part moved, heavier or more slippery, the robot standing elsewhere, the room lit differently. It scales with GPUs instead of with people.",
  },
  {
    art: <SignalLanes />,
    title: "Every run carries touch and force, not pixels alone",
    body: "Factory tasks are decided at the moment of contact, and that is exactly when a camera is blocked by the robot's own hand. Each run is recorded through cameras, depth, the touch pads on each fingertip and the force in the grip, at the same instant.",
  },
  {
    art: <SkillOnRobot />,
    title: "The data becomes a skill on your robot",
    body: "We adapt an open robot model to your sensors, your gripper and your task, test it in the twin against situations it never saw, and put it on the robot in your cell.",
  },
];

export function WhatWeMake() {
  const reduce = useReducedMotion();

  return (
    <Section id="what-we-make" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>What we make</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Contact-rich synthetic data for industrial manipulation.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Industrial AI has text and images in abundance. What it does not have is data of robots touching things.
          Nobody can scrape it, and collecting it by hand costs an hour of someone's day per demonstration. So we
          generate it, and build the skill from it.
        </p>
      </FadeUp>

      {/* the three steps as one line of work, not three separate claims */}
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
          See how the data is made →
        </Link>
        <p className="text-sm text-muted-foreground">Built for {sectors.join(", ").toLowerCase()}.</p>
      </FadeUp>
    </Section>
  );
}
