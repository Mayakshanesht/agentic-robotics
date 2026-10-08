import { FadeUp, Kicker, Section } from "@/components/site/ui";

const today = {
  label: "Today",
  points: [
    "Robot projects can demand substantial specialist time and manual commissioning.",
    "Long tasks break, and a new part or a new site means starting over.",
  ],
  stats: [
    { big: "Project scope", small: "can be hard to define" },
    { big: "Specialist effort", small: "takes time to coordinate" },
    { big: "Investment", small: "needs a clear business case" },
  ],
};

const withCloudBee = {
  label: "With CloudBee",
  points: [
    "Start with a focused pilot and a clearly defined task in your work cell.",
    "Work directly with a robotics team and review the results before expanding the project.",
  ],
  stats: [
    { big: "One task", small: "for a focused pilot" },
    { big: "Direct contact", small: "with our robotics team" },
    { big: "Clear criteria", small: "to assess the outcome" },
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
          Make the first step in automation more manageable.
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
        Pilot scope, timing and commercial terms are agreed individually with your team.
      </p>
    </Section>
  );
}
