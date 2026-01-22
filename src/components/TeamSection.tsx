import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    description: "Robotics and AI engineer with experience in autonomous systems, robotic learning, and large-scale AI infrastructure. Built and launched KnowGraph, a graph-based learning platform. Master's in Robotic Systems Engineering from RWTH Aachen University.",
  },
  {
    name: "Madhava Pandiyan",
    role: "Simulation Engineer",
    description: "Specializes in physics-based simulation, sim-to-real transfer, and deployment of learned policies on physical robotic systems. Master's in Robotic Systems Engineering from RWTH Aachen University.",
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
    title: "RWTH Aachen Ideation Program",
    description: "Academic mentorship from Prof. Dr. Bastian Leibe, with strong product and commercialization focus.",
  },
];

const partnerships = [
  "RWTH Aachen University",
  "KTH Sweden",
  "FEV Europe",
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Built by Engineers Who{" "}
            <span className="text-gradient-teal">Ship Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded by robotics engineers with hands-on experience building, 
            launching, and operating complex AI-driven systems.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-gradient p-8"
            >
              <h3 className="font-display text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Research Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-muted-foreground mb-4">Research partnerships</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-foreground">
            {partnerships.map((partner, index) => (
              <span key={partner}>
                <span className="font-display font-semibold">{partner}</span>
                {index < partnerships.length - 1 && (
                  <span className="hidden sm:inline-block ml-8 w-1 h-1 bg-border rounded-full" />
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Validation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8">
            Institutional Validation
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {validation.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card border border-border rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
