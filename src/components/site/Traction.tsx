import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { CountUp } from "@/components/site/CountUp";

const tiles = [
  { big: "2", label: "pilots running", detail: "Tier-1 automotive · Medical-device testing" },
  { big: "2", label: "agreed, signature pending", detail: "Packaging & bulk handling · AGVs, vehicles and software" },
  { big: "1", label: "letter of intent", detail: "Automotive controls" },
  { big: "Non-dilutive", label: "grant funded", detail: "EXIST Gründungsstipendium · WestAI compute grant" },
];

export function Traction() {
  return (
    <Section id="pilots" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Traction</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          5 industrial companies engaged in 5 months.
        </h2>
      </FadeUp>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <FadeUp key={t.label} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
              <div className="text-2xl font-extrabold leading-tight text-primary lg:text-3xl">
                <CountUp value={t.big} />
              </div>
              <div className="mt-2 font-semibold text-foreground">{t.label}</div>
              <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</div>
            </div>
          </FadeUp>
        ))}
      </div>

      <p className="mt-7 text-sm text-muted-foreground">
        Three more are in the pipeline. Sectors we work in: industrial manufacturing, automotive, electronics,
        battery technology, logistics.
      </p>
    </Section>
  );
}
