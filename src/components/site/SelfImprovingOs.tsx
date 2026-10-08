import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { ImproveLoop } from "@/components/site/anim/ImproveLoop";
import { useIsMobile } from "@/hooks/use-mobile";

const stations = [
  {
    label: "Put a skill to work",
    body: "Start with a useful handling or assembly task on your robot, with clear criteria for successful operation.",
  },
  {
    label: "Assess the performance",
    body: "Understand how the capability handles the task and its variations. Keep quality, consistency and practical use at the centre of the review.",
  },
  {
    label: "Improve the capability",
    body: "Refine the skill as parts, tasks and work-cell requirements change. The goal is a capability that keeps becoming more useful in your operation.",
  },
  {
    label: "Build on what works",
    body: "Develop a growing set of robot capabilities, from individual handling steps toward more complete industrial workflows.",
  },
];

const STEP_MS = 2800;

export function SelfImprovingOs() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [lap, setLap] = useState(0);
  const [paused, setPaused] = useState(false);
  const step = lap % stations.length;

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setLap((l) => l + 1), STEP_MS);
    return () => clearInterval(t);
  }, [reduce, paused]);

  return (
    <Section id="self-improving" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>The self-improving OS</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Robot skills built to keep improving.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          We are building a self-improving operating system for robotics: software that brings useful robot
          skills into a continuous cycle of operation, assessment and improvement. Our ambition is to give
          industrial teams a growing set of capabilities for the work they need done.
        </p>
      </FadeUp>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-12">
        <FadeUp className="mx-auto w-full max-w-[520px]">
          <ImproveLoop step={step} lap={lap} labels={!isMobile} />
          {!reduce && (
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              className="mx-auto mt-3 flex min-h-11 items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
              {paused ? "Play capability cycle" : "Pause capability cycle"}
            </button>
          )}
        </FadeUp>

        <FadeUp delay={0.1}>
          <ol className="space-y-3">
            {stations.map((s, i) => {
              const active = i === step;
              return (
                <li
                  key={s.label}
                  className={`rounded-2xl border p-5 transition-colors duration-500 ${
                    active ? "border-primary/40 bg-white shadow-[var(--shadow-card)]" : "border-border bg-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors duration-500 ${
                        active ? "border-primary bg-primary text-white" : "border-border bg-white text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{s.label}</h3>
                  </div>
                  <p className="mt-2 pl-10 text-[17px] leading-relaxed text-[#13233B]">{s.body}</p>
                </li>
              );
            })}
          </ol>
        </FadeUp>
      </div>

      <FadeUp delay={0.1} className="mt-10 max-w-3xl">
        <p className="text-[17px] leading-relaxed text-[#13233B]">
          <strong className="text-foreground">Where we are today:</strong> robot arms running in our Aachen
          hardware lab, with humanoid and dexterous-hand demonstrations in simulation. Industrial pilots focus
          on a defined task and agreed assessment criteria.{" "}
          <Link to="/how-it-works" className="font-semibold text-primary hover:underline">
            Explore the pilot journey →
          </Link>
        </p>
      </FadeUp>
    </Section>
  );
}
