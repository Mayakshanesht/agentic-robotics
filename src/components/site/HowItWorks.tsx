import { FadeUp, Kicker, Section } from "@/components/site/ui";

const steps = [
  {
    title: "Describe the task",
    body: "Share what the robot should do, the parts it will handle and the conditions in your work cell. We define the capability and the outcome that matters to your team.",
  },
  {
    title: "Develop the capability",
    body: "We work on task scenarios, synthetic data and robot skills around the agreed scope. The focus is handling the variation and physical interactions your task requires.",
  },
  {
    title: "Evaluate together",
    body: "Review the capability in the appropriate simulation or hardware setting. Assess the result against the task, equipment and success criteria agreed for your pilot.",
  },
  {
    title: "Refine and expand",
    body: "Use what you learn to improve the task, plan integration or explore the next capability. Your team remains involved in deciding what is ready for the next step.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>How it works</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          From a task description to a robot capability.
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
        <p className="text-lg font-semibold text-foreground">Describe. Develop. Evaluate. Improve.</p>
      </FadeUp>
    </Section>
  );
}
