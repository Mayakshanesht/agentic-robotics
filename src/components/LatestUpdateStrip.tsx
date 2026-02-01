import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ideationPitch from "@/assets/ideation-pitch.jpg";

export function LatestUpdateStrip() {
  return (
    <section className="py-16 lg:py-20 bg-background border-y border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image - Left half */}
          <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <img 
              src={ideationPitch} 
              alt="CloudBee at RWTH Ideation Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <p className="text-xs text-muted-foreground">
                © RWTH Innovation GmbH
              </p>
            </div>
          </div>

          {/* Content - Right half */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Latest Update
              </span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              RWTH Ideation Event
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              CloudBee Robotics was recently pitched by Mayur Waghchoure at the{" "}
              <span className="font-semibold text-foreground">RWTH Ideation Event</span>, 
              presenting our vision for agentic physical AI infrastructure.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4">
              Building the future of robotics AI in Aachen, Germany.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
