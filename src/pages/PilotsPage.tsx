import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker } from "@/components/site/ui";
import { Traction } from "@/components/site/Traction";
import { PilotToSelfServe } from "@/components/site/PilotToSelfServe";
import { BOOK_A_PILOT_MAILTO } from "@/data/company";

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
      description="Pilots running with industrial companies on humanoids and robot arms. Start with one skill in your own cell in about 2 weeks, then scale to every robot."
      path="/pilots"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Pilots</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              Start with one skill. Scale to every robot.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              A pilot builds your first skill in your own cell, with your robot and your parts. What works there is what
              we scale.
            </p>
            <a href={BOOK_A_PILOT_MAILTO} className="btn-pilot mt-8 px-7 py-3.5 text-base">
              Book a pilot
            </a>
          </FadeUp>
        </div>
      </section>

      <Traction />
      <PilotToSelfServe />

    </PageShell>
  );
}
