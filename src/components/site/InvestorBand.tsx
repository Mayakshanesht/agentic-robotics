import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "@/data/company";
import { FadeUp } from "@/components/site/ui";

const deckMailto = `mailto:${CONTACT_EMAIL}?subject=CloudBee%20investor%20deck`;
const callMailto = `mailto:${CONTACT_EMAIL}?subject=Intro%20call%20with%20CloudBee&body=Hi%20Mayur%2C%0A%0AI%27d%20like%20a%20short%20intro%20call.%20Here%20are%20a%20few%20times%20that%20work%20for%20me%3A%0A`;
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
            <a href={deckMailto} className="btn-pilot px-7 py-3.5 text-base">
              Request the deck
            </a>
            <a
              href={callMailto}
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-white/70"
            >
              Book a 20-minute call
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
