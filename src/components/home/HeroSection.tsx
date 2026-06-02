import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import agentVideo from "@/assets/hero/humanoid-pallet.mp4";
import sceneVideo from "@/assets/scene_generation_demo.mp4";
import humanoidPallet2 from "@/assets/videos/humanoid-pallet-2.mp4.asset.json";

type Reel = { src: string; eyebrow: string; caption: string };

const reels: Reel[] = [
  { src: agentVideo, eyebrow: "AgentOS", caption: "Humanoid executing long-horizon palletizing." },
  { src: sceneVideo, eyebrow: "DataForge", caption: "Synthetic 4D scenario generation." },
  { src: humanoidPallet2.url, eyebrow: "Teleop → Autonomy", caption: "From teleoperated demo to autonomous policy." },
];

const AUTOPLAY_MS = 7500;

export function HeroSection() {
  const [idx, setIdx] = useState(0);
  const total = reels.length;

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, total]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient pt-20">
      {/* Ambient glow */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-accent-green/15 blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-accent-blue/30 bg-background/60 backdrop-blur text-[11px] font-mono uppercase tracking-wider text-accent-blue">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-glow-pulse" />
              Physical AI · Aachen, Germany
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-6">
              Build, Train and{" "}
              <span className="text-gradient-blue">Deploy Physical AI.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
              Describe a task. CloudBee generates data, trains models, deploys agents, and continuously improves robotic systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-pilot text-base px-7 py-3">
                Book Demo <ArrowRight size={16} />
              </Link>
              <a
                href="#demo-gallery"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-accent-blue/40 text-foreground hover:bg-accent-blue/10 hover:border-accent-blue/70 transition-all bg-background/40 backdrop-blur"
              >
                <Play size={14} /> Watch Demo
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80">
              <span>Backed by EXIST · RWTH Aachen</span>
              <span className="hidden sm:inline w-px h-3 bg-border" />
              <span className="hidden sm:inline">Built at Collective Incubator</span>
            </div>
          </motion.div>

          {/* Right — Video carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent-blue/25 shadow-[0_30px_80px_-20px_hsl(210_100%_56%/0.4)] bg-surface">
              <AnimatePresence mode="sync">
                <motion.video
                  key={idx}
                  src={reels[idx].src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />

              {/* Eyebrow chip */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
                <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                Live · {reels[idx].eyebrow}
              </div>

              {/* Caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cap-${idx}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-4 right-4 bottom-4"
                >
                  <div className="text-xs font-mono text-foreground/90">{reels[idx].caption}</div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Reel dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {reels.map((r, i) => (
                <button
                  key={r.src}
                  aria-label={`Show ${r.eyebrow} reel`}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-accent-blue" : "w-5 bg-foreground/20 hover:bg-foreground/40"}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
