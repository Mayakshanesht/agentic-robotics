import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroAnimation from "@/assets/hero-animation.gif";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-background">
      {/* Hero Visual - GIF with proper rendering and clipping */}
      <div className="w-full pt-20 lg:pt-24 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="relative w-full max-w-6xl mx-auto">
          <img
            src={heroAnimation}
            alt="CloudBee Robotics Agentic Physical AI"
            className="w-full h-[70vh] lg:h-[75vh] object-cover object-center rounded-lg shadow-2xl"
            style={{ clipPath: 'inset(2% 4% 2% 1%)' }}
          />
          
          {/* Overlay Text on GIF */}
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                Infrastructure for Agentic Physical AI
              </h2>
              <Link to="/request-access">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white border-orange-400 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content ABOVE the visual - moved up */}
      <div className="py-4 lg:py-6 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-3 text-foreground">
              Building the Intelligent Robotics <span className="text-gradient-teal">Workforce for Industry</span>
            </h1>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Deloitte PSF Graduate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-accent/10 text-green-accent text-xs font-semibold rounded-full border border-green-accent/20">
                <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
                RWTH Innovation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-accent/10 text-orange-accent text-xs font-semibold rounded-full border border-orange-accent/20">
                <span className="w-2 h-2 bg-orange-accent rounded-full animate-pulse"></span>
                EXIST Grant Candidate
              </span>
            </div>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
              CloudBee develops infrastructure for <span className="font-semibold text-foreground">agentic physical AI</span>—enabling world-aware robots and stronger VLA models to perform complex, real-world tasks reliably and at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/request-access">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Request Early Access
                  <ArrowRight className="ml-2 w-4 h-4" />
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
    </section>
  );
}
