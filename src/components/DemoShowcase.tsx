import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Eye, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import demoVideo from "@/assets/CloudBee Agentic Demo.mp4";
import sceneGenVideo from "@/assets/scene_generation_demo.mp4";

const demoFeatures = [
  {
    icon: Eye,
    title: "Visual World Generation",
    description: "Watch synthetic 4D worlds being created in real-time using natural language prompts",
    videoPlaceholder: "World Generation Demo",
  },
  {
    icon: Zap,
    title: "Rapid Agent Training",
    description: "See how agents learn complex tasks 10x faster with our synthetic data pipeline",
    videoPlaceholder: "Training Acceleration",
  },
  {
    icon: Shield,
    title: "Robust Deployment",
    description: "Experience seamless sim-to-real transfer with 95% success rate",
    videoPlaceholder: "Real Robot Deployment",
  },
];

export function DemoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            See It In Action
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Platform <span className="text-gradient-teal">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of CloudBee's infrastructure through interactive demonstrations
            of our core capabilities.
          </p>
        </motion.div>

        {/* Demo Videos Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Agentic Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={demoVideo} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white hover:scale-110 transition-all duration-300"
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm';
                      modal.innerHTML = `
                        <div class="relative w-full max-w-5xl mx-4">
                          <button class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <video class="w-full rounded-lg shadow-2xl" controls autoplay>
                            <source src="${demoVideo}" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      `;
                      modal.onclick = (e) => {
                        const target = e.target as HTMLElement;
                        if (target === modal || target.tagName === 'BUTTON' || target.tagName === 'svg' || target.tagName === 'line') {
                          document.body.removeChild(modal);
                        }
                      };
                      document.body.appendChild(modal);
                    }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-foreground text-center">
                  CloudBee Agentic Demo
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Complete platform showcase from world generation to deployment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Scene Generation Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative"
          >
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-green-accent/30 transition-all duration-300 hover-lift">
              <div className="relative h-64 bg-gradient-to-br from-green-accent/10 to-green-accent/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                >
                  <source src={sceneGenVideo} type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white hover:scale-110 transition-all duration-300"
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm';
                      modal.innerHTML = `
                        <div class="relative w-full max-w-5xl mx-4">
                          <button class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <video class="w-full rounded-lg shadow-2xl" controls autoplay>
                            <source src="${sceneGenVideo}" type="video/mp4">
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      `;
                      modal.onclick = (e) => {
                        const target = e.target as HTMLElement;
                        if (target === modal || target.tagName === 'BUTTON' || target.tagName === 'svg' || target.tagName === 'line') {
                          document.body.removeChild(modal);
                        }
                      };
                      document.body.appendChild(modal);
                    }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-3 text-foreground text-center">
                  Scene Generation Demo
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed text-sm">
                  Real-time 4D synthetic world creation with natural language
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover-lift">
                {/* Video Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-primary">{feature.videoPlaceholder}</p>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-green-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Ready to See More?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to our full demo suite and see how CloudBee can transform your robotics development pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="button-hero group">
                Request Full Demo Access
                <Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule Live Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
