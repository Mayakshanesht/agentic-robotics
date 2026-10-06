import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { BOOK_A_PILOT_MAILTO, MEDIA, robotFamilies, sectors } from "@/data/company";

const outcomes = [
  {
    title: "Training data without the demo marathon",
    body: "Data with touch and force is generated on GPUs from your task description and a short video of your cell, instead of being recorded demo by demo.",
  },
  {
    title: "A model adapted to your cell",
    body: "We adapt the best available open robot model to your robot and your task, so your team does not start from zero.",
  },
  {
    title: "Long tasks that recover",
    body: "Tasks are split into subtasks that check themselves and recover when something slips, instead of stopping the line.",
  },
  {
    title: "It improves while it runs",
    body: "Every run shows what failed. Data for exactly that case is generated, and the skill is redeployed.",
  },
];

const fromYou = [
  "The task, described in plain words",
  "Optionally a phone video of your cell, or a few demonstrations",
  "Access to the cell during the pilot",
  "One engineer on your side, not an R&D team",
];

export default function Product() {
  return (
    <PageShell
      title="What you get · CloudBee Robotics"
      description="A working skill on your robot, in your own work cell: data with touch and force generated on GPUs, an adapted open robot model, and a runtime that recovers and keeps improving."
      path="/product"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>What you get</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              A working skill on your robot, in your own work cell.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              You describe the task. We help build the skill, test it, and keep it improving once it runs. No R&amp;D team
              needed on your side.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot px-7 py-3.5 text-base">
                Book a pilot
              </a>
              <Link
                to="/#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                See how it works
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-5 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                <span className="block h-1 w-10 rounded-full bg-primary" />
                <h2 className="mt-5 text-xl font-bold text-foreground">{o.title}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{o.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <Kicker>What we need from you</Kicker>
            <ul className="mt-6 space-y-3">
              {fromYou.map((f) => (
                <li key={f} className="flex gap-3 text-[17px] leading-relaxed text-[#13233B]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Kicker>Where it runs</Kicker>
            <div className="mt-6 flex flex-wrap gap-2">
              {robotFamilies.map((r) => (
                <span key={r} className="rounded-full border border-border bg-[#F8FAFC] px-3.5 py-1.5 text-sm text-[#13233B]">
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Sectors we work in: {sectors.join(", ").toLowerCase()}.</p>
          </FadeUp>
        </div>
      </Section>

      <Section className="border-t border-border">
        <FadeUp className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-card)]">
          <Link to="/#see-it-work" className="block">
            <img
              src={MEDIA.walkthroughPoster}
              alt="Watch the walkthrough: from a described task to robot arms completing it in the CloudBee lab"
              className="w-full"
              loading="lazy"
            />
          </Link>
        </FadeUp>
        <FadeUp className="mt-6 text-center">
          <Link to="/#see-it-work" className="text-base font-semibold text-primary hover:underline">
            Watch the full walkthrough
          </Link>
        </FadeUp>
      </Section>
    </PageShell>
  );
}
