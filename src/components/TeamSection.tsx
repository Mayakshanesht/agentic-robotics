import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    description: "Robotics and AI engineer with experience in autonomous systems, robotic learning, and large-scale AI infrastructure. Previously built and launched KnowGraph, a graph-based learning platform. Master's in Robotic Systems Engineering from RWTH Aachen University.",
  },
  {
    name: "Madhava Pandiyan",
    role: "Simulation Engineer",
    description: "Specializes in physics-based simulation, sim-to-real transfer, and deployment of learned policies on physical robotic systems. Master's in Robotic Systems Engineering from RWTH Aachen University.",
  },
];

const validation = [
  {
    icon: Award,
    title: "Deloitte Problem–Solution Fit Program",
    description: "Successfully completed (Sept – Dec 2025), validating problem definition and solution direction.",
  },
  {
    icon: GraduationCap,
    title: "RWTH Aachen Ideation Program",
    description: "Academic mentorship from Prof. Dr. Bastian Leibe, with strong product and commercialization focus.",
  },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
              <p className="text-teal font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

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
                className="flex gap-4 p-6 bg-card/50 border border-border rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-teal" />
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
