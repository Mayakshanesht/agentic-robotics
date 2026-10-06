import { useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { BOOK_A_PILOT } from "@/components/Navbar";
import { FadeUp, Kicker } from "@/components/site/ui";

const chips = ["Robot arms", "Humanoids", "Dexterous hands"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-hero-gradient pt-28 lg:pt-36">
      <div className="section-container pb-16 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeUp>
            <Kicker>The capability factory for agentic physical AI</Kicker>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-[3.75rem]">
              Anyone describes a task. <span className="text-primary">Any robot learns it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#13233B]">
              Describe the task. We help build the skill for your robot, in your own work cell. No R&amp;D team needed on
              your side.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={BOOK_A_PILOT} className="btn-pilot px-7 py-3.5 text-base">
                Book a pilot
              </a>
              <Link
                to="/pilots#waitlist"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Join the web app waitlist
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span key={c} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-[#13233B]">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              RWTH Aachen spin-off · EXIST grant funded · WestAI compute grant
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-elevated)]">
              {reduce ? (
                <img
                  src="/media/hero-loop-poster.jpg"
                  alt="A humanoid robot in a generated digital twin of a work cell, placing a cup on a tray"
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <video
                  src="/media/hero-loop.mp4"
                  poster="/media/hero-loop-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="A humanoid robot in a generated digital twin of a work cell, placing a cup on a tray"
                  className="aspect-video w-full object-cover"
                />
              )}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Generated training data in a digital twin, then real robot arms in our lab completing the task.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
