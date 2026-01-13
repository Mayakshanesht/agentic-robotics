import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, DollarSign, Shield, Blocks, Server } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Reduced Development Time", description: "Accelerate from concept to deployment" },
  { icon: DollarSign, title: "Lower Training Cost", description: "Eliminate expensive data collection" },
  { icon: Shield, title: "Improved Robustness", description: "Models that work in reality" },
  { icon: Blocks, title: "Vendor-Agnostic", description: "Works with any robot platform" },
  { icon: Server, title: "Built for Real Deployment", description: "Not just simulation success" },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal/5 via-transparent to-green-accent/5" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Why Enterprises Choose{" "}
            <span className="text-gradient-teal">CloudBee</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 bg-card border border-border rounded-xl hover:border-teal/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
