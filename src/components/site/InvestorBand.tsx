import { Link } from "react-router-dom";
import { CONTACT_EMAIL, REQUEST_DECK_PATH } from "@/data/company";
import { FadeUp } from "@/components/site/ui";

const founderLinkedIn = "https://www.linkedin.com/in/mayur-waghchoure/";

export function InvestorBand() {
  return (
    <section id="investors" className="scroll-mt-24 border-y border-border bg-[#E6F5F3]">
      <div className="section-container py-12">
        <FadeUp className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xl font-semibold text-foreground">
              We're raising our pre-seed round.{" "}
              <span className="font-normal text-[#13233B]">Investors: request our deck and a live demo.</span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-[#13233B]">
              You reach the founder directly, not a form queue. Mayur Waghchoure, founder and CEO:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              ·{" "}
              <a href={founderLinkedIn} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                LinkedIn
              </a>{" "}
              ·{" "}
              <Link to="/investors" className="font-semibold text-primary hover:underline">
                what we publish
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to={REQUEST_DECK_PATH} className="btn-pilot px-7 py-3.5 text-base">
              Request the deck
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
