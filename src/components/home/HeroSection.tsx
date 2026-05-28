import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import robotHumanoid from "@/assets/hero/robot-humanoid.jpg";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotAmr from "@/assets/hero/robot-amr.jpg";
import teamWorkshop from "@/assets/hero/team-workshop.jpeg";
import pitchIncubator from "@/assets/hero/pitch-incubator.jpeg";


type Slide = {
  image: string;
  /** CSS object-position to keep faces out of frame */
  position?: string;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  tag: string;
};

const slides: Slide[] = [
  {
    image: robotHumanoid,
    position: "center 30%",
    eyebrow: "Autonomous OS",
    title: (
      <>
        Operating System for{" "}
        <span className="text-gradient-blue">Agentic Physical AI.</span>
      </>
    ),
    body: "From task description to deployed intelligence on any robot — in days.",
    tag: "CloudBee Robotics · Aachen, Germany",
  },
  {
    image: robotArm,
    position: "center center",
    eyebrow: "Hardware Agnostic",
    title: (
      <>
        Humanoids, arms, AMRs —{" "}
        <span className="text-gradient-green">one platform.</span>
      </>
    ),
    body: "ROS 2 native. Bring your robot, describe the task, deploy a validated skill.",
    tag: "Pick · Assembly · Inspection · Logistics",
  },
  {
    image: robotAmr,
    position: "center center",
    eyebrow: "Real-World Deployment",
    title: (
      <>
        From simulation to{" "}
        <span className="text-gradient-blue">the warehouse floor.</span>
      </>
    ),
    body: "Synthetic 4D data · explainable VLA · long-horizon agents — engineered for safety.",
    tag: "Manufacturing · Logistics · Service Robotics",
  },
  {
    image: pitchIncubator,
    position: "center 22%",
    eyebrow: "Building in Public",
    title: (
      <>
        Backed by RWTH Aachen.{" "}
        <span className="text-gradient-green">EXIST funded.</span>
      </>
    ),
    body: "Engineers and researchers shipping the infrastructure layer for embodied AI.",
    tag: "Collective Incubator · RWTH Innovation",
  },
  {
    image: teamWorkshop,
    position: "center 18%",
    eyebrow: "The Skill Store",
    title: (
      <>
        Ask in plain language.{" "}
        <span className="text-gradient-blue">Download a robot skill.</span>
      </>
    ),
    body: "We generate the data, train the policy, deliver a ROS 2 node — ready to run.",
    tag: "Closed loop · prompt to deployed autonomy",
  },
];


const AUTOPLAY_MS = 6500;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const go = useCallback((next: number) => setIndex((next + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, total]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image crossfade with Ken Burns */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ opacity: { duration: 1.1 }, scale: { duration: AUTOPLAY_MS / 1000, ease: "linear" } }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ objectPosition: slide.position ?? "center center" }}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-accent-blue/30 bg-background/60 backdrop-blur text-xs font-mono text-accent-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-glow-pulse" />
                {slide.eyebrow}
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                {slide.title}
              </h1>

              <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed mb-5">
                {slide.body}
              </p>

              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 mb-7">
                {slide.tag}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link to="/contact" className="btn-pilot text-base px-7 py-3">
              Request a Pilot
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/product"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-accent-blue/40 text-foreground hover:bg-accent-blue/10 hover:border-accent-blue/70 transition-all bg-background/40 backdrop-blur"
            >
              Explore the Product
            </Link>
          </div>

          {/* Slide controls + progress */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="w-9 h-9 rounded-full border border-accent-blue/40 bg-background/60 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent-blue/10 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="w-9 h-9 rounded-full border border-accent-blue/40 bg-background/60 backdrop-blur flex items-center justify-center text-foreground hover:bg-accent-blue/10 transition-colors"
            >
              <ChevronRight size={16} />
            </button>

            <div className="flex items-center gap-2 ml-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className="group relative h-1.5 w-8 rounded-full bg-foreground/15 overflow-hidden"
                >
                  {i === index && !paused && (
                    <motion.span
                      key={`p-${index}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-accent-blue"
                    />
                  )}
                  {i === index && paused && (
                    <span className="absolute inset-y-0 left-0 w-full bg-accent-blue/70" />
                  )}
                </button>
              ))}
            </div>

            <span className="ml-auto text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 hidden sm:block">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
