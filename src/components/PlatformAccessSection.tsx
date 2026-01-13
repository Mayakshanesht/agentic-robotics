import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlatformAccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="border-gradient p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-green-accent/5 rounded-[inherit] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-8">
                <Shield className="w-4 h-4 text-teal" />
                <span className="text-sm text-muted-foreground">Private Beta</span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Get Access to{" "}
                <span className="text-gradient-teal">CloudBee Platform</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Our platform is currently in private beta. Access is selective and 
                designed for serious robotics teams building production systems. 
                Join the future of Physical AI infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Try Beta
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Request Access
                </Button>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-teal/10 via-transparent to-green-accent/10 rounded-3xl blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
