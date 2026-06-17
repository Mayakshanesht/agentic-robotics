import { motion } from "framer-motion";
import demoVideo from "@/assets/hero/humanoid-pallet.mp4";

export function HeroDemoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden border border-accent-blue/30 shadow-2xl shadow-accent-blue/10 bg-background/40 backdrop-blur"
    >
      {/* Glow */}
      <div className="absolute -inset-px rounded-2xl pointer-events-none bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-green/20" />

      <div className="relative aspect-video bg-surface">
        <video
          src={demoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-label="CloudBee Robotics - autonomous humanoid palletizing a box"
        />
        {/* Top-left chrome */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Live demo
          </span>
        </div>
        {/* Bottom strip */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span className="text-foreground/90">Humanoid · palletize box</span>
            <span>AgenticOS · ROS 2 skill</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
