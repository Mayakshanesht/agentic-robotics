import { FadeUp, Kicker, Section } from "@/components/site/ui";

const steps = [
  {
    title: "Discuss",
    body: "Tell us about the task, your robot and the outcome that matters to your team.",
  },
  {
    title: "Scope",
    body: "Together, we agree a focused pilot, the work involved and how to assess the result.",
  },
  {
    title: "Pilot",
    body: "We work with your team on the chosen task, using your operational requirements as the guide.",
  },
  {
    title: "Review",
    body: "Review the outcome with us and decide the next step for your automation project.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>How it works</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          A clear path from your task to a focused pilot.
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{s.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mt-8">
        <p className="text-lg font-semibold text-foreground">One task. A shared goal. A practical next step.</p>
      </FadeUp>
    </Section>
  );
}
