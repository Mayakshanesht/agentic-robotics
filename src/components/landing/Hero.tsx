import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import humanoidPallet from "@/assets/videos/humanoid-pallet-2.mp4.asset.json";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotAmr from "@/assets/hero/robot-amr.jpg";

type Slide =
  | { kind: "video"; src: string; tag: string; label: string }
  | { kind: "image"; src: string; tag: string; label: string };

const slides: Slide[] = [
  { kind: "video", src: agentOsVideo.url, tag: "Capability Compiler", label: "Any process → a validated capability graph" },
  { kind: "image", src: robotArm, tag: "Safety Validation", label: "Safety-validated pick & place" },
  { kind: "video", src: dataforgeVideo.url, tag: "Synthetic Experience", label: "Multimodal worlds — generated & scaled" },
  { kind: "video", src: modellabVideo.url, tag: "Multimodal AI Models", label: "Our own models, trained per task" },
  { kind: "video", src: humanoidPallet.url, tag: "Autonomous Agentic OS", label: "Robots running complex tasks" },
  { kind: "image", src: robotAmr, tag: "Self-Improving Fleet", label: "Better with every run · 6G-connected" },
];

const AUTOPLAY_MS = 4800;

const chips = [
  "Capability Compiler",
  "Synthetic Experience",
  "Multimodal Models",
  "Safety Validation",
  "Self-Improving Loop",
  "6G",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, total, paused]);

  const current = slides[idx];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-40 -left-24 w-[600px] h-[600px] rounded-full bg-accent-blue/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[170px] pointer-events-none" />

      <div className="section-container relative z-10 w-full pt-28 pb-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-background/40 backdrop-blur mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/80">
                Physical AI · Autonomous Agentic OS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-display font-bold leading-[0.95] tracking-tight text-[2.9rem] sm:text-6xl lg:text-[4.6rem]"
            >
              The <span className="text-gradient-blue">Capability Factory</span> for Agentic Physical AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Turn any process into safety-validated capabilities — with multimodal synthetic
              experience at scale, our own task AI models, and a self-improving, 6G-connected fleet
              run by an autonomous agentic OS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {chips.map((c) => (
                <span key={c} className="text-[11px] font-mono uppercase tracking-[0.12em] text-foreground/75 px-2.5 py-1 rounded-full border border-border bg-surface/40">
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="btn-pilot text-base px-7 py-3.5">
                Book a demo <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
              >
                See how it works <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right — auto-slide carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl lg:rounded-3xl overflow-hidden border border-accent-blue/20 shadow-[0_50px_120px_-40px_hsl(210_100%_56%/0.6)] bg-surface">
              <AnimatePresence mode="sync">
                {current.kind === "video" ? (
                  <motion.video
                    key={`v-${idx}`}
                    src={current.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <motion.img
                    key={`i-${idx}`}
                    src={current.src}
                    alt={current.tag}
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/90 via-background/30 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/65 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green border border-accent-green/30">
                <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                {current.tag}
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono tracking-wider text-foreground/80 bg-background/55 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-border">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-5 right-5 bottom-6"
                >
                  <div className="font-display font-semibold text-lg lg:text-2xl text-foreground drop-shadow">
                    {current.label}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* progress segments */}
            <div className="flex items-center gap-1.5 mt-4 px-1">
              {slides.map((s, i) => (
                <button
                  key={i}
                  aria-label={`Show ${s.tag}`}
                  onClick={() => setIdx(i)}
                  className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-foreground/10"
                >
                  <span
                    className={`absolute inset-y-0 left-0 bg-accent-blue ${i < idx ? "w-full" : i === idx ? "" : "w-0"}`}
                    style={
                      i === idx && !paused
                        ? { animation: `progress ${AUTOPLAY_MS}ms linear forwards` }
                        : i === idx
                        ? { width: "100%" }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}</style>
    </section>
  );
}
