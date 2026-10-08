import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Target } from "lucide-react";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { BOOK_A_PILOT_PATH } from "@/data/company";

export function SeeItWork() {
  return (
    <Section id="see-it-work" className="border-t border-border">
      <FadeUp className="grid items-center gap-8 rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_auto] lg:p-10">
        <div className="max-w-3xl">
          <Kicker>Explore a pilot</Kicker>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            What should your robot do next?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
            Tell us about the task, your robot and your production goals. We can discuss the opportunity and
            what a focused pilot would involve.
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-primary">
            <span className="inline-flex items-center gap-2"><MessageSquare size={18} aria-hidden /> Talk directly to our team</span>
            <span className="inline-flex items-center gap-2"><Target size={18} aria-hidden /> Start with one defined task</span>
          </div>
        </div>
        <Link to={BOOK_A_PILOT_PATH} className="btn-pilot w-fit px-7 py-3.5 text-base">Book a pilot <ArrowRight size={18} aria-hidden /></Link>
      </FadeUp>
    </Section>
  );
}
