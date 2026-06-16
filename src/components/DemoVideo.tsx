import { useRef } from "react";
import { Maximize2 } from "lucide-react";

/**
 * Autoplay demo video with download discouraged (no download button, no context
 * menu, no picture-in-picture) and a tap-to-fullscreen control. Renders the
 * video + button as absolutely-positioned layers, so drop it inside a `relative`
 * container (existing badge/caption overlays can sit alongside it).
 *
 * Note: any video served from a public URL can still be fetched by a determined
 * user - this removes the casual "Download video" path. For hard protection,
 * use a signed-URL streaming provider.
 */
export function DemoVideo({ src, label }: { src: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const goFullscreen = () => {
    const v = ref.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
  };

  return (
    <>
      <video
        ref={ref}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        aria-label={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={goFullscreen}
        aria-label="Watch fullscreen"
        className="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-lg bg-background/70 backdrop-blur border border-border text-foreground/80 hover:text-foreground hover:border-accent-blue/50 flex items-center justify-center transition-colors"
      >
        <Maximize2 size={15} />
      </button>
    </>
  );
}
