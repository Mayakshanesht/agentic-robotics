import { CONTACT_EMAIL } from "@/data/company";
import { FadeUp } from "@/components/site/ui";

const deckMailto = `mailto:${CONTACT_EMAIL}?subject=CloudBee%20investor%20deck`;

export function InvestorBand() {
  return (
    <section id="investors" className="scroll-mt-24 border-y border-border bg-[#E6F5F3]">
      <div className="section-container py-12">
        <FadeUp className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-xl font-semibold text-foreground">
            We're raising our pre-seed round.{" "}
            <span className="font-normal text-[#13233B]">Investors: request our deck and a demo.</span>
          </p>
          <a href={deckMailto} className="btn-pilot shrink-0 px-7 py-3.5 text-base">
            Request the deck
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
