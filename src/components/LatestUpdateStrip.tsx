import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ideationPitch from "@/assets/ideation-pitch.jpg";

export function LatestUpdateStrip() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-primary/20 flex-shrink-0">
            <img 
              src={ideationPitch} 
              alt="CloudBee at RWTH Ideation Event"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Latest Update
              </span>
            </div>
            <p className="text-foreground leading-relaxed">
              CloudBee Robotics was recently pitched by Mayur Waghchoure at the{" "}
              <span className="font-semibold">RWTH Ideation Event</span>, presenting our vision for agentic physical AI infrastructure.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Photo credit: © RWTH Innovation GmbH
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
