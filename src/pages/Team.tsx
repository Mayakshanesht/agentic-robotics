import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, Mail, Building2, MapPin, Award, Briefcase, ArrowRight, Linkedin,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    email: "mayurwaghchoure1995@gmail.com",
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
  {
    name: "Doniyor Tropmann",
    role: "Web & Cloud Infrastructure",
    image: null as string | null,
    linkedin: null,
    description:
      "Cloud and web infrastructure engineer building the scalable platforms behind CloudBee — from deployment pipelines to customer-facing experiences.",
    expertise: ["Cloud Architecture", "Web Infrastructure", "Scalable Systems", "Deployment Platforms"],
  },
];

const advisor = {
  name: "Prof. Dr. Bastian Leibe",
  role: "Academic Mentor — RWTH Aachen",
  description:
    "Head of the Computer Vision Group at RWTH Aachen University. Academic mentor for CloudBee Robotics under the EXIST Research Transfer Grant. World-leading research in computer vision, scene understanding, and learning for perception.",
  affiliation: "Computer Vision Group · RWTH Aachen",
};

const credentials = [
  { icon: Award, title: "EXIST Research Transfer Grant", desc: "Secured · German Federal Ministry for Economic Affairs and Climate Action." },
  { icon: Briefcase, title: "Deloitte Problem–Solution Fit", desc: "Completed · Sept–Dec 2025." },
  { icon: GraduationCap, title: "RWTH Innovation Ideation", desc: "Completed · full cycle to graduation." },
];

export default function Team() {
  return (
    <PageShell
      title="Team — CloudBee Robotics"
      description="Meet the CloudBee Robotics founding team and academic mentor — robotics engineers from RWTH Aachen, Germany."
      path="/team"
    >
      <section className="relative pt-32 lg:pt-40 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="section-container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-4">Team</div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl leading-tight mb-5">
              The engineers <span className="text-gradient-blue">building the layer.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Robotics engineers and simulation specialists shipping the autonomous OS for embodied AI — out of RWTH Aachen, Germany.
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
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-accent-blue/30 shrink-0">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
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

          <div className="text-center mt-12">
            <Link to="/careers" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:gap-3 transition-all">
              We're hiring — see open roles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
