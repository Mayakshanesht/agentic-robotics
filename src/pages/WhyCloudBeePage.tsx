import { PageShell } from "@/components/PageShell";
import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { WhyCloudBee } from "@/components/site/WhyCloudBee";
import { FasterCheaper } from "@/components/site/anim/FasterCheaper";
import { BOOK_A_PILOT_PATH, CONTACT_EMAIL, robotFamilies } from "@/data/company";

const families = [
  { name: "Robot arms", body: "Industrial handling and assembly tasks, including pick-and-place, insertion and part handling.", status: "Real robots in our lab" },
  { name: "Humanoids", body: "Exploring mobility and manipulation for industrial work.", status: "Simulation demonstrations" },
  { name: "Dexterous hands", body: "Exploring tool and part handling for practical robotics applications.", status: "Simulation demonstrations" },
];

export default function WhyCloudBeePage() {
  return (
    <PageShell
      title="Why CloudBee · CloudBee Robotics"
      description="Meet your robotics partner: an industrial focus, hands-on experience from RWTH Aachen and a focused pilot for your automation goal."
      path="/why-cloudbee"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Why CloudBee</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              Your next step in industrial robotics.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              Bring your operational goals to a robotics team with industry experience and its own hardware lab.
              Start with a focused pilot and use the outcome to guide your next step.
            </p>
            <Link to={BOOK_A_PILOT_PATH} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Or write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      <WhyCloudBee />

      <Section className="border-t border-border bg-white">
        <FadeUp className="max-w-3xl">
          <Kicker>A focused approach</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            Give your first pilot a clear purpose.
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
            Discuss the robot you have in mind.
          </h2>
        </FadeUp>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {families.map((f, i) => (
            <FadeUp key={f.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-foreground">{f.name}</h3>
                <div className="mt-2 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {f.status}
                </div>
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
