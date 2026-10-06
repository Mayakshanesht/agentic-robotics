import { FadeUp, Kicker, Section } from "@/components/site/ui";

const steps = [
  {
    title: "Describe",
    body: "Write the task in plain words. Optionally add a phone video of your cell or a few demos in VR.",
  },
  {
    title: "Generate",
    body: "We build a digital twin of your cell and generate thousands of variations of the task, with touch and force, on GPUs. No extra robots to buy.",
  },
  {
    title: "Adapt",
    body: "Our research copilot picks the best open robot foundation model and adapts it to your cell. We don't build foundation models; we make them work for you.",
  },
  {
    title: "Improve",
    body: "Our self-improving OS runs the skill, spots what failed, generates data for exactly that case and redeploys. Your robot gets better with every run.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>How it works</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          From one phone video to a robot that improves itself.
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
        <p className="text-lg font-semibold text-foreground">1 demo → 1,000s of scenes and scenarios → no extra demos.</p>
      </FadeUp>
    </Section>
  );
}
