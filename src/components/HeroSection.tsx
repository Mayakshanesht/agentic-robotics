import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.gif";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_46%/0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />
      
      {/* Floating Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-green-accent/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-8"
            >
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Private Beta Available</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              Agentic Physical AI{" "}
              <span className="text-gradient-teal">Infrastructure</span>{" "}
              for Real-World Robots
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              We enable robots to reason, learn, and execute complex tasks using 
              synthetic data, world models, and agentic execution — from simulation 
              to real deployment.
            </p>

            <p className="text-base text-cyan-soft/80 max-w-xl mx-auto lg:mx-0 mb-10 italic">
              Our vision is a future where robots connect to CloudBee, request 
              intelligence for a task, and deploy it directly on real hardware.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Try Beta
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Request Access
              </Button>
            </div>
          </motion.div>

          {/* Hero Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent pointer-events-none" />
              <img
                src={heroAnimation}
                alt="CloudBee Robotics Agentic AI Workflow"
                className="w-full h-auto"
              />
            </div>
            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-teal/10 rounded-3xl blur-3xl -z-10 animate-glow-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
