import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotHumanoid from "@/assets/hero/robot-humanoid.jpg";
import robotAmr from "@/assets/hero/robot-amr.jpg";

type Slide =
  | { kind: "video"; src: string; eyebrow: string; headline: string; caption: string }
  | { kind: "image"; src: string; eyebrow: string; headline: string; caption: string };

const slides: Slide[] = [
  {
    kind: "video",
    src: dataforgeVideo.url,
    eyebrow: "DataForge",
    headline: "Synthetic scenarios. Infinite edge cases.",
    caption: "Scalable 4D world generation — the long tail, solved before deployment.",
  },
  {
    kind: "image",
    src: robotHumanoid,
    eyebrow: "Humanoids",
    headline: "One OS. Any embodiment.",
    caption: "From Unitree G1 humanoids to industrial arms — one runtime, one skill library.",
  },
  {
    kind: "video",
    src: modellabVideo.url,
    eyebrow: "ModelLab",
    headline: "Multimodal datasets. Embodied models.",
    caption: "RGB · Depth · Tactile · F/T · LiDAR — fused into VLA and world models.",
  },
  {
    kind: "image",
    src: robotArm,
    eyebrow: "Manipulation",
    headline: "Dexterous, safety-aware, deployable.",
    caption: "UR cobots, Franka arms, custom 6/7-DoF — onboarded via ROS 2.",
  },
  {
    kind: "video",
    src: agentOsVideo.url,
    eyebrow: "AgentOS",
    headline: "Autonomous capability execution OS.",
    caption: "Long-horizon tasks, failure recovery, continuous re-planning at runtime.",
  },
  {
    kind: "image",
    src: robotAmr,
    eyebrow: "Mobility",
    headline: "Heterogeneous fleets. One brain.",
    caption: "AMRs, manipulators and humanoids coordinated through a single autonomous OS.",
  },
];

const AUTOPLAY_MS = 6000;

export function HeroSection() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx, total]);

  const current = slides[idx];

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-24 lg:pt-28 pb-12">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent-blue/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-accent-green/15 blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-8 lg:mb-10"
        >
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-5">
            Build, Train and{" "}
            <span className="text-gradient-blue">Deploy Physical AI.</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Describe a task. CloudBee generates data, trains models, and deploys agents — continuously.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-pilot text-base px-7 py-3">
              Book Demo <ArrowRight size={16} />
            </Link>
            <a
              href="#provide"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-accent-blue/40 text-foreground hover:bg-accent-blue/10 hover:border-accent-blue/70 transition-all bg-background/40 backdrop-blur"
            >
              <Play size={14} /> See the Platform
            </a>
          </div>
        </motion.div>

        {/* Unified carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-accent-blue/25 shadow-[0_30px_80px_-20px_hsl(210_100%_56%/0.4)] bg-surface">
            <AnimatePresence mode="sync">
              {current.kind === "video" ? (
                <motion.video
                  key={`v-${idx}`}
                  src={current.src}
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
              ) : (
                <motion.img
                  key={`i-${idx}`}
                  src={current.src}
                  alt={current.headline}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10 pointer-events-none" />

            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
              <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
              {current.eyebrow}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`cap-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute left-6 right-6 bottom-6 lg:left-10 lg:right-10 lg:bottom-10"
              >
                <div className="font-display font-bold text-2xl lg:text-4xl leading-tight text-foreground drop-shadow mb-2 max-w-3xl">
                  {current.headline}
                </div>
                <div className="text-sm lg:text-base text-foreground/85 leading-snug max-w-2xl">
                  {current.caption}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5">
            {slides.map((s, i) => (
              <button
                key={i}
                aria-label={`Show ${s.eyebrow}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-accent-blue" : "w-5 bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
