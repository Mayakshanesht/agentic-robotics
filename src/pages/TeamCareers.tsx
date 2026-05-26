import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award, GraduationCap, Briefcase, Mail, ArrowRight, Building2, MapPin,
  Rocket, Brain, FlaskConical, Wrench, Globe2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { JobApplicationDialog } from "@/components/JobApplicationDialog";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    email: "mayurwaghchoure1995@gmail.com",
    description:
      "Robotics and AI engineer with experience in autonomous systems, robotic learning, and large-scale AI infrastructure. M.Sc. Robotic Systems Engineering, RWTH Aachen.",
    focus: ["Autonomous Systems", "Agentic AI", "Go-to-Market"],
  },
  {
    name: "Madhava Pandiyan",
    role: "Simulation Engineer",
    image: madhavaImg,
    description:
      "Specializes in physics-based simulation, sim-to-real transfer, and deployment of learned policies on physical robotic systems. M.Sc. Robotic Systems Engineering, RWTH Aachen.",
    focus: ["Sim-to-Real", "Physics Simulation", "Policy Deployment"],
  },
];

const advisor = {
  name: "Prof. Dr. Bastian Leibe",
  role: "Academic Mentor — RWTH Aachen",
  description:
    "Head of the Computer Vision Group at RWTH Aachen University. Academic mentor for CloudBee Robotics under the EXIST Research Transfer Grant.",
  affiliation: "Computer Vision Group, RWTH Aachen",
};

const credentials = [
  { icon: Award, title: "EXIST Research Transfer Grant", desc: "Secured — German Federal Ministry of Economic Affairs." },
  { icon: Briefcase, title: "Deloitte Problem–Solution Fit", desc: "Completed — Sept–Dec 2025." },
  { icon: GraduationCap, title: "RWTH Innovation Ideation", desc: "Completed — full cycle to graduation." },
];

const values = [
  { icon: FlaskConical, title: "Research-first", body: "We work at the frontier, not behind it." },
  { icon: Wrench, title: "Build to ship", body: "Research that doesn't deploy doesn't count." },
  { icon: Globe2, title: "Europe's physical AI hub", body: "Deep roots in Aachen's tech ecosystem." },
];

export default function TeamCareers() {
  const [openRole, setOpenRole] = useState<string | null>(null);

  return (
    <PageShell
      title="Team & Careers — CloudBee Robotics"
      description="Meet the team and join CloudBee Robotics — building the agentic physical AI infrastructure from Aachen, Germany."
      path="/team-careers"
    >
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Team & Careers</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The engineers <span className="text-gradient-blue">building the layer.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Robotics engineers, simulation specialists, and academic mentors — shipping the operating system for autonomous robots from Aachen, Germany.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Aachen, Germany</span>
              <span className="inline-flex items-center gap-1.5"><Building2 size={12} /> Collective Incubator</span>
              <span className="inline-flex items-center gap-1.5"><GraduationCap size={12} /> RWTH Aachen</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Founders</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Built by engineers who ship systems.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-7"
              >
                <div className="flex gap-5 mb-5">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-accent-blue/30 shrink-0">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xl text-foreground">{m.name}</h3>
                    <div className="text-sm text-accent-blue font-medium mb-2">{m.role}</div>
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-xs font-mono text-accent-green hover:text-accent-blue transition-colors break-all">
                        <Mail size={12} /> {m.email}
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.description}</p>
                <div className="flex flex-wrap gap-2">
                  {m.focus.map((f) => (
                    <span key={f} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Academic Mentor</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">World-class research backing.</h2>
          </div>
          <div className="glass-card p-7 max-w-3xl">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">{advisor.name}</h3>
            <div className="text-sm text-accent-blue font-medium mb-3">{advisor.role}</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{advisor.description}</p>
            <div className="text-xs font-mono text-muted-foreground/80 pt-3 border-t border-border">{advisor.affiliation}</div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Validation</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Institutionally backed.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {credentials.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="glass-card p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent-green/10 text-accent-green flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-base text-foreground mb-1.5">{v.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container max-w-5xl">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Careers</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">Join the team building the future of physical AI.</h2>
            <div className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground px-3 py-2 mt-5 rounded-md border border-border bg-surface/60">
              <MapPin size={14} className="text-accent-blue" />
              Aachen, Germany · EXIST Supported · RWTH Aachen Ecosystem
            </div>
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
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-3">
              <Brain className="text-accent-green mt-1" size={20} />
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Open Application</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Don't see a role that fits? We're always interested in exceptional people.
                </p>
              </div>
            </div>
            <button onClick={() => setOpenRole("Open Application")} className="inline-flex items-center gap-2 mt-4 text-accent-blue font-semibold hover:gap-3 transition-all">
              Submit Open Application <ArrowRight size={14} />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
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
