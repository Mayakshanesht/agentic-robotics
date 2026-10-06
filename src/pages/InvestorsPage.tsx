import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { Traction } from "@/components/site/Traction";
import { TeamStrip } from "@/components/site/TeamStrip";
import { FundingStrip } from "@/components/site/FundingStrip";
import { CONTACT_EMAIL, REQUEST_DECK_PATH } from "@/data/company";


const underNda = [
  "How the technology works, in technical detail",
  "Pilot results and the companies involved",
  "Commercial terms, plan and round detail",
];

export default function InvestorsPage() {
  return (
    <PageShell
      title="Investors · CloudBee Robotics"
      description="CloudBee Robotics is raising a pre-seed round. An RWTH Aachen spin-off with EXIST and WestAI funding, pilots with industrial companies and its own hardware lab in Aachen."
      path="/investors"
    >
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="section-container pb-14">
          <FadeUp className="max-w-3xl">
            <Kicker>Investors</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] lg:text-[3.25rem]">
              We're raising our pre-seed round.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#13233B]">
              An RWTH Aachen spin-off, funded by an EXIST grant and a WestAI compute grant, with pilots running at
              industrial companies and our own hardware lab in Aachen. Request our deck and a demo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to={REQUEST_DECK_PATH} className="btn-pilot px-7 py-3.5 text-base">
                Request the deck
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                See how it works
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Traction />

      <Section className="border-t border-border bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <Kicker>What is public</Kicker>
            <p className="mt-5 text-[17px] leading-relaxed text-[#13233B]">
              What we do, what a customer gets, which robots we work with, the sectors we serve and the stage we are at.
              All of it is on this site.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Lock size={15} /> Shared under NDA
              </div>
              <ul className="mt-4 space-y-2.5">
                {underNda.map((u) => (
                  <li key={u} className="flex gap-3 text-[15px] leading-relaxed text-[#13233B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {u}
                  </li>
                ))}
              </ul>
              <Link to={REQUEST_DECK_PATH} className="btn-pilot mt-6 w-full justify-center py-3">
                Request the deck
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      <FundingStrip />
      <TeamStrip />
    </PageShell>
  );
}
