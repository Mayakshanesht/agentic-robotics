import { Database, Bot, RefreshCw } from "lucide-react";

function JourneyArt({ stage }: { stage: "goal" | "pilot" | "review" }) {
  const content = {
    goal: { icon: Database, label: "Data for interaction", caption: "Grasping, handling and assembly" },
    pilot: { icon: Bot, label: "Robot capabilities", caption: "Your task and your equipment" },
    review: { icon: RefreshCw, label: "Ongoing improvement", caption: "Evaluate, refine and expand" },
  }[stage];
  const Icon = content.icon;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-secondary/40 px-4 text-center">
      <Icon size={40} className="text-primary" aria-hidden />
      <span className="text-sm font-bold text-foreground">{content.label}</span>
      <span className="text-xs text-muted-foreground">{content.caption}</span>
    </div>
  );
}

export function DefineGoal() { return <JourneyArt stage="goal" />; }
export function FocusPilot() { return <JourneyArt stage="pilot" />; }
export function ReviewOutcome() { return <JourneyArt stage="review" />; }
