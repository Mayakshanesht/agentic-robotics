import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.gif";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-background">
      {/* Content ABOVE the visual */}
      <div className="pt-32 pb-16 lg:pb-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-foreground">
              Agentic Physical AI{" "}
              <span className="text-gradient-teal">Infrastructure</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              Build, train, and deploy long-horizon robotic intelligence using scalable synthetic worlds.
            </p>

            <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10">
              A unified platform for world generation, agentic training, and robot-ready deployment.
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
      </div>

      {/* Hero Visual - Full width, centered, starts below text */}
      <div className="w-full flex-1 min-h-[50vh] lg:min-h-[60vh] relative">
        <img
          src={heroAnimation}
          alt="CloudBee Robotics Agentic Physical AI"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
