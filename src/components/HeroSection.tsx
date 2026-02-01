import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.gif";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16 lg:pb-24 overflow-hidden bg-background">
      {/* Full-width Background Animation - Fully Visible */}
      <div className="absolute inset-0">
        <img
          src={heroAnimation}
          alt="CloudBee Robotics Agentic Physical AI"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground font-medium">Private Beta</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
            Agentic Physical AI{" "}
            <span className="text-gradient-teal">Infrastructure</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            End-to-end platform for long horizon robotics — from synthetic world generation 
            to deployable AI models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-access">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Request Access
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/technology">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
