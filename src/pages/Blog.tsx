import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Why Physical AI Needs 4D Synthetic Data",
    excerpt: "Traditional approaches to robot training are hitting a wall. Here's why 4D world generation is the key to scalable robot intelligence.",
    date: "Jan 15, 2026",
    category: "Technology",
  },
  {
    title: "The Sim-to-Real Gap: Solved",
    excerpt: "How world-aware AI models bridge the gap between simulation and real-world deployment.",
    date: "Jan 10, 2026",
    category: "Research",
  },
  {
    title: "Introducing CloudBee Robotics Platform",
    excerpt: "We're building the infrastructure for agentic physical AI. Here's our vision for the future of robotics.",
    date: "Jan 5, 2026",
    category: "Announcement",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-foreground">Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights on physical AI, robotics research, and building the future of automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-professional group cursor-pointer"
              >
                <span className="text-primary text-sm font-medium">{post.category}</span>
                <h2 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
