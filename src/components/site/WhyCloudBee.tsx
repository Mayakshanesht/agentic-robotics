import { FadeUp, Kicker, Section } from "@/components/site/ui";

const reasons = [
  {
    title: "Contact-rich data that scales",
    body: "Training data with touch and force, generated from a video plus text or a few demos. It scales with GPUs, not people.",
  },
  {
    title: "A loop that corrects itself",
    body: "Every run teaches the system what went wrong. The data and the model are fixed automatically, and you see it in live analytics.",
  },
  {
    title: "Skills that compound",
    body: "Each new skill builds on the ones before, so every task gets faster and cheaper to deliver.",
  },
];

export function WhyCloudBee() {
  return (
    <Section id="why-cloudbee" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Why CloudBee</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Others solve one piece. We close the whole loop.
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <FadeUp key={r.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <span className="block h-1 w-10 rounded-full bg-primary" />
              <h3 className="mt-5 text-xl font-bold text-foreground">{r.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{r.body}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <p className="mt-7 text-sm text-muted-foreground">
        Simulation tools and open foundation models are building blocks we use. We turn them into working skills in your
        cell.
      </p>
    </Section>
  );
}
