import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Rocket, Brain, FlaskConical, Wrench, Globe2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

export default function Careers() {
  const [openRole, setOpenRole] = useState<string | null>(null);

  return (
    <PageShell
      title="Careers — CloudBee Robotics"
      description="Join CloudBee Robotics — build the autonomous OS for embodied AI from Aachen, Germany. EXIST funded, RWTH-backed."
      path="/careers"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Careers</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              Join the team building the <span className="text-gradient-blue">future of physical AI.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're a small, senior team shipping a real product — synthetic 4D data, explainable VLA models, and an agentic runtime that deploys to any humanoid, arm, or AMR.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground px-3 py-2 mt-6 rounded-md border border-border bg-surface/60">
              <MapPin size={14} className="text-accent-blue" />
              Aachen, Germany · EXIST Supported · RWTH Aachen Ecosystem
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-spacing border-t border-border">
        <div className="section-container max-w-5xl">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Open Roles</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">We hire engineers who ship.</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 mb-6 border-accent-blue/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-accent-blue text-primary-foreground rounded-bl-lg">
              Featured
            </div>
            <div className="flex items-start gap-4 mb-2">
              <Rocket className="text-accent-blue mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
                  Research Scientist / Founding AI Engineer
                </h3>
                <div className="text-sm text-muted-foreground mt-1">Agentic AI & Robotics</div>
                <div className="text-xs font-mono text-muted-foreground mt-2">
                  Aachen, Germany · EU-based preferred · Full-time
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Join our core team at the intersection of robotics, synthetic data, embodied AI, and robotic foundation models. PhD-level or strong industry experience in generative AI, multimodal systems, or robotics simulation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border">
              <button onClick={() => setOpenRole("Research Scientist / Founding AI Engineer")} className="btn-pilot">
                Apply Now
              </button>
              <div className="text-xs text-muted-foreground">
                Candidates based in Europe/Germany or willing to relocate strongly preferred.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10 mb-6 border-accent-green/40 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-accent-green text-primary-foreground rounded-bl-lg">
              Master Thesis · IGMR × CloudBee
            </div>
            <div className="flex items-start gap-4 mb-2">
              <FlaskConical className="text-accent-green mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
                  Synthetic Multimodal Experience &amp; Safety-Constrained Capability Execution
                </h3>
                <div className="text-sm text-muted-foreground mt-1">
                  Robotic Motion in Unstructured Environments · Bachelor / Master Thesis
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-2">
                  RWTH Aachen · IGMR Institute · Joint with CloudBee Robotics
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              A joint thesis with the IGMR Institute: investigate how synthetic multimodal experience reduces
              real-world demonstrations for industrial robotics — navigation, trajectory planning and manipulation,
              with safety-constrained, capability-oriented execution. Work hands-on with our DataForge, ModelLab and
              AgentOS stack (UR manipulator, IGMR platforms), with the goal of a co-authored research paper.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-foreground/85">
              {[
                "M.Sc. in Mech. Eng., CS, EE or related",
                "Strong robotics / control / ML background",
                "ROS / ROS2, Python / C++",
                "Motivation to publish (co-author)",
              ].map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border">
              <button onClick={() => setOpenRole("Master Thesis — Synthetic Multimodal Experience & Safety-Constrained Capability Execution (IGMR × CloudBee)")} className="btn-pilot">
                Apply for this thesis
              </button>
              <div className="text-xs text-muted-foreground">
                Or email Dr. Stefan Bezrucav (IGMR) ·{" "}
                <a href="mailto:bezrucav@igmr.rwth-aachen.de" className="text-accent-green hover:underline">bezrucav@igmr.rwth-aachen.de</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-3">
              <Brain className="text-accent-green mt-1" size={20} />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Open Application</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Don't see a role that fits? We're always interested in exceptional people — simulation, embedded, full-stack, or research backgrounds welcome.
                </p>
              </div>
            </div>
            <button onClick={() => setOpenRole("Open Application")} className="inline-flex items-center gap-2 mt-4 text-accent-blue font-semibold hover:gap-3 transition-all">
              Submit Open Application <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container max-w-5xl">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">How we work</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">A small team, a shipping culture.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <JobApplicationDialog
        role={openRole ?? ""}
        open={!!openRole}
        onClose={() => setOpenRole(null)}
      />
    </PageShell>
  );
}
