import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="section-container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <span className="text-primary text-sm font-medium">Announcement</span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground">
              Introducing CloudBee Robotics Platform
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Jan 5, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, we're excited to announce CloudBee Robotics — an end-to-end platform 
                for building agentic physical AI. We're building the infrastructure that will 
                power the next generation of intelligent robots.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The robotics industry is at an inflection point. Foundation models have 
                revolutionized what's possible with AI, but bringing this intelligence to 
                the physical world requires entirely new infrastructure. Current approaches 
                are fragmented, expensive, and don't scale.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">What We're Building</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CloudBee Robotics provides an integrated platform for the entire robot AI 
                development lifecycle:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>4D World Generation: Create photorealistic, physics-accurate training environments</li>
                <li>World-Aware Training: Train models that understand physical reality</li>
                <li>Sim-to-Real Transfer: Deploy models that work in the real world</li>
                <li>Continuous Learning: Improve models with real-world feedback</li>
              </ul>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Why Now?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Three trends are converging to make this possible. First, generative AI has 
                reached a level where we can create realistic synthetic worlds. Second, 
                foundation models provide the reasoning capabilities needed for complex 
                physical tasks. Third, computing costs have dropped enough to make 
                large-scale simulation economically viable.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">The Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're a team of robotics engineers from RWTH Aachen University with 
                hands-on experience building autonomous systems. We've seen firsthand 
                the challenges of developing robot AI and we're building the platform 
                we wish we had.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Join the Private Beta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're opening our platform to a select group of partners who share our 
                vision for the future of robotics. If you're working on autonomous 
                systems and want to accelerate your development, we'd love to hear from you.
              </p>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
