import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { ImproveLoop } from "@/components/site/anim/ImproveLoop";
import { useIsMobile } from "@/hooks/use-mobile";

const stations = [
  {
    label: "Agree the goal",
    body: "Choose the task and define what the pilot should achieve for your operation.",
  },
  {
    label: "Work together",
    body: "Bring your team’s knowledge of the task together with our robotics experience.",
  },
  {
    label: "Review the result",
    body: "Assess the pilot against the agreed goal and discuss what the outcome means for your project.",
  },
  {
    label: "Choose the next step",
    body: "Decide together whether to refine the task, explore another opportunity or expand the project.",
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
        <Kicker>Working with your team</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          A pilot is the start of a practical conversation.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Your operational priorities guide the work. We keep the pilot focused on a defined task, review the
          outcome with you and discuss the next step in your automation journey.
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
          From the first conversation to the pilot review, your team has a clear goal and a direct robotics
          partner.{" "}
          <Link to="/how-it-works" className="font-semibold text-primary hover:underline">
            Explore the pilot journey →
          </Link>
        </p>
      </FadeUp>
    </Section>
  );
}
