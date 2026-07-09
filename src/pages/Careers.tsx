import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Rocket, Brain, FlaskConical, Wrench, Globe2, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

type WSRole = {
  id: string;
  title: string;
  focus: string;
  workOn: string[];
  profile: string[];
};

const workingStudentRoles: WSRole[] = [
  {
    id: "ws-humanoid",
    title: "Working Student / Part-Time Research Engineer — Humanoid Robot Learning",
    focus: "Applied R&D in humanoid robot learning",
    workOn: [
      "Multimodal demonstration and robotics data collection",
      "Human motion processing and retargeting for humanoid robots",
      "Synthetic data and scenario generation",
      "Reinforcement learning, imitation learning, and robot locomotion",
      "Vision-Language-Action models and robotics foundation models",
      "Simulation-based training and evaluation",
      "Developing generalized and scalable robot-learning approaches",
    ],
    profile: [
      "Pursuing / recently completed a degree in Robotics, AI, CS, or related field",
      "Strong Python and ML fundamentals",
      "Experience with robotics, deep learning, or simulation",
      "Familiarity with RL, imitation learning, humanoids, or VLA models is a plus",
      "Comfortable reading and implementing research papers & OSS",
      "Independent, research-oriented problem solver",
      "Based in Germany, preferably Aachen or surrounding region",
    ],
  },
  {
    id: "ws-manipulation",
    title: "Working Student / Part-Time Research Engineer — Robot Learning & Manipulation",
    focus: "Robot learning, manipulation, and multimodal AI",
    workOn: [
      "Multimodal demonstration and robotics data collection",
      "Robot manipulation and learning from demonstrations",
      "Trajectory adaptation and retargeting",
      "Synthetic robotics data and scenario generation",
      "Reinforcement learning and imitation learning",
      "Vision-Language-Action models and robotics foundation models",
      "Simulation-based training and evaluation",
      "Generalized approaches across robotic systems and tasks",
    ],
    profile: [
      "Pursuing / recently completed a degree in Robotics, AI, CS, or related field",
      "Strong Python and ML fundamentals",
      "Good understanding of robotics, kinematics, control, or robot learning",
      "Experience with manipulation, simulation, RL, imitation, or VLA models is a plus",
      "Can read and implement research papers & OSS",
      "Strong independent problem-solving and experimentation skills",
      "Based in Germany, preferably Aachen or surrounding region",
    ],
  },
  {
    id: "ws-embodied",
    title: "Working Student / Part-Time Research Engineer — Embodied AI & Agentic Robotics",
    focus: "Embodied AI, spatial intelligence, world models, AI agents, robotics software",
    workOn: [
      "Open-source world models and robotics foundation models",
      "Spatial and temporal scene understanding",
      "Multimodal perception and reasoning",
      "Memory systems for embodied intelligence",
      "Agentic architectures for robotics",
      "Planning, reasoning, and intelligent task execution",
      "Scalable robotics and AI software systems",
      "Integration and simulation-based evaluation of emerging tech",
    ],
    profile: [
      "Pursuing / recently completed a degree in Robotics, AI, CS, SE, or related field",
      "Strong programming and software-engineering skills",
      "Good understanding of AI, robotics, or distributed software systems",
      "Experience with world models, spatial AI, CV, AI agents, ROS, containers, or distributed systems is a plus",
      "Can evaluate & implement academic research and OSS",
      "Strong systems thinking and independent problem-solving",
      "Based in Germany, preferably Aachen or surrounding region",
    ],
  },
];

