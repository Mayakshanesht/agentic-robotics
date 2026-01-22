import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BlogPost2() {
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

            <span className="text-primary text-sm font-medium">Research</span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground">
              The Sim-to-Real Gap: Solved
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Jan 10, 2026</span>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground leading-relaxed mb-6">
                For years, the sim-to-real gap has been the elephant in the room for robotics 
                AI. Models that perform brilliantly in simulation often fail spectacularly 
                when deployed on real hardware. We believe we've cracked this problem with 
                world-aware AI models.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Understanding the Gap</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The sim-to-real gap exists because simulations are approximations. No matter 
                how detailed, they can't perfectly capture every nuance of physical reality — 
                friction variations, lighting changes, sensor noise, mechanical wear. Traditional 
                approaches try to make simulations more realistic, but this is an endless pursuit.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">A New Paradigm: World-Aware Models</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Instead of trying to perfect simulations, we train models that understand the 
                nature of physical reality itself. World-aware models learn the underlying 
                physics, not just pattern-matched behaviors. They understand that objects fall 
                due to gravity, that surfaces have friction, that light behaves predictably.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">Domain Randomization 2.0</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional domain randomization randomly varies simulation parameters hoping 
                the model generalizes. Our approach is more structured — we systematically 
                vary physics parameters along meaningful dimensions, helping models understand 
                what aspects of the physical world are variable and what are constant.
              </p>

              <h2 className="font-display text-2xl font-semibold mt-8 mb-4">The Results Speak</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Models trained on our platform show 50-70% reduction in sim-to-real transfer 
                failures. More importantly, they generalize better to novel situations — 
                handling objects, environments, and tasks they've never seen before.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The sim-to-real gap isn't about better graphics or more accurate physics 
                engines. It's about training models that truly understand how the physical 
                world works.
              </p>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
