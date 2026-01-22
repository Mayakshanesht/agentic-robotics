import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPost1() {
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

            <span className="text-primary text-sm font-medium">Technology</span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground">
              Why Physical AI Needs 4D Synthetic Data
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Jan 15, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional approaches to robot training are hitting a wall. The robotics industry 
                faces a fundamental challenge: how do you train robots to handle the infinite 
                complexity of the physical world? Real-world data is expensive, dangerous to collect, 
                and often incomplete. This is where 4D world generation becomes essential.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">The Data Problem</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Current robot training methods rely heavily on either teleoperation data or 
                simplified simulations. Teleoperation is slow, expensive, and doesn't scale. 
                Simple simulations create a "sim-to-real gap" where robots trained in simulation 
                fail in the real world because the simulation wasn't realistic enough.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">What is 4D World Generation?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                4D world generation creates synthetic environments that evolve over time. Unlike 
                static 3D scenes, 4D worlds capture temporal dynamics — how objects move, deform, 
                and interact. This temporal dimension is critical for training robots that need 
                to understand cause and effect.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">The CloudBee Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At CloudBee Robotics, we've built infrastructure that generates photorealistic, 
                physics-accurate 4D training environments at scale. Our platform can create 
                millions of training scenarios that would be impossible or dangerous to capture 
                in the real world.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Results</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Early results show 60-80% faster development cycles compared to traditional 
                data collection methods. More importantly, robots trained on our synthetic 
                data show strong sim-to-real transfer, successfully operating in real-world 
                environments they've never seen before.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The future of robotics isn't about collecting more real-world data — it's about 
                generating better synthetic worlds. That's the infrastructure we're building.
              </p>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
