import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Factory, CheckCircle2 } from "lucide-react";
import useCase1 from "@/assets/use-case-1.png";
import useCase2 from "@/assets/use-case-2.png";

const useCases = [
  {
    image: useCase1,
    icon: Clock,
    title: "Long-Horizon Robotic Tasks",
    subtitle: "Multi-step reasoning and execution",
    description: "Enable robots to execute complex, multi-step tasks that require reasoning over time. Built-in safety mechanisms and recovery strategies ensure reliable operation.",
    benefits: [
      "Multi-step task orchestration",
      "Real-time reasoning and adaptation",
      "Built-in safety and recovery",
    ],
  },
  {
    image: useCase2,
    icon: Factory,
    title: "Scalable Industrial Training",
    subtitle: "From weeks to hours",
    description: "Replace expensive teleoperation with synthetic training data generation. Faster iteration cycles, better sim-to-real transfer, and deployment-ready skills.",
    benefits: [
      "10x faster robot deployment",
      "No manual data or teleoperation",
      "Ready-to-deploy robotic skills",
    ],
  },
];

export function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-teal">Use Cases</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From complex task execution to rapid industrial deployment, CloudBee Robotics 
            powers the next generation of intelligent robots.
          </p>
        </motion.div>

        <div className="space-y-20">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden border border-border bg-card/30">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -inset-4 bg-teal/5 rounded-3xl blur-2xl -z-10" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 rounded-full border border-teal/20 mb-6">
                  <useCase.icon className="w-4 h-4 text-teal" />
                  <span className="text-sm text-teal font-medium">{useCase.subtitle}</span>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {useCase.description}
                </p>

                <ul className="space-y-3">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-accent flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
