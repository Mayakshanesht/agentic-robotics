import { PageShell } from "@/components/PageShell";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { HowItWorks } from "@/components/site/HowItWorks";
import { BOOK_A_PILOT_PATH, CONTACT_EMAIL, robotFamilies, sectors } from "@/data/company";

const fromYou = [
  "The task, described in plain words",
  "The robot, parts and work cell involved",
  "The operational requirements and success criteria",
  "A contact from your engineering or operations team",
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How it works · CloudBee Robotics"
      description="Explore the CloudBee Robotics pilot journey: discuss your industrial task, agree the scope, work with our team and review the outcome."
      path="/how-it-works"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>How it works</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              Four steps from your task to a focused pilot.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              Bring us your automation goal. We work with you to define a practical pilot and agree how to assess the outcome.
            </p>
            <Link to={BOOK_A_PILOT_PATH} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </Link>
          </FadeUp>
        </div>
      </section>

      <div aria-hidden="true">
        {["web-app", "digital-twin", "contact-rich", "walking-twin", "dataset", "trained-model"].map((id) => (
          <span key={id} id={id} className="block h-0 scroll-mt-24" />
        ))}
      </div>
      <HowItWorks />

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <h2 className="text-xl font-bold text-foreground">What we need from you</h2>
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
            <h2 className="text-xl font-bold text-foreground">Robots we work with</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {robotFamilies.map((r) => (
                <span key={r} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-[#13233B]">
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Sectors we work in: {sectors.join(", ").toLowerCase()}.</p>
          </FadeUp>
        </div>
      </Section>

      <section className="border-t border-border bg-white py-16 lg:py-20">
        <div className="section-container">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <h2 className="text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">Ready to discuss your task?</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#13233B]">Bring your automation goal to our team and explore a focused pilot.</p>
            <Link to={BOOK_A_PILOT_PATH} className="btn-pilot mt-7 px-7 py-3.5 text-base">Book a pilot</Link>
            <p className="mt-5 text-sm text-muted-foreground">
              Or write to <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
