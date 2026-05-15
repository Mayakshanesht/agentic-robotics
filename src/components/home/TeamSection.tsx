import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
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
  {
    icon: Briefcase,
    title: "Deloitte Problem–Solution Fit",
    description: "Successfully completed Sept – Dec 2025, validating problem definition and solution direction.",
  },
  {
    icon: GraduationCap,
    title: "RWTH Innovation Ideation Program",
    description: "Accelerator through RWTH Aachen's innovation wing — guidance on product development and market positioning.",
  },
  {
    icon: Award,
    title: "EXIST Research Transfer Grant",
    description: "Applying for EXIST funding with Prof. Dr. Bastian Leibe as academic mentor at RWTH Aachen.",
  },
];

const lois = ["FEV Europe", "Haver & Boecker", "Dorle Controls", "Fraunhofer IML"];

export function TeamSection() {
  return (
    <section className="section-spacing border-t border-border bg-surface/30">
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

        {/* Team grid */}
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
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent-blue/30 shrink-0">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">{m.name}</h3>
                <div className="text-sm text-accent-blue font-medium mb-2">{m.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
