import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  FileText, Network, ScanEye, ShieldCheck, FlaskConical, BrainCircuit, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CapabilityScene = lazy(() => import("@/components/three/CapabilityScene"));

const inputs = ["Text", "Images", "Video", "SOPs", "Instructions", "Hardware Docs", "Regulations", "Demonstrations"];

const stages = [
  { icon: FileText, title: "Understands your process", body: "Reads SOPs, instructions and demos." },
  { icon: Network, title: "Compiles capabilities", body: "A multi-agent graph for AgenticOS." },
  { icon: ScanEye, title: "Grounds in the real world", body: "From video, image, or just text." },
  { icon: ShieldCheck, title: "Runs safety analysis", body: "Against hardware docs + regulations." },
  { icon: FlaskConical, title: "Validates in simulation", body: "Auto test cases, closed-loop." },
  { icon: BrainCircuit, title: "Experience & models", body: "Multimodal data + our own models." },
];

export function CapabilityCompilerFeature() {
  return (
    <section id="capability-compiler" className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-accent-blue/10 blur-[170px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 backdrop-blur mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-blue">Flagship · Capability Compiler</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            It understands the work.{" "}
            <span className="text-gradient-blue">Then it builds the capabilities.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Any process - described, demonstrated or documented - compiled into a validated,
            multi-agent capability graph for AgenticOS.
          </p>
        </motion.div>

        {/* input chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground self-center mr-2">Grounds from</span>
          {inputs.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs font-mono text-foreground/80">
              {c}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* 3D capability graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-3d border-gradient relative aspect-square lg:sticky lg:top-28 overflow-hidden"
          >
            <Suspense fallback={null}>
              <CapabilityScene className="absolute inset-0 w-full h-full" />
            </Suspense>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue px-2.5 py-1 rounded-full bg-background/60 backdrop-blur border border-accent-blue/30">
                Live capability graph
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">multi-agent · validated</span>
            </div>
          </motion.div>

          {/* stages */}
          <div className="space-y-3">
            {stages.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex gap-4 rounded-2xl border border-border bg-surface/40 p-5 hover:border-accent-blue/40 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl border border-accent-blue/30 bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                  <s.icon size={18} />
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-foreground leading-tight">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* positioning callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 card-3d border-gradient p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between"
        >
          <p className="text-base lg:text-lg text-foreground/90 max-w-3xl leading-relaxed">
            <span className="text-gradient-green font-semibold">We don't stop at programmatic data generation.</span>{" "}
            We scale scenarios so every capability is validated properly - and we train our own multimodal
            AI models for the task, as planned.
          </p>
          <Link to="/product" className="btn-pilot shrink-0">
            Explore the platform <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
