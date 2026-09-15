import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, Hand, ShieldCheck, Video } from "lucide-react";
import { products, safetyLayer, type ProductKey } from "@/data/company";
import {
  AdapterAnim,
  HardwareBus,
  ModalityStreams,
  RecoveryLoop,
  SafetyChecks,
} from "@/components/landing/PipelineAnimations";

const animations: Record<ProductKey, React.ComponentType> = {
  dataforge: ModalityStreams,
  modellab: AdapterAnim,
  agenticos: RecoveryLoop,
  kinebridge: HardwareBus,
};

const inputs = [
  { icon: ClipboardList, label: "Your task" },
  { icon: Video, label: "A video of your scene" },
  { icon: Hand, label: "A few video demonstrations" },
];

export function PlatformPipeline() {
  return (
    <section id="platform" className="relative py-24 lg:py-36 border-t border-border overflow-hidden scroll-mt-20">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-accent-blue/10 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.04] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-4">The platform</div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] tracking-tight">
            Four products.{" "}
            <span className="text-gradient-blue">One path from your work cell to a deployed robot.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Each product works on its own. Together they turn a task into a validated capability running on real
            hardware. Here is what goes in, and what you get out.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center gap-2.5">
          <span className="mr-1 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">You bring</span>
          {inputs.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm text-foreground">
              <Icon size={14} className="text-accent-blue" /> {label}
            </span>
          ))}
          <ArrowRight size={16} className="text-muted-foreground" />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute inset-x-0 top-[42px] h-px bg-border overflow-hidden">
            <motion.div
              className="h-px w-1/3 bg-gradient-to-r from-transparent via-accent-blue to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => {
              const Anim = animations[p.key];
              return (
                <motion.article
                  key={p.key}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex flex-col rounded-2xl border border-border bg-background/90 p-6 backdrop-blur transition-all hover:border-accent-blue/40 hover:shadow-[0_20px_60px_-30px_hsl(210_100%_56%/0.35)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-blue/40 bg-background font-mono text-xs text-accent-blue">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{p.tagline}</span>
                  </div>
                  <h3 className="mt-4 font-display font-bold text-2xl text-foreground">
                    {p.name}
                    {p.key === "modellab" && <span className="ml-2 align-middle text-xs font-mono text-accent-green">+ Copilot</span>}
                  </h3>
                  <div className="mt-4 h-28 rounded-xl border border-border bg-surface/60 p-2">
                    <Anim />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                  <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green">You get</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
                    {p.youGet.map((g) => (
                      <li key={g} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 rounded-2xl border border-accent-green/30 bg-accent-green/5 p-6 lg:flex lg:items-center lg:justify-between lg:gap-8"
        >
          <div className="flex max-w-xl items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-green/15 text-accent-green">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-display font-semibold text-lg text-foreground">{safetyLayer.name}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{safetyLayer.summary}</p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <SafetyChecks items={safetyLayer.items} />
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="font-display font-semibold text-foreground">The result: a validated capability running on your robot.</span>
          <Link to="/product" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-accent-blue hover:gap-3 transition-all">
            Explore the products <ArrowRight size={14} />
          </Link>
          <Link to="/contact?interest=Pilot%20Program" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors">
            Start a pilot <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
