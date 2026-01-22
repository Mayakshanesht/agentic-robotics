import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Truck, Wrench, CheckCircle2 } from "lucide-react";
import useCase1 from "@/assets/use-case-1.png";
import useCase2 from "@/assets/use-case-2.png";

const useCases = [
  {
    image: useCase1,
    icon: Factory,
    title: "Manufacturing Automation",
    subtitle: "Assembly & Quality Control",
    description: "Enable robots to perform complex assembly tasks with precision. Multi-step operations, quality inspection, and adaptive handling of variations.",
    benefits: [
      "Complex assembly task automation",
      "Real-time quality inspection",
      "Adaptive handling of part variations",
      "Reduced production downtime",
    ],
  },
  {
    image: useCase2,
    icon: Truck,
    title: "Logistics & Warehousing",
    subtitle: "Pick, Pack & Fulfillment",
    description: "Intelligent pick-and-place operations across diverse inventory. Handle unknown objects, optimize routes, and scale with demand.",
    benefits: [
      "Handle diverse SKU inventory",
      "Optimized picking routes",
      "Seamless scaling with demand",
      "24/7 autonomous operation",
    ],
  },
];

const industries = [
  { name: "Automotive", icon: Wrench },
  { name: "Electronics", icon: Factory },
  { name: "Logistics", icon: Truck },
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Applications
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-teal">Industry Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From manufacturing floors to logistics centers, CloudBee powers the next generation of intelligent robotics.
          </p>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
            >
              <industry.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{industry.name}</span>
            </div>
          ))}
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
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <useCase.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{useCase.subtitle}</span>
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
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
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
