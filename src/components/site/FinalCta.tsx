import { BOOK_A_PILOT } from "@/components/Navbar";
import { FadeUp } from "@/components/site/ui";

export function FinalCta() {
  const toWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <h2 className="text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
            Describe the task. We help build the skill for your robot, in your own work cell.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={BOOK_A_PILOT} className="btn-pilot px-7 py-3.5 text-base">
              Book a pilot
            </a>
            <a
              href="#waitlist"
              onClick={toWaitlist}
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Join the waitlist
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
