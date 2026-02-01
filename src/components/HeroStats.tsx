import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Rocket, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "2",
    label: "Innovation Programs",
    description: "Deloitte & RWTH Accelerated",
  },
  {
    icon: Users,
    value: "Enterprise",
    label: "Ready",
    description: "Scalable deployment platform",
  },
  {
    icon: Rocket,
    value: "10x",
    label: "Faster Training",
    description: "vs traditional teleoperation",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Sim-to-Real Transfer",
    description: "Deployment success rate",
  },
];

export function HeroStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Trusted by Innovation Leaders
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Proven <span className="text-gradient-teal">Impact & Scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mx-auto w-14 h-14 mb-3">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl w-full h-full flex items-center justify-center border border-primary/20">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <div className="space-y-1">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="font-display text-2xl lg:text-3xl font-bold text-gradient-teal"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="font-semibold text-foreground text-lg">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Deloitte Selected</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-accent/10 rounded-full border border-green-accent/20">
              <Rocket className="w-4 h-4 text-green-accent" />
              <span className="text-sm font-medium text-green-accent">RWTH Innovation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-accent/10 rounded-full border border-orange-accent/20">
              <TrendingUp className="w-4 h-4 text-orange-accent" />
              <span className="text-sm font-medium text-orange-accent">Industry Validated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
