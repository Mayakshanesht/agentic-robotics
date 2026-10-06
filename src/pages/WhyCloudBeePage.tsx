import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { ProblemAnswer } from "@/components/site/ProblemAnswer";
import { WhyCloudBee } from "@/components/site/WhyCloudBee";
import { FasterCheaper } from "@/components/site/anim/FasterCheaper";
import { BOOK_A_PILOT_MAILTO, robotFamilies } from "@/data/company";

const families = [
  { name: "Robot arms", body: "Pick, place, insert and assemble tasks, including steps that depend on contact rather than vision alone." },
  { name: "Humanoids", body: "Two-handed tasks and longer sequences, where a step may need to be checked and repeated before the next one starts." },
  { name: "Dexterous hands", body: "Handling that depends on grip and force, where small corrections decide whether the task succeeds." },
];

export default function WhyCloudBeePage() {
  return (
    <PageShell
      title="Why CloudBee · CloudBee Robotics"
      description="Others solve one piece. We close the whole loop: data with touch and force, a model adapted to your cell, and a skill that corrects itself while it runs."
      path="/why-cloudbee"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Why CloudBee</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              One loop, instead of five separate problems.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              Teaching a robot by hand costs months and specialists. We change where the work happens, so a new skill
              costs weeks and one engineer on your side.
            </p>
            <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </a>
          </FadeUp>
        </div>
      </section>

      <ProblemAnswer />
      <WhyCloudBee />

      <Section className="border-t border-border bg-white">
        <FadeUp className="max-w-3xl">
          <Kicker>Faster and cheaper</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            The same task, at a different scale of effort.
          </h2>
        </FadeUp>
        <div className="mt-10">
          <FasterCheaper />
        </div>
      </Section>

      <Section className="border-t border-border">
        <FadeUp className="max-w-3xl">
          <Kicker>Where it fits</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            The robots you already have.
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {families.map((f, i) => (
            <FadeUp key={f.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-foreground">{f.name}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-7 text-sm text-muted-foreground">{robotFamilies.join(" · ")} and other robots on request.</p>
      </Section>
    </PageShell>
  );
}
