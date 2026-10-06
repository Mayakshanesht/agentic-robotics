import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const loop = [
  {
    step: "It notices",
    body: "A new part, a moved fixture, a different light. The runs that go wrong on the line are kept instead of thrown away, so the cell tells us what it changed.",
  },
  {
    step: "The data is corrected",
    body: "Those exact situations are played again in your twin, with touch and force recorded, until the hard cases are covered. No one has to collect demonstrations by hand.",
  },
  {
    step: "The model is corrected",
    body: "The skill is adapted again on the new data and tested in the twin before it goes back on the robot. The line keeps running while that happens.",
  },
];

export function SelfImprovingOs() {
  return (
    <Section id="self-improving" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>The self-improving OS</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          The skill does not stop learning once it is live.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          A robot skill built once starts ageing the moment the cell changes. Ours keeps the loop open: what happens on
          the line comes back as data, the data corrects the model, and the corrected skill goes back on the robot.
        </p>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {loop.map((l, i) => (
          <FadeUp key={l.step} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-foreground">{l.step}</h3>
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-[#13233B]">{l.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-8 max-w-3xl">
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
