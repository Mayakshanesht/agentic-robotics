import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { sectors } from "@/data/company";

const points = [
  {
    title: "Data with touch and force, not pixels alone",
    body: "Factory tasks are decided by contact. We record every run with cameras, depth, touch and force at the same instant, so a model learns how a part feels, not only where it is.",
  },
  {
    title: "Generated from one video of your cell",
    body: "One walk through the cell with a phone becomes a twin, and the twin plays the task thousands of times with new positions, parts and lighting. It scales with GPUs instead of with people.",
  },
  {
    title: "Turned into a working skill on your robot",
    body: "We adapt an open robot model to your sensors, your gripper and your task, test it in the twin, and keep the skill improving once it runs on the line.",
  },
];

export function WhatWeMake() {
  return (
    <Section id="what-we-make" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>What we make</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Contact-rich synthetic data for industrial manipulation.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Industrial AI has text and images in abundance. What it does not have is data of robots touching things.
          That is the data we generate, and the skills we build from it.
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {points.map((p, i) => (
          <FadeUp key={p.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-[#F8FAFC] p-6">
              <div className="text-sm font-bold text-primary">0{i + 1}</div>
              <h3 className="mt-3 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{p.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link to="/how-it-works" className="text-base font-semibold text-primary hover:underline">
          See how the data is made →
        </Link>
        <p className="text-sm text-muted-foreground">
          Built for {sectors.join(", ").toLowerCase()}.
        </p>
      </FadeUp>
    </Section>
  );
}
