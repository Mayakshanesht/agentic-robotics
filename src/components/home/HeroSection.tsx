import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotHumanoid from "@/assets/hero/robot-humanoid.jpg";
import robotAmr from "@/assets/hero/robot-amr.jpg";

type Slide =
  | { kind: "video"; src: string; tag: string; label: string }
  | { kind: "image"; src: string; tag: string; label: string };

const slides: Slide[] = [
  { kind: "video", src: agentOsVideo.url, tag: "AgentOS", label: "Autonomous runtime" },
  { kind: "video", src: dataforgeVideo.url, tag: "DataForge", label: "Synthetic 4D data" },
  { kind: "image", src: robotHumanoid, tag: "Humanoids", label: "Unitree G1" },
  { kind: "video", src: modellabVideo.url, tag: "ModelLab", label: "VLA · World Models" },
  { kind: "image", src: robotArm, tag: "Manipulation", label: "Dexterous skills" },
  { kind: "image", src: robotAmr, tag: "Fleets", label: "Heterogeneous coordination" },
];

const AUTOPLAY_MS = 5000;

const chips = ["VLA", "World Models", "Synthetic 4D", "Failure Recovery", "EU AI Act"];

export function HeroSection() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, total]);

  const current = slides[idx];

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-24 lg:pt-28 pb-16 lg:pb-24">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-accent-green/15 blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — compact text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 backdrop-blur mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/80">
                Agentic Physical AI
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.98] tracking-tight mb-6">
              The Autonomous{" "}
              <span className="text-gradient-blue">Agentic OS</span>{" "}
              for Physical AI.
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-7 max-w-md">
              Multimodal synthetic data + multimodal model training. Long-horizon execution with runtime recovery.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/contact" className="btn-pilot text-base px-6 py-3">
                Book Demo <ArrowRight size={16} />
              </Link>
              <a
                href="#provide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all"
              >
                See Platform
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-surface/40 text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — large carousel, graphic-first */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[5/6] rounded-3xl overflow-hidden border border-accent-blue/25 shadow-[0_40px_100px_-30px_hsl(210_100%_56%/0.55)] bg-surface">
              <AnimatePresence mode="sync">
                {current.kind === "video" ? (
                  <motion.video
                    key={`v-${idx}`}
                    src={current.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <motion.img
                    key={`i-${idx}`}
                    src={current.src}
                    alt={current.tag}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>

              {/* subtle bottom fade for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

              {/* tag pill */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.2em] text-accent-green border border-accent-green/30">
                <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                {current.tag}
              </div>

              {/* slide counter */}
              <div className="absolute top-5 right-5 text-[10px] font-mono tracking-wider text-foreground/70 bg-background/50 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-border">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </div>

              {/* minimal label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${idx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-6 bottom-6 right-6"
                >
                  <div className="font-display font-semibold text-xl lg:text-2xl text-foreground drop-shadow">
                    {current.label}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* progress bar dots */}
            <div className="flex items-center gap-1.5 mt-5">
              {slides.map((s, i) => (
                <button
                  key={i}
                  aria-label={`Show ${s.tag}`}
                  onClick={() => setIdx(i)}
                  className="relative h-1 rounded-full overflow-hidden flex-1 bg-foreground/10"
                >
                  <span
                    className={`absolute inset-y-0 left-0 bg-accent-blue transition-all ${
                      i < idx ? "w-full" : i === idx ? "w-full animate-[progress_5s_linear]" : "w-0"
                    }`}
                    style={
                      i === idx
                        ? { animation: `progress ${AUTOPLAY_MS}ms linear` }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
