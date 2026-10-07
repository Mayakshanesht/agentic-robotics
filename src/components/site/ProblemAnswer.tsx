import { FadeUp, Kicker, Section } from "@/components/site/ui";

const today = {
  label: "Today",
  points: [
    "Data is collected one demo at a time, mostly vision only, with no sense of touch.",
    "Long tasks break, and a new part or a new site means starting over.",
  ],
  stats: [
    { big: "6-18 months", small: "to teach one task" },
    { big: "an R&D team", small: "of in-house experts" },
    { big: "€100k+", small: "per task" },
  ],
};

const withCloudBee = {
  label: "With CloudBee",
  points: [
    "Training data with touch and force is generated on GPUs, not recorded by hand.",
    "Long tasks keep running when something goes wrong, instead of stopping and waiting for a person.",
  ],
  stats: [
    { big: "about 2 weeks", small: "per skill" },
    { big: "1 engineer", small: "of yours" },
    { big: "1/4 to 1/2", small: "of the cost" },
  ],
};

function Column({ data, tone }: { data: typeof today; tone: "amber" | "teal" }) {
  const accent = tone === "amber" ? "text-[#B45309]" : "text-primary";
  const bar = tone === "amber" ? "bg-[#B45309]" : "bg-primary";
  const chip = tone === "amber" ? "bg-[#B45309]/10" : "bg-secondary";
  return (
    <div className="rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)] lg:p-8">
      <div className="flex items-center gap-3">
        <span className={`h-5 w-1 rounded-full ${bar}`} />
        <div className={`text-[13px] font-bold uppercase tracking-[3px] ${accent}`}>{data.label}</div>
      </div>
      <ul className="mt-6 space-y-3">
        {data.points.map((p) => (
          <li key={p} className="flex gap-3 text-[17px] leading-relaxed text-[#13233B]">
            <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${bar}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.stats.map((s) => (
          <div key={s.small} className={`rounded-xl px-4 py-3 ${chip}`}>
            <div className={`text-lg font-extrabold leading-tight ${accent}`}>{s.big}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.small}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProblemAnswer() {
  return (
    <Section id="problem" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>The problem</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Robots are still taught by hand.
        </h2>
      </FadeUp>
      <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <FadeUp>
          <Column data={today} tone="amber" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <Column data={withCloudBee} tone="teal" />
        </FadeUp>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Typical figures from industrial robot projects; CloudBee figures are targets for our pilot programme.
      </p>
    </Section>
  );
}
