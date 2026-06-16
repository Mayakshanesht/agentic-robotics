import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Briefcase, Mail } from "lucide-react";
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
      "Robotics and AI engineer with experience in autonomous systems, robotic learning, and large-scale AI infrastructure. M.Sc. Robotic Systems Engineering, RWTH Aachen.",
  },
  {
    name: "Madhava Pandiyan",
    role: "Simulation Engineer",
    image: madhavaImg,
    description:
      "Specializes in physics-based simulation, sim-to-real transfer, and deployment of learned policies on physical robotic systems. M.Sc. Robotic Systems Engineering, RWTH Aachen.",
  },
];

const validation = [
  { icon: Award, title: "EXIST Research Transfer Grant - Secured", description: "German Federal Ministry of Economic Affairs grant to build CloudBee Robotics out of RWTH Aachen." },
  { icon: GraduationCap, title: "Academic Mentor - Prof. Dr. Bastian Leibe", description: "Head of the Computer Vision Group at RWTH Aachen - world-leading research in perception and learning." },
  { icon: Briefcase, title: "RWTH Ideation Program - Completed", description: "Full Deloitte Problem-Solution Fit and RWTH Innovation Ideation cycle - successfully graduated." },
];

const lois = ["FEV Europe", "Haver & Boecker", "Dorle Controls", "Fraunhofer IML"];

export function TeamSection() {
  return (
    <section id="team" className="section-spacing border-t border-border bg-surface/30 scroll-mt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-accent-blue mb-3">Team</div>
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-4">
            Built by Engineers Who <span className="text-gradient-blue">Ship Systems.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Founded by robotics engineers with hands-on experience building, launching, and operating
            complex AI-driven systems.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-7 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-accent-blue/30 shrink-0">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-lg text-foreground">{m.name}</h3>
                <div className="text-sm text-accent-blue font-medium mb-2">{m.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{m.description}</p>
                {m.email && (
                  <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 text-xs font-mono text-accent-green hover:text-accent-blue transition-colors break-all">
                    <Mail size={12} /> {m.email}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pitch moment */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="glass-card overflow-hidden p-0">
            <img src={pitchImg} alt="Mayur Waghchoure pitching CloudBee Robotics at the RWTH Aachen ideation half-time event" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-3">Building in Public</div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 leading-tight">
              From a thesis to a thesis-defying mission.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founder Mayur Waghchoure presenting CloudBee Robotics at the RWTH Aachen Innovation
              Ideation Program - laying out the case for a German-built infrastructure layer for
              agentic physical AI.
            </p>
            <p className="text-sm text-muted-foreground">
              Backed by RWTH Aachen, supported by EXIST, validated by Deloitte and industry LOIs from
              FEV Europe, Haver & Boecker, Dorle Controls, and Fraunhofer IML.
            </p>
          </div>
        </motion.div>

        {/* LOIs */}
        <div className="glass-card p-8 max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-accent-green mb-2">Letters of Intent</div>
          <h3 className="font-display font-semibold text-lg mb-5">Validated by industry partners</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {lois.map((c) => (
              <span key={c} className="px-4 py-1.5 text-sm rounded-full border border-accent-blue/25 bg-accent-blue/5 text-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Validation */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {validation.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-card p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 text-accent-green flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h4 className="font-display font-semibold text-sm text-foreground mb-1.5">{v.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/careers" className="inline-flex items-center gap-2 text-accent-blue font-semibold text-sm hover:gap-3 transition-all">
            We're hiring →
          </Link>
        </div>
      </div>
    </section>
  );
}
