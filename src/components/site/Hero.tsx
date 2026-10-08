import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Pause, Play } from "lucide-react";
import { BOOK_A_PILOT } from "@/components/Navbar";
import { Kicker } from "@/components/site/ui";
import pitchPhoto from "@/assets/events/pitch.jpg";
import ideationPhoto from "@/assets/ideation-pitch.jpg";

type Slide = { src: string; tag: string };

/** Public event photography keeps the focus on the team and company. */
const slides: Slide[] = [
  { src: pitchPhoto, tag: "Pitching at the Deloitte Problem-Solution Fit final" },
  { src: ideationPhoto, tag: "At the RWTH Innovation Ideation programme" },
];

const SLIDE_MS = 8000;

export function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pauseRequested, setPauseRequested] = useState(false);

  useEffect(() => {
    if (reduce || paused || pauseRequested) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [idx, paused, pauseRequested, reduce]);

  const current = slides[idx];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-24 lg:min-h-[calc(100svh-5rem)] lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.img
            key={current.src}
            src={current.src}
            alt=""
            aria-hidden
            initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/92 to-[#F8FAFC]/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/80" />
      </div>

      <div className="section-container w-full pb-40 sm:pb-32 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <Kicker>Robotics for industry</Kicker>
          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-[3.75rem]">
            Describe the task. <span className="text-primary">Deploy the capability.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-foreground">
            Put industrial robots to work.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#13233B]">
            Start with a focused pilot for your robot, your parts and your production goals.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {["Handling", "Assembly", "Industrial automation"].map((w) => (
              <span key={w} className="rounded-full border border-primary/30 bg-white/85 px-3 py-1 text-sm text-[#13233B] backdrop-blur">
                {w}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to={BOOK_A_PILOT} className="btn-pilot px-7 py-3.5 text-base">
              Book a pilot
            </Link>
            <Link
              to="#customer-industries"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white/90 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-colors hover:bg-secondary"
            >
              Explore your industry
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            RWTH Aachen spin-off · Supported by EXIST and WestAI
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="section-container flex flex-wrap items-center gap-4 pr-32 sm:pr-8">
          <span className="hidden items-center gap-2 rounded-full border border-primary/30 bg-white/85 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {current.tag}
          </span>
          <div className="flex max-w-44 flex-1 items-center gap-2" role="group" aria-label="Company photos">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-pressed={i === idx}
                aria-label={s.tag}
                onClick={() => setIdx(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className="relative flex h-10 max-w-24 flex-1 items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="relative h-1 w-full overflow-hidden rounded-full bg-foreground/15">
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: i < idx ? "100%" : "0%" }}
                    animate={{ width: i === idx ? (reduce || paused || pauseRequested ? "100%" : ["0%", "100%"]) : i < idx ? "100%" : "0%" }}
                    transition={i === idx && !reduce && !paused && !pauseRequested ? { duration: SLIDE_MS / 1000, ease: "linear" } : { duration: 0.3 }}
                  />
                </span>
              </button>
            ))}
          </div>
          <a
            href="#see-it-work"
            aria-label="Explore our pilot programme"
            className="hidden items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            Explore a pilot <ChevronDown size={14} className="animate-bounce" />
          </a>
          {!reduce && (
            <button type="button" onClick={() => setPauseRequested((value) => !value)} aria-label={pauseRequested ? "Play company photo slideshow" : "Pause company photo slideshow"} className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-white/85 text-primary">
              {pauseRequested ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
