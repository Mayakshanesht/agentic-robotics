import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CapabilityScene = lazy(() => import("@/components/three/CapabilityScene"));
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import humanoidPallet from "@/assets/videos/humanoid-pallet-2.mp4.asset.json";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotAmr from "@/assets/hero/robot-amr.jpg";

type Slide =
  | { kind: "video"; src: string; tag: string; label: string }
  | { kind: "image"; src: string; tag: string; label: string };

const slides: Slide[] = [
  { kind: "video", src: agentOsVideo.url, tag: "Capability Compiler", label: "Process → Capability Graph" },
  { kind: "image", src: robotArm, tag: "Safety & Validation", label: "Capability → Safety + Validation Graph" },
  { kind: "video", src: dataforgeVideo.url, tag: "Synthetic Experience", label: "Capability → Multimodal Experience" },
  { kind: "video", src: modellabVideo.url, tag: "Foundation Models", label: "Experience → Learning" },
  { kind: "video", src: humanoidPallet.url, tag: "Autonomous Deployment", label: "Models → Robots & Agents" },
  { kind: "image", src: robotAmr, tag: "Continuous Improvement", label: "Execution → Feedback → Capability" },
];

const AUTOPLAY_MS = 5600;

const flow = [
  "Understand",
  "Capabilities",
  "Safety",
  "Experience",
  "Models",
  "Autonomy",
];

export function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    <section className="relative overflow-hidden bg-hero-gradient pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-28">
      <div className="absolute inset-0 grid-bg opacity-[0.12] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[320px] sm:w-[560px] h-[320px] sm:h-[560px] rounded-full bg-accent-blue/20 blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] rounded-full bg-accent-green/15 blur-[120px] sm:blur-[160px] pointer-events-none" />

      {/* Live WebGL capability graph — hidden on small screens to keep hero calm */}
      <div className="hidden md:flex absolute inset-x-0 top-0 h-[640px] items-center justify-center pointer-events-none">
        <div className="conic-halo absolute w-[520px] h-[520px] rounded-full blur-[90px] opacity-30" />
        <Suspense fallback={null}>
          <CapabilityScene className="absolute inset-0 w-full h-full opacity-70 [mask-image:radial-gradient(closest-side,#000_55%,transparent)]" />
        </Suspense>
      </div>

      <div className="section-container relative z-10 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/85">
              Capability Engineering Platform · Physical AI
            </span>
          </div>
        </motion.div>

        {/* Centered headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-bold text-center mx-auto max-w-5xl text-[2rem] sm:text-5xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-foreground"
        >
          The <span className="text-gradient-blue">Capability Factory</span>
          <br className="hidden sm:block" /> for Agentic Physical AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 sm:mt-6 text-center mx-auto max-w-2xl text-[15px] sm:text-base lg:text-lg text-muted-foreground leading-relaxed px-2 sm:px-0"
        >
          Turn industrial processes into validated, self-improving robot
          capabilities — deployed on the hardware you already own.
        </motion.p>

        {/* Value flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 sm:mt-8 hidden sm:flex flex-wrap items-center justify-center gap-x-2 gap-y-2"
        >
          {flow.map((f, i) => (
            <div key={f} className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/80 px-2.5 py-1 rounded-full border border-border bg-surface/40">
                {f}
              </span>
              {i < flow.length - 1 && (
                <span className="text-accent-blue/50 text-xs">→</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto"
        >
          <Link to="/contact" className="btn-pilot text-base px-6 sm:px-7 py-3.5 justify-center">
            Book a Demo <ArrowRight size={16} />
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-sm border border-foreground/15 text-foreground hover:bg-foreground/5 transition-all"
          >
            Explore Platform
          </Link>
        </motion.div>

        {/* Carousel - cinematic, full-bleed feel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-10 sm:mt-14 lg:mt-20 relative -mx-4 sm:mx-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] sm:rounded-2xl lg:rounded-3xl overflow-hidden border-y sm:border border-accent-blue/20 shadow-[0_40px_100px_-40px_hsl(210_100%_56%/0.45)] sm:shadow-[0_60px_140px_-40px_hsl(210_100%_56%/0.55)] bg-surface">
            <AnimatePresence mode="sync">
              {current.kind === "video" ? (
                <motion.video
                  ref={videoRef}
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
                  transition={{ duration: 1.1, ease: "easeOut" }}
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
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </AnimatePresence>

            {/* gradient veils */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/85 via-background/30 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/40 to-transparent pointer-events-none" />

            {/* tag */}
            <div className="absolute top-3 sm:top-5 left-3 sm:left-5 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/65 backdrop-blur-md text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.22em] text-accent-green border border-accent-green/30">
              <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
              {current.tag}
            </div>

            {/* counter */}
            <div className="absolute top-3 sm:top-5 right-3 sm:right-5 text-[9px] sm:text-[10px] font-mono tracking-wider text-foreground/80 bg-background/55 backdrop-blur-md px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border border-border">
              {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>

            {/* caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cap-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-4 sm:left-6 lg:left-10 bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-10"
              >
                <div className="font-display font-semibold text-base sm:text-xl lg:text-3xl text-foreground drop-shadow max-w-2xl leading-snug">
                  {current.label}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* progress segments */}
          <div className="flex items-center gap-1.5 mt-4 sm:mt-5 px-4 sm:px-1">
            {slides.map((s, i) => (
              <button
                key={i}
                aria-label={`Show ${s.tag}`}
                onClick={() => setIdx(i)}
                className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-foreground/10"
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-accent-blue ${
                    i < idx ? "w-full" : i === idx ? "" : "w-0"
                  }`}
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

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
