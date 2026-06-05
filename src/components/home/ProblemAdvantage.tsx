import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Row = {
  theme: string;
  problem: string;
  problemDetail: string;
  solution: string;
  solutionDetail: string;
};

const rows: Row[] = [
  {
    theme: "Data",
    problem: "Teleoperation doesn't scale",
    problemDetail: "Manual demos are slow, biased and miss the long tail of edge cases.",
    solution: "Multimodal synthetic experience at scale",
    solutionDetail: "Programmatic 4D scenarios with edge-case coverage, physics and sensor fidelity.",
  },
  {
    theme: "Models",
    problem: "Brittle single-modality policies",
    problemDetail: "IL-only stacks break on distribution shift and unseen tasks.",
    solution: "Multimodal VLA, IL, RL, Reward & World/WAM training",
    solutionDetail: "Unified training and fine-tuning across modalities with closed-loop validation.",
  },
  {
    theme: "Runtime",
    problem: "Open-loop demos, no recovery",
    problemDetail: "Pipelines collapse on failure — no re-planning, no introspection.",
    solution: "Agentic OS with failure recovery",
    solutionDetail: "Long-horizon planning, online re-planning and runtime guardrails.",
  },
  {
    theme: "Safety",
    problem: "No traceable validation",
    problemDetail: "Black-box behavior blocks deployment in regulated environments.",
    solution: "EU AI Act-grade safety contracts",
    solutionDetail: "Skill-level safety, evaluation harnesses and auditable validation.",
  },
];

export function ProblemAdvantage() {
  return (
    <section className="section-spacing border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
            Problem → Solution
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl leading-[1.05]">
            The old stack breaks.{" "}
            <span className="text-gradient-blue">CloudBee closes the loop.</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mt-5 max-w-2xl leading-relaxed">
            Four shifts move robotics from demo to deployment — data, models, runtime and safety.
          </p>
        </motion.div>

        <div className="relative rounded-2xl border border-border bg-background/40 backdrop-blur overflow-hidden">
          {/* Header */}
          <div className="hidden lg:grid grid-cols-[160px_1fr_64px_1fr] gap-6 px-8 py-5 border-b border-border bg-surface/40">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Layer</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-destructive/90">Without CloudBee</div>
            <div />
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-green">With CloudBee</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.theme}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="grid grid-cols-1 lg:grid-cols-[160px_1fr_64px_1fr] gap-6 px-6 lg:px-8 py-7 border-b border-border last:border-b-0 hover:bg-surface/30 transition-colors"
            >
              <div className="flex lg:block items-center gap-3">
                <div className="font-display font-semibold text-base lg:text-lg text-foreground">{row.theme}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground hidden lg:block mt-1">
                  0{i + 1}
                </div>
              </div>

              <div className="lg:pr-4">
                <div className="text-sm lg:text-base font-semibold text-foreground/90 mb-1.5">
                  <span className="lg:hidden text-[10px] font-mono uppercase tracking-wider text-destructive/90 mr-2">Problem</span>
                  {row.problem}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{row.problemDetail}</div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                  <ArrowRight size={14} className="text-accent-blue" />
                </div>
              </div>

              <div className="lg:pl-4 relative">
                <div className="text-sm lg:text-base font-semibold text-foreground mb-1.5">
                  <span className="lg:hidden text-[10px] font-mono uppercase tracking-wider text-accent-green mr-2">Solution</span>
                  {row.solution}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{row.solutionDetail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
