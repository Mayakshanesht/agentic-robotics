import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RobotArmScene = lazy(() => import("@/components/three/RobotArmScene"));

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[170px] pointer-events-none" />

      {/* 3D arm — full bleed on the right, behind on mobile */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none">
        <Suspense fallback={null}>
          <RobotArmScene className="w-full h-full opacity-90 [mask-image:radial-gradient(closest-side,#000_70%,transparent)]" />
        </Suspense>
      </div>

      <div className="section-container relative z-10 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-background/40 backdrop-blur mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/80">
              Physical AI · Agentic Robotics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display font-bold leading-[0.92] tracking-tight text-[3.25rem] sm:text-7xl lg:text-[6rem]"
          >
            Robots that
            <br />
            <span className="text-gradient-blue">teach themselves.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Describe a task in plain language. CloudBee generates the experience,
            trains the policy, and deploys a self-improving fleet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
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
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent-blue/60 to-transparent" />
      </motion.div>
    </section>
  );
}
