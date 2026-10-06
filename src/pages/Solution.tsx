import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { BOOK_A_PILOT_MAILTO, sectors } from "@/data/company";

const families = [
  {
    name: "Robot arms",
    body: "Pick, place, insert and assemble tasks in a fixed cell, including steps that depend on contact rather than vision alone.",
  },
  {
    name: "Humanoids",
    body: "Two-handed tasks and longer sequences, where a step may need to be checked and repeated before the next one starts.",
  },
  {
    name: "Dexterous hands",
    body: "Handling that depends on grip and force, where small corrections decide whether the task succeeds.",
  },
];

const stages = [
  { title: "Pilot", body: "We build your first skill with you, in your cell, in about 2 weeks." },
  { title: "Self-improving OS", body: "It runs on every robot and keeps getting better." },
  { title: "Web app", body: "Describe new skills yourself, self-serve. First version: December 2026." },
];

export default function Solution() {
  return (
    <PageShell
      title="Where CloudBee fits · CloudBee Robotics"
      description="Skills for robot arms, humanoids and dexterous hands in industrial manufacturing, automotive, electronics, battery technology and logistics. Start with one pilot skill in your own work cell."
      path="/solution"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Where CloudBee fits</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              The robots you already have. The tasks you already run.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              We start with one task in one cell, prove it, then scale the same approach across your robots.
            </p>
            <div className="mt-8">
              <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot px-7 py-3.5 text-base">
                Book a pilot
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-5 lg:grid-cols-3">
          {families.map((f, i) => (
            <FadeUp key={f.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                <h2 className="text-xl font-bold text-foreground">{f.name}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-7 text-sm text-muted-foreground">Sectors we work in: {sectors.join(", ").toLowerCase()}.</p>
      </Section>

      <Section className="border-t border-border bg-white">
        <FadeUp className="max-w-3xl">
          <Kicker>How we work with you</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            Start with one skill. Scale to every robot.
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stages.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
                <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">Step {i + 1}</div>
                <h3 className="mt-3 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-8">
          <Link to="/#waitlist" className="text-base font-semibold text-primary hover:underline">
            Join the web app waitlist
          </Link>
        </FadeUp>
      </Section>
    </PageShell>
  );
}
