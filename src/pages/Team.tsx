import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Briefcase, Mail, Linkedin, ArrowRight, Building2, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";
import pitchImg from "@/assets/ideation-pitch.jpg";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    email: "mayurwaghchoure1995@gmail.com",
    description:
      "Robotics and AI engineer with experience in autonomous systems, robotic learning, and large-scale AI infrastructure. M.Sc. Robotic Systems Engineering, RWTH Aachen. Leads product, research direction, and strategic partnerships.",
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

const advisors = [
  {
    name: "Prof. Dr. Bastian Leibe",
    role: "Academic Mentor — RWTH Aachen",
    description:
      "Head of the Computer Vision Group at RWTH Aachen University. World-leading researcher in computer vision, deep learning, and visual perception for autonomous systems. Academic mentor for CloudBee Robotics under the EXIST Research Transfer Grant.",
    affiliation: "Computer Vision Group, RWTH Aachen",
  },
];

const credentials = [
  { icon: Award, title: "EXIST Research Transfer Grant", desc: "Secured — German Federal Ministry of Economic Affairs." },
  { icon: Briefcase, title: "Deloitte Problem–Solution Fit", desc: "Completed — Sept – Dec 2025." },
  { icon: GraduationCap, title: "RWTH Innovation Ideation Program", desc: "Completed — full cycle through halftime to graduation." },
];

const lois = ["FEV Europe", "Haver & Boecker", "Dorle Controls", "Fraunhofer IML"];

export default function Team() {
  return (
    <PageShell
      title="Team — CloudBee Robotics"
      description="Meet the founders, engineers, and academic mentors behind CloudBee Robotics — building the agentic physical AI infrastructure from Aachen, Germany."
      path="/team"
    >
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Team</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The engineers <span className="text-gradient-blue">building the layer.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Robotics engineers, simulation specialists, and world-class academic mentors —
              shipping the operating system for autonomous robots from Aachen, Germany.
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
            <h2 className="font-display font-bold text-3xl lg:text-4xl">
              Built by engineers who ship systems.
            </h2>
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

      {/* Pitch image */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto"
          >
            <div className="glass-card overflow-hidden p-0">
              <img src={pitchImg} alt="Mayur Waghchoure pitching CloudBee Robotics at RWTH Aachen" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Building in public</div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 leading-tight">
                From a thesis to a thesis-defying mission.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founder Mayur Waghchoure presenting CloudBee Robotics at the RWTH Aachen Innovation
                Ideation Program — laying out the case for a German-built infrastructure layer for
                agentic physical AI.
              </p>
              <p className="text-sm text-muted-foreground">
                Backed by RWTH Aachen, supported by the EXIST Research Transfer Grant, validated by
                Deloitte, and trusted by industry partners across automotive and manufacturing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisors */}
      <section className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Academic Mentors</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">
              World-class research backing.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">{a.name}</h3>
                <div className="text-sm text-accent-blue font-medium mb-3">{a.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.description}</p>
                <div className="text-xs font-mono text-muted-foreground/80 pt-3 border-t border-border">
                  {a.affiliation}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials + LOIs */}
      <section className="section-spacing border-t border-border bg-surface/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Validation</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl">
              Institutionally backed. Industry validated.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
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

          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-2">Letters of Intent</div>
            <h3 className="font-display font-semibold text-lg mb-5">Trusted by industry partners</h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {lois.map((c) => (
                <span key={c} className="px-4 py-1.5 text-sm rounded-full border border-accent-blue/25 bg-accent-blue/5 text-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Want to <span className="text-gradient-blue">join us?</span>
          </h2>
          <p className="text-muted-foreground mb-7">
            We're hiring engineers, researchers, and operators who want to build the infrastructure for the next decade of robotics.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/careers" className="btn-pilot">
              View open roles <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
