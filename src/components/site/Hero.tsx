import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { BOOK_A_PILOT } from "@/components/Navbar";
import { Kicker } from "@/components/site/ui";
import pitchPhoto from "@/assets/events/pitch.jpg";
import ideationPhoto from "@/assets/ideation-pitch.jpg";

type Slide = { src: string; poster: string; tag: string; still?: boolean };

/** Our own footage and photos only. Each clip is silent and carries no text of its own. */
const slides: Slide[] = [
  { src: "/media/g1-walk-hero.mp4", poster: "/media/g1-walk-hero-poster.jpg", tag: "A Unitree G1 walking our own lab, in its twin" },
  { src: "/media/twin-room.mp4", poster: "/media/twin-room-poster.jpg", tag: "One phone video of your cell, rebuilt as a twin" },
  { src: "/media/dataset-generation.mp4", poster: "/media/dataset-generation-poster.jpg", tag: "The same task, played again and again in the twin" },
  { src: "/media/contact-rich.mp4", poster: "/media/contact-rich-poster.jpg", tag: "Every sensor at once: cameras, depth, touch and force" },
  { src: pitchPhoto, poster: pitchPhoto, tag: "Pitching at the Deloitte Problem-Solution Fit final", still: true },
  { src: ideationPhoto, poster: ideationPhoto, tag: "At the RWTH Innovation Ideation programme", still: true },
];

const SLIDE_MS = 8000;
const chips = ["Robot arms", "Humanoids", "Dexterous hands"];

export function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [idx, paused, reduce]);

  const current = slides[idx];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-24 lg:min-h-[calc(100svh-5rem)] lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          {reduce || current.still ? (
            <motion.img
              key={current.src}
              src={reduce ? slides[0].poster : current.src}
              alt=""
              aria-hidden
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <motion.video
              key={current.src}
              src={current.src}
              poster={current.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/92 to-[#F8FAFC]/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/80" />
      </div>

      <div className="section-container w-full pb-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <Kicker>The capability factory for agentic physical AI</Kicker>
          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-5xl lg:text-[3.75rem]">
            Anyone describes a task. <span className="text-primary">Any robot learns it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-foreground">
            The self-improving OS for robotics, powered by contact-rich synthetic data built from one video of your work
            cell.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#13233B]">
            Describe the task. We help build the skill for your robot, in your own work cell. No R&amp;D team needed on
            your side.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-bold uppercase tracking-[3px] text-primary">Show it your way</span>
            {["Text", "Teleoperation", "Video demo"].map((w) => (
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
              to="/pilots#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-white/90 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition-colors hover:bg-secondary"
            >
              Join the web app waitlist
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full border border-border bg-white/85 px-3.5 py-1.5 text-sm text-[#13233B] backdrop-blur">
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            RWTH Aachen spin-off · EXIST grant funded · WestAI compute grant
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="section-container flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/85 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {current.tag}
          </span>
          <div className="flex flex-1 items-center gap-2" role="tablist" aria-label="Hero clips">
            {slides.map((s, i) => (
              <button
                key={s.src}
                role="tab"
                aria-selected={i === idx}
                aria-label={s.tag}
                onClick={() => setIdx(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="relative h-1 max-w-24 flex-1 overflow-hidden rounded-full bg-foreground/15"
              >
                <motion.span
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: i < idx ? "100%" : "0%" }}
                  animate={{ width: i === idx ? (reduce || paused ? "100%" : ["0%", "100%"]) : i < idx ? "100%" : "0%" }}
                  transition={i === idx && !reduce && !paused ? { duration: SLIDE_MS / 1000, ease: "linear" } : { duration: 0.3 }}
                />
              </button>
            ))}
          </div>
          <a
            href="#see-it-work"
            aria-label="Scroll to the walkthrough"
            className="hidden items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            Watch it work <ChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
