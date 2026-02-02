import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LatestUpdateStrip } from "@/components/LatestUpdateStrip";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import mayurImg from "@/assets/mayur.png";
import madhavaImg from "@/assets/madhava.png";

const team = [
  {
    name: "Mayur Waghchoure",
    role: "Founder & CEO",
    image: mayurImg,
    description: "Robotics and AI engineer with experience in autonomous systems and large-scale AI infrastructure. M.Sc. in Robotic Systems Engineering, RWTH Aachen University.",
  },
  {
    name: "Madhava Pandiyan",
    role: "Simulation Engineer",
    image: madhavaImg,
    description: "Specialist in simulation and deployment of robotic systems. M.Sc. in Robotic Systems Engineering, RWTH Aachen University.",
  },
];

const validation = [
  {
    icon: Briefcase,
    title: "Deloitte Problem–Solution Fit",
    description: "Successfully completed Sept – Dec 2025 with Jo (Manager), validating problem definition and solution direction.",
  },
  {
    icon: GraduationCap,
    title: "RWTH Innovation Ideation Program",
    description: "Accelerator program through RWTH Aachen University's innovation wing, with guidance from Tobias (Coach) on product development and market positioning.",
  },
  {
    icon: Award,
    title: "EXIST Research Transfer Grant",
    description: "Applying for EXIST funding with Prof. Dr. Bastian Leibe as academic mentor at RWTH Aachen University. Program period: May 1, 2026 onwards.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Built by Engineers Who <span className="text-gradient-teal">Ship Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CloudBee was founded by robotics engineers with hands-on experience building, deploying, and operating real-world AI systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <LatestUpdateStrip />
            <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="border-gradient p-8 text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
          </div>
        </section>

        {/* Validation */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-3xl font-bold mb-6">
                Institutional <span className="text-gradient-teal">Validation & Support</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {validation.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 p-6 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
