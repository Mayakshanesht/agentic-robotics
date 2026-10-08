import { ClipboardList, Factory, CheckCircle2 } from "lucide-react";

function JourneyArt({ stage }: { stage: "goal" | "pilot" | "review" }) {
  const content = {
    goal: { icon: ClipboardList, label: "Define the goal", caption: "A task that matters to your team" },
    pilot: { icon: Factory, label: "Focus the pilot", caption: "Your robot and your operation" },
    review: { icon: CheckCircle2, label: "Review the outcome", caption: "A practical next step" },
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
