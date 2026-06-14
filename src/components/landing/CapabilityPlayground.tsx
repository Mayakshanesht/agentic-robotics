import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanEye, Eye, Navigation, Grab, PackageCheck, Search, Wrench, ShieldCheck,
  ArrowRight, Sparkles, RotateCcw, Check, Bot, Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

type NodeT = { label: string; type: "sensor" | "primitive" | "coordinator"; icon: typeof Eye; robot: string };

const STAGES = [
  "Understanding the process",
  "Compiling capabilities",
  "Grounding the scene",
  "Running safety analysis",
  "Generating test cases",
  "Validating in simulation",
];

const examples = [
  "Pick red parts off the conveyor and place them in the bin, avoid the safety fence",
  "Inspect welds on the chassis and flag any defects",
  "Fetch totes from storage and deliver them to the packing station",
  "Assemble the bracket — insert the screws and fasten them",
];

function buildGraph(task: string): { nodes: NodeT[]; safety: string[] } {
  const s = task.toLowerCase();
  const nodes: NodeT[] = [];
  nodes.push({ label: "Perceive scene", type: "sensor", icon: ScanEye, robot: "Sensor" });
  nodes.push({
    label: /red|blue|green|colour|color|defect|target/.test(s) ? "Detect target" : "Detect objects",
    type: "primitive", icon: Eye, robot: "Arm",
  });
  if (/navigat|move|go to|conveyor|transport|deliver|fetch|bring|storage|station/.test(s))
    nodes.push({ label: "Navigate", type: "primitive", icon: Navigation, robot: "AMR" });
  if (/pick|grasp|grab|lift|collect|sort|tote/.test(s))
    nodes.push({ label: "Grasp & pick", type: "primitive", icon: Grab, robot: "Arm" });
  if (/inspect|check|quality|defect|measure|flag/.test(s))
    nodes.push({ label: "Inspect", type: "primitive", icon: Search, robot: "Arm" });
  if (/weld|assemble|screw|insert|fasten|bolt|bracket/.test(s))
    nodes.push({ label: "Assemble", type: "primitive", icon: Wrench, robot: "Arm" });
  if (/place|put|drop|bin|sort|stack|load|pack|deliver/.test(s))
    nodes.push({ label: "Place / sort", type: "primitive", icon: PackageCheck, robot: "Arm" });
  // ensure at least one action
  if (nodes.length < 3) nodes.push({ label: "Manipulate", type: "primitive", icon: Grab, robot: "Arm" });
  nodes.push({ label: "Validate & recover", type: "coordinator", icon: ShieldCheck, robot: "Agentic OS" });

  const safety = [
    "Contact force ≤ 50 N",
    "No-go zone: safety fence",
    "Reduce speed near humans",
  ];
  return { nodes, safety };
}

const typeStyle: Record<NodeT["type"], string> = {
  sensor: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  primitive: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
  coordinator: "border-accent-green/40 bg-accent-green/10 text-accent-green",
};

