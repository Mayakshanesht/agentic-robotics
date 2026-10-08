import { Target, Users, ClipboardCheck } from "lucide-react";

const priorities = [
  { icon: Target, title: "A defined goal", body: "Start with one task and clear success criteria." },
  { icon: Users, title: "A direct partner", body: "Work with our robotics team throughout the pilot." },
  { icon: ClipboardCheck, title: "A practical review", body: "Assess the outcome before choosing your next investment." },
];

export function FasterCheaper() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {priorities.map(({ icon: Icon, title, body }) => (
        <div key={title} className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
          <Icon size={32} className="text-primary" aria-hidden />
          <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{body}</p>
        </div>
      ))}
    </div>
  );
}