export default function Careers() {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const [details, setDetails] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setDetails((d) => ({ ...d, [k]: !d[k] }));

  return (
    <PageShell
      title="Careers - CloudBee Robotics"
      description="Join CloudBee Robotics - build the autonomous OS for embodied AI from Aachen, Germany. EXIST funded, RWTH-backed."
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
              We're a small, senior team shipping a real product - synthetic 4D data, explainable VLA models, and an agentic runtime that deploys to any humanoid, arm, or AMR.
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
            <button onClick={() => toggle("rs")} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all">
              {details.rs ? "Hide details" : "View details"}
              <ChevronDown size={15} className={`transition-transform ${details.rs ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {details.rs && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-sm text-muted-foreground leading-relaxed overflow-hidden"
                >
                  Join our core team at the intersection of robotics, synthetic data, embodied AI, and robotic foundation models. PhD-level or strong industry experience in generative AI, multimodal systems, or robotics simulation.
                </motion.p>
              )}
            </AnimatePresence>
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
              Master Thesis · IGMR × CloudBee Robotics
            </div>
            <div className="flex items-start gap-4 mb-2">
              <FlaskConical className="text-accent-green mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">
                  Synthetic Multimodal Experience &amp; Safety-Constrained Capability Execution
                </h3>
                <div className="text-sm text-muted-foreground mt-1">
                  Robotic Motion in Unstructured Environments · Bachelor / Master Thesis · Jointly supervised with IGMR
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-2">
                  RWTH Aachen · IGMR Institute · Joint with CloudBee Robotics
                </div>
              </div>
            </div>
            <button onClick={() => toggle("th")} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-green hover:gap-2 transition-all">
              {details.th ? "Hide details" : "View details"}
              <ChevronDown size={15} className={`transition-transform ${details.th ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {details.th && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Open to <strong className="text-foreground">Bachelor&apos;s and Master&apos;s thesis</strong> candidates. This
                    position is <strong className="text-foreground">jointly supervised with the IGMR Institute</strong> (Institute
                    of Mechanism Theory, Machine Dynamics and Robotics, RWTH Aachen) and CloudBee Robotics. You&apos;ll work
                    hands-on with our platform on industrial robotics research — navigation, planning and
                    manipulation with safety-constrained, capability-oriented execution — targeting a
                    co-authored publication.
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-foreground/85">
                    {[
                      "B.Sc. / M.Sc. in Mech. Eng., CS, EE or related",
                      "Solid robotics / control / ML background",
                      "ROS / ROS2, Python / C++",
                      "Motivation to publish (co-author)",
                    ].map((r) => (
                      <li key={r} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-lg border border-border bg-surface/50 p-4 text-sm text-muted-foreground leading-relaxed">
                    <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-2">
                      How to apply
                    </div>
                    Send your CV, transcript and a short motivation to
                    {" "}
                    <a href="mailto:bezrucav@igmr.rwth-aachen.de" className="text-accent-green hover:underline font-medium">
                      Dr. Stefan Bezrucav
                    </a>
                    {" "}at IGMR. Full topic description on the RWTH advertisement:
                    {" "}
                    <a
                      href="https://web.zhv.rwth-aachen.de/dia/abschlussarbeiten:42790.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:underline break-all"
                    >
                      RWTH thesis advertisement (PDF)
                    </a>
                    .
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-border">
              <a
                href="mailto:bezrucav@igmr.rwth-aachen.de?subject=Bachelor%2FMaster%20Thesis%20Application%20-%20IGMR%20%C3%97%20CloudBee%20Robotics"
                className="btn-pilot"
              >
                Email Dr. Stefan (IGMR)
              </a>
              <a
                href="https://web.zhv.rwth-aachen.de/dia/abschlussarbeiten:42790.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent-blue hover:underline"
              >
                View topic (PDF) →
              </a>
            </div>
          </motion.div>

          {/* More roles */}
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">We're also growing these teams</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {moreRoles.map((r) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/40 px-5 py-4 hover:border-accent-blue/40 transition-colors"
                >
                  <div>
                    <div className="font-display font-semibold text-foreground">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.sub}</div>
                  </div>
                  <button
                    onClick={() => setOpenRole(r.title)}
                    className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:gap-2 transition-all"
                  >
                    Apply <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

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
                  Don't see a role that fits? We're always interested in exceptional people - simulation, embedded, full-stack, or research backgrounds welcome.
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
