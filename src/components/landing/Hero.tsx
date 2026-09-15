import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import sceneGenerationVideo from "@/assets/videos/humanoid-pallet-2.mp4.asset.json";
import videoToMotionVideo from "@/assets/videos/capability-compiler.mp4.asset.json";
import realRobotDemo from "@/assets/videos/cloudbee-demo.mp4.asset.json";

type Slide =
  | { kind: "video"; src: string; tag: string }
  | { kind: "image"; src: string; tag: string };

// Real product footage only. Tags describe what each clip actually shows.
const slides: Slide[] = [
  { kind: "video", src: realRobotDemo.url, tag: "AgenticOS · live on real robot arms" },
  { kind: "video", src: videoToMotionVideo.url, tag: "DataForge · human video → 3D object motion" },
  { kind: "video", src: sceneGenerationVideo.url, tag: "DataForge · task → simulation scene" },
  { kind: "video", src: dataforgeVideo.url, tag: "DataForge · scene variations at scale" },
  { kind: "video", src: modellabVideo.url, tag: "ModelLab · policy rollout in simulation" },
  { kind: "video", src: agentOsVideo.url, tag: "AgenticOS · task → execution graph" },
];

const AUTOPLAY_MS = 5200;

const chips = ["DataForge", "ModelLab Copilot", "AgenticOS", "KineBridge", "Safety & validation"];

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
    <section className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden">
      {/* full-bleed auto-sliding background */}
      <div className="absolute inset-0">
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
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <motion.img
              key={`i-${idx}`}
              src={current.src}
              alt={current.tag}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      {/* legibility veils — lighter so background carousel breathes through */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-background/35 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,hsl(var(--accent-blue)/0.10),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />

      {/* content - title over the full-bleed carousel */}
      <div className="section-container relative z-10 w-full pt-28 pb-28">
        <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-background/60 backdrop-blur text-[11px] font-mono uppercase tracking-[0.22em] text-accent-blue"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              The Capability Factory for Physical AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-display font-bold leading-[0.98] tracking-tight text-[2.4rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
            >
              Contact-rich manipulation,{" "}
              <span className="text-gradient-blue">from video to deployed robot.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="mt-7 text-lg text-foreground/80 max-w-2xl leading-relaxed"
            >
              Give us the task and a video of your work cell. We generate 4D multimodal training data, adapt
              frontier foundation models to your robot, and run them on a self-recovering agentic OS — deployed
              to any robot through one hardware standard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2 max-w-2xl"
            >
              {chips.map((c) => (
                <span key={c} className="text-[11px] font-mono uppercase tracking-[0.12em] text-foreground/80 px-2.5 py-1 rounded-full border border-foreground/15 bg-background/40 backdrop-blur">
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
              <Link to="/contact?interest=Pilot%20Program" className="btn-pilot text-base px-7 py-3.5">
                Start a pilot <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-foreground/20 bg-background/40 backdrop-blur text-foreground hover:bg-foreground/5 transition-all"
              >
                See the platform <ArrowRight size={14} />
              </Link>
              <Link
                to="/#investors"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
              >
                Raising pre-seed · for investors <ArrowRight size={14} />
              </Link>
            </motion.div>
        </div>
      </div>

      {/* slide indicator - bottom bar */}
      <div className="absolute bottom-5 sm:bottom-7 inset-x-0 z-10">
        <div className="section-container">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green border border-accent-green/30 shrink-0">
              <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
              {current.tag}
            </div>
            <div className="flex items-center gap-1.5 flex-1 max-w-md">
              {slides.map((s, i) => (
                <button
                  key={i}
                  aria-label={`Show ${s.tag}`}
                  onClick={() => setIdx(i)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="relative h-[3px] rounded-full overflow-hidden flex-1 bg-foreground/15"
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
            <div className="hidden sm:block text-[10px] font-mono tracking-wider text-foreground/70 shrink-0">
              {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}</style>
    </section>
  );
}
