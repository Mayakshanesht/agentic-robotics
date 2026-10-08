import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker } from "@/components/site/ui";
import { Traction } from "@/components/site/Traction";
import { PilotToSelfServe } from "@/components/site/PilotToSelfServe";
import { BOOK_A_PILOT_PATH, CONTACT_EMAIL } from "@/data/company";

export default function PilotsPage() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  }, [location]);

  return (
    <PageShell
      title="Pilots · CloudBee Robotics"
      description="Explore a focused CloudBee Robotics pilot for your industrial task. Discuss your robot, agree the scope and review the outcome with our team."
      path="/pilots"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Pilots</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              Start with one task. Plan your next step.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              A pilot starts with your task, your robot and your operational goals. Agree the scope with our team,
              assess the result and use it to guide the next step.
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

      <Traction />
      <PilotToSelfServe />

    </PageShell>
  );
}
