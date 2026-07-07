import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, Mail, Building2, MapPin, Award, Briefcase, ArrowRight, Linkedin,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

/** Mentor headshot - drop the file at /public/team/mentor.jpg and it appears; until then a placeholder icon is shown. */
function MentorPhoto() {
  const [broken, setBroken] = useState(false);
  if (broken) {
    return (
      <div className="w-full h-full bg-accent-blue/10 text-accent-blue flex items-center justify-center">
        <GraduationCap size={44} />
      </div>
    );
  }
  return (
    <img
      src="/team/mentor.jpg"
      onError={() => setBroken(true)}
      alt="CloudBee Robotics academic mentor"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );
}

type Member = { name: string; role: string; image: string | null; email?: string; linkedin: string | null; description: string; expertise: string[] };
const team: Member[] = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    email: "mayur.waghchoure@cloudbeerobotics.com",
    linkedin: "https://www.linkedin.com/in/mayurwaghchoure/",
    description:
      "Robotics and AI engineer with hands-on experience in autonomous systems, robotic learning, and AI infrastructure at scale. M.Sc. Robotic Systems Engineering, RWTH Aachen University.",
    expertise: ["Robotics", "Physical AI", "Autonomous Systems", "Industrial AI"],
  },
  {
    name: "Madhava Pandiyan",
    role: "Robotics & Simulation Engineer",
    image: madhavaImg,
    linkedin: "https://www.linkedin.com/in/madhava-pandiyan/",
    description:
      "Physics-based simulation, sim-to-real transfer, and deployment of learned policies on physical robots. M.Sc. Robotic Systems Engineering, RWTH Aachen University.",
    expertise: ["Isaac Sim", "ROS 2", "Synthetic Data", "Robot Learning"],
  },
];

const advisor = {
  name: "Prof. Dr. Bastian Leibe",
  role: "Academic Mentor - RWTH Aachen",
  description:
    "Head of the Computer Vision Group at RWTH Aachen University. Academic mentor for CloudBee Robotics under the EXIST Gründungsstipendium. World-leading research in computer vision, scene understanding, and learning for perception.",
  affiliation: "Computer Vision Group · RWTH Aachen",
  linkedin: "https://de.linkedin.com/in/bastian-leibe-76b515",
  profile: "https://www.vision.rwth-aachen.de/",
};

const credentials = [
  { icon: Award, title: "EXIST Gründungsstipendium", desc: "Secured · German Federal Ministry for Economic Affairs and Climate Action." },
  { icon: Briefcase, title: "Deloitte Problem-Solution Fit", desc: "Completed · Sept-Dec 2025." },
  { icon: GraduationCap, title: "RWTH Innovation Ideation", desc: "Completed · full cycle to graduation." },
];

export default function Team() {
  return (
    <PageShell
      title="Team - CloudBee Robotics"
      description="Meet the CloudBee Robotics founding team and academic mentor - robotics engineers from RWTH Aachen, Germany."
      path="/team"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <HeroBackdrop accent="blue" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Team</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The engineers <span className="text-gradient-blue">building the layer.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Robotics engineers and simulation specialists shipping the autonomous OS for embodied AI - out of RWTH Aachen, Germany.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card p-7 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex gap-5 mb-5">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-accent-blue/30 shrink-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10 flex items-center justify-center">
                    {m.image ? (
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display font-bold text-3xl text-accent-blue">
                        {m.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xl text-foreground">{m.name}</h3>
                    <div className="text-sm text-accent-blue font-medium mb-3">{m.role}</div>
                    <div className="flex flex-col gap-1.5 text-xs font-mono">
                      {m.email && (
                        <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-accent-green hover:text-accent-blue transition-colors break-all">
                          <Mail size={12} /> {m.email}
                        </a>
                      )}
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent-blue transition-colors">
                          <Linkedin size={12} /> LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{m.description}</p>
                <div className="flex flex-wrap gap-2">
                  {m.expertise.map((f) => (
                    <span key={f} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Join the team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="rounded-2xl border border-dashed border-accent-blue/30 bg-accent-blue/[0.03] p-7 flex flex-col justify-center items-start hover:border-accent-blue/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-4">
                <ArrowRight size={20} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Your name here</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                We're growing the founding team across AI, robotics, simulation and platform. Build the
                capability factory for physical AI with us.
              </p>
              <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:gap-3 transition-all">
                See open roles <ArrowRight size={14} />
              </Link>
            </motion.div>
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
          <div className="glass-card p-7 max-w-3xl grid sm:grid-cols-[160px_1fr] gap-6 items-start">
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-accent-blue/30">
              <MentorPhoto />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">{advisor.name}</h3>
              <div className="text-sm text-accent-blue font-medium mb-3">{advisor.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{advisor.description}</p>
              <div className="text-xs font-mono text-muted-foreground/80 pt-3 border-t border-border">{advisor.affiliation}</div>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href={advisor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  Computer Vision Group <ArrowRight size={14} />
                </a>
              </div>
            </div>
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

          <div className="text-center mt-12">
            <Link to="/careers" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
              We're hiring - see open roles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
