import { motion } from "framer-motion";
import agentOsVideo from "@/assets/videos/agentOS.mp4.asset.json";
import dataforgeVideo from "@/assets/videos/dataforge.mp4.asset.json";
import modellabVideo from "@/assets/videos/modellab.mp4.asset.json";
import video1 from "@/assets/videos/video_1.mp4.asset.json";
import humanoidPallet2 from "@/assets/videos/humanoid-pallet-2.mp4.asset.json";
import robotArm from "@/assets/hero/robot-arm.jpg";
import robotHumanoid from "@/assets/hero/robot-humanoid.jpg";

type Tile =
  | { kind: "video"; src: string; eyebrow: string; title: string; span?: string }
  | { kind: "image"; src: string; eyebrow: string; title: string; position?: string; span?: string };

const tiles: Tile[] = [
  { kind: "video", src: agentOsVideo.url, eyebrow: "AgentOS", title: "Autonomous execution & failure recovery", span: "lg:col-span-2 lg:row-span-2" },
  { kind: "video", src: dataforgeVideo.url, eyebrow: "DataForge", title: "Synthetic scenarios at scale" },
  { kind: "video", src: modellabVideo.url, eyebrow: "ModelLab", title: "Multimodal model training" },
  { kind: "video", src: video1.url, eyebrow: "Safety", title: "EU AI Act compliant policies" },
  { kind: "video", src: humanoidPallet2.url, eyebrow: "Humanoid", title: "Long-horizon palletizing" },
  { kind: "image", src: robotArm, eyebrow: "Manipulation", title: "Precision arm control" },
  { kind: "image", src: robotHumanoid, eyebrow: "Embodiment", title: "Any robot, one OS", position: "center 25%" },
];

export function DemoGallery() {
  return (
    <section id="demo-gallery" className="section-spacing border-t border-border relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex items-end justify-between flex-wrap gap-4 mb-10"
        >
          <div className="max-w-xl">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent-blue mb-3">
              Demo Gallery
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-5xl">
              See CloudBee Robotics <span className="text-gradient-green">in action.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Live captures from AgentOS, DataForge, and our research lab — running on real robots and in synthetic worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[210px] gap-3">
          {tiles.map((t, i) => (
            <motion.div
              key={`${t.eyebrow}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden border border-border bg-surface ${t.span ?? ""}`}
            >
              {t.kind === "video" ? (
                <video
                  src={t.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={t.src}
                  alt={t.title}
                  loading="lazy"
                  style={{ objectPosition: t.position ?? "center center" }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              {t.kind === "video" && (
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-background/70 backdrop-blur text-[9px] font-mono uppercase tracking-wider text-accent-green border border-accent-green/30">
                  <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" /> Live
                </div>
              )}
              <div className="absolute left-3 right-3 bottom-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent-blue mb-0.5">{t.eyebrow}</div>
                <div className="font-display font-semibold text-sm lg:text-base text-foreground leading-tight">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