export function CapabilityPlayground() {
  const [task, setTask] = useState(examples[0]);
  const [status, setStatus] = useState<"idle" | "compiling" | "done">("idle");
  const [stage, setStage] = useState(0);
  const [graph, setGraph] = useState<{ nodes: NodeT[]; safety: string[] } | null>(null);

  const run = () => {
    if (!task.trim()) return;
    setGraph(buildGraph(task));
    setStage(0);
    setStatus("compiling");
  };

  useEffect(() => {
    if (status !== "compiling") return;
    if (stage >= STAGES.length) {
      const t = setTimeout(() => setStatus("done"), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStage((s) => s + 1), 480);
    return () => clearTimeout(t);
  }, [status, stage]);

  const robotsUsed = graph ? Array.from(new Set(graph.nodes.map((n) => n.robot).filter((r) => r !== "Sensor"))) : [];

  return (
    <section id="try" className="relative py-28 lg:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 aurora opacity-50 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[560px] rounded-full bg-accent-blue/[0.07] blur-[160px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 text-center mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/40 bg-accent-green/10 backdrop-blur mb-6">
            <Sparkles size={13} className="text-accent-green" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-green">Live · Try it yourself</span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.0] tracking-tight">
            Type a task. <span className="text-gradient-mixed">Watch it become a capability.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            This is the Capability Compiler in miniature — describe a job and see it compiled into a
            validated, multi-agent capability graph.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto card-3d border-gradient p-6 lg:p-8">
          {/* input */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">Describe a task</div>
            <textarea
              value={task}
              onChange={(e) => setTask(e.target.value)}
              rows={2}
              className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground text-sm lg:text-base focus:outline-none focus:border-accent-blue/60 transition-colors"
              placeholder="e.g. Pick red parts off the conveyor and place them in the bin"
            />
            <div className="flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button
                  key={ex}
                  onClick={() => { setTask(ex); setStatus("idle"); }}
                  className="text-[11px] text-muted-foreground hover:text-foreground border border-border hover:border-accent-blue/40 rounded-full px-3 py-1 transition-colors text-left"
                >
                  {ex.length > 46 ? ex.slice(0, 46) + "…" : ex}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <button onClick={run} disabled={status === "compiling"} className="btn-pilot disabled:opacity-60">
                {status === "compiling" ? "Compiling…" : status === "done" ? "Re-compile" : "Compile capability graph"}
                <ArrowRight size={15} />
              </button>
              {status === "done" && (
                <button onClick={() => setStatus("idle")} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <RotateCcw size={14} /> Reset
                </button>
              )}
            </div>
          </div>

          {/* compiling log */}
          <AnimatePresence>
            {status === "compiling" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 rounded-xl border border-border bg-background/50 p-5 overflow-hidden"
              >
                <div className="space-y-2 font-mono text-sm">
                  {STAGES.map((st, i) => (
                    <div key={st} className={`flex items-center gap-2.5 transition-opacity ${i <= stage ? "opacity-100" : "opacity-30"}`}>
                      {i < stage ? (
                        <Check size={14} className="text-accent-green" />
                      ) : i === stage ? (
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-accent-blue border-t-transparent animate-spin" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border border-border" />
                      )}
                      <span className={i <= stage ? "text-foreground" : "text-muted-foreground"}>{st}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* result */}
          <AnimatePresence>
            {status === "done" && graph && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-7"
              >
                {/* capability graph flow */}
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-accent-blue mb-4">Compiled capability graph</div>
                <div className="flex flex-wrap items-stretch gap-2.5">
                  {graph.nodes.map((n, i) => (
                    <motion.div
                      key={n.label + i}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: i * 0.09 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className={`rounded-xl border ${typeStyle[n.type]} px-3.5 py-2.5 min-w-[128px]`}>
                        <div className="flex items-center gap-2">
                          <n.icon size={15} />
                          <span className="font-display font-semibold text-sm text-foreground">{n.label}</span>
                        </div>
                        <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{n.robot}</div>
                      </div>
                      {i < graph.nodes.length - 1 && <ArrowRight size={15} className="text-muted-foreground/50 shrink-0" />}
                    </motion.div>
                  ))}
                </div>

                {/* safety + metrics */}
                <div className="grid md:grid-cols-[1.4fr_1fr] gap-5 mt-7">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    className="rounded-xl border border-accent-green/25 bg-accent-green/[0.05] p-5"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-accent-green mb-3">
                      <ShieldCheck size={13} /> Safety constraints · validated in simulation
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {graph.safety.map((c) => (
                        <span key={c} className="inline-flex items-center gap-1.5 text-xs text-foreground/85 border border-border rounded-full px-3 py-1 bg-background/50">
                          <Check size={12} className="text-accent-green" /> {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-3"
                  >
                    {[
                      { k: "Capabilities", v: String(graph.nodes.length), icon: Cpu },
                      { k: "Robots", v: String(robotsUsed.length || 1), icon: Bot },
                      { k: "To deploy", v: "~4 days", icon: Sparkles },
                    ].map((m) => (
                      <div key={m.k} className="rounded-xl border border-border bg-background/50 p-4 text-center">
                        <m.icon size={16} className="mx-auto text-accent-blue mb-1.5" />
                        <div className="font-display font-bold text-lg text-foreground leading-none">{m.v}</div>
                        <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{m.k}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                  className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-accent-blue/30 bg-accent-blue/[0.05] p-5"
                >
                  <div className="text-sm lg:text-base text-foreground/90">
                    This is a taste. <span className="text-gradient-blue font-semibold">See it compiled on your real process.</span>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Link to="/contact" className="btn-pilot">Book a demo <ArrowRight size={15} /></Link>
                    <Link to="/request-access" className="inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm border border-foreground/15 hover:bg-foreground/5 transition-all">
                      Early access
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
