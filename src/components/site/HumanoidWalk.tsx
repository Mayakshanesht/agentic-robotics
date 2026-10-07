import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

/** Measured in the simulated run shown in the clip, not projected. */
const measured = [
  { big: "2.7 m", label: "walked on its own legs", detail: "cabinet, then table" },
  { big: "11.2 cm", label: "screwdriver lifted", detail: "held for 3.5 s" },
  { big: "1.4 cm", label: "off the planned stance", detail: "when it arrived at the table" },
  { big: "0", label: "falls", detail: "balance kept throughout" },
];

export function HumanoidWalk() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Section id="humanoid" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>Locomotion and manipulation</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          We walked a Unitree G1 across our own lab.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Not a tabletop demo and not a scripted animation. Our lab in Aachen, rebuilt as a twin, with a Unitree G1 on
          LinkerHand O6 hands balancing and walking on its own legs to the bench, then grasping and lifting a
          screwdriver. The task is described in plain words; the robot works out the route and the grasp, and full
          physics decides whether it holds.
        </p>
      </FadeUp>

      <FadeUp delay={0.08} className="mt-10">
        <div className="-mx-6 overflow-hidden border border-x-0 border-border bg-[#0A1C33] shadow-[var(--shadow-card)] md:mx-0 md:rounded-2xl md:border-x">
          <video
            ref={ref}
            src="/media/g1-walk.mp4"
            poster="/media/g1-walk-poster.jpg"
            controls
            muted
            loop
            playsInline
            preload="none"
            aria-label="A Unitree G1 humanoid walking across a digital twin of the CloudBee lab, stopping at a cabinet, reaching the bench and lifting a screwdriver"
            className="aspect-video w-full"
          />
        </div>
        <p className="mt-3 px-6 text-sm text-muted-foreground md:px-0">
          Full physics, real time, in the twin of our lab. The route map and the running figures are the simulation's
          own readouts.
        </p>
      </FadeUp>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {measured.map((m, i) => (
          <FadeUp key={m.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-6">
              <div className="text-2xl font-extrabold leading-tight text-primary lg:text-3xl">{m.big}</div>
              <div className="mt-2 font-semibold text-foreground">{m.label}</div>
              <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.detail}</div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-6 max-w-3xl">
        <p className="text-[17px] leading-relaxed text-[#13233B]">
          Measured in that run, not projected. It matters because a twin that only holds a tabletop can train an arm.
          A twin a humanoid can walk through is a twin for the whole robot: where to stand, how to reach from there,
          and how much force to hold with once it arrives.{" "}
          <Link to="/how-it-works" className="font-semibold text-primary hover:underline">
            See how the twin is built →
          </Link>
        </p>
      </FadeUp>
    </Section>
  );
}
