import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { ImproveLoop } from "@/components/site/anim/ImproveLoop";
import { useIsMobile } from "@/hooks/use-mobile";

const stations = [
  {
    label: "It runs",
    body: "The skill is on your robot, in your cell, doing the task on the line.",
  },
  {
    label: "It notices",
    body: "A new part, a moved fixture, a different light. The runs that go wrong are kept instead of thrown away, so the cell itself tells us what changed.",
  },
  {
    label: "The data is corrected",
    body: "Those exact situations are played again in your twin, with touch and force recorded, until the hard cases are covered. Nobody collects demonstrations by hand.",
  },
  {
    label: "The model is corrected",
    body: "The skill is adapted again on the new data and tested in the twin before it goes back on the robot. The line keeps running while that happens.",
  },
];

const STEP_MS = 2800;

export function SelfImprovingOs() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const [lap, setLap] = useState(0);
  const step = lap % stations.length;

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setLap((l) => l + 1), STEP_MS);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <Section id="self-improving" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>The self-improving OS</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          The skill does not stop learning once it is live.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          A robot skill built once starts ageing the moment the cell changes: one new part and the integrator comes
          back. Ours is not built once. It runs, it notices, the data is corrected, the model is corrected, and it goes
          back on the robot. Then it does that again.
        </p>
      </FadeUp>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-12">
        <FadeUp className="mx-auto w-full max-w-[520px]">
          <ImproveLoop step={step} lap={lap} labels={!isMobile} />
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
          One loop keeping data, model and robot in step, for every skill you run with us. That is what we mean by a
          self-improving OS for robotics.{" "}
          <Link to="/how-it-works" className="font-semibold text-primary hover:underline">
            See the four steps →
          </Link>
        </p>
      </FadeUp>
    </Section>
  );
}
