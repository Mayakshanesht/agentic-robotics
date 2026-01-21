import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.gif";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Full-width Background Animation */}
      <div className="absolute inset-0">
        <img
          src={heroAnimation}
          alt="CloudBee Robotics Agentic Physical AI"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_40%/0.05)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />

      {/* Floating Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground font-medium">Private Beta Available</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
            Agentic Physical AI{" "}
            <span className="text-gradient-teal">Infrastructure</span>{" "}
            <br className="hidden sm:block" />
            for Long Horizon Robotics
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            End-to-end platform for complex robotic tasks — from synthetic 4D world generation 
            to deployable AI models. Replace months of manual engineering with automated, 
            scalable robot intelligence.
          </p>

          <p className="text-base text-primary max-w-2xl mx-auto mb-10 font-medium">
            60-80% faster development • 50-70% lower cost • Safety built-in from the start
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-access">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Request Early Access
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                <Play className="w-4 h-4 mr-2" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">Backed by research from leading institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <span className="font-display font-semibold">RWTH Aachen University</span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="font-display font-semibold">KTH Sweden</span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="font-display font-semibold">FEV Europe Mentorship</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
