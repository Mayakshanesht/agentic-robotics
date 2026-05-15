import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticleBackground } from "./ParticleBackground";

const trustItems = ["EXIST Grant", "RWTH Aachen", "Collective Incubator", "FEV Group LOI"];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <ParticleBackground density={45} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="section-container relative z-10 py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-mono text-accent-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-glow-pulse" />
            Infrastructure for Agentic Physical AI
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            The Operating System for{" "}
            <span className="text-gradient-blue">Autonomous Robots.</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-9">
            CloudBee Robotics builds the infrastructure that takes any robot from task description
            to deployed intelligence — <span className="text-foreground font-medium">in weeks, not months.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link to="/contact" className="btn-pilot text-base px-7 py-3">
              Request a Pilot
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/platform"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border border-accent-blue/40 text-foreground hover:bg-accent-blue/10 hover:border-accent-blue/70 transition-all"
            >
              Explore the Platform
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {trustItems.map((t, i) => (
              <div key={t} className="flex items-center gap-6">
                <span>{t}</span>
                {i < trustItems.length - 1 && <span className="hidden sm:inline text-accent-blue/40">·</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
