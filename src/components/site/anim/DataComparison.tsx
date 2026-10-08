import { ArrowRight, ClipboardList, CheckCircle2 } from "lucide-react";

export function DataComparison() {
  return (
    <div className="grid items-center gap-5 rounded-2xl border border-border bg-white p-8 md:grid-cols-[1fr_auto_1fr]">
      <div className="text-center">
        <ClipboardList size={36} className="mx-auto text-primary" aria-hidden />
        <h3 className="mt-4 text-lg font-bold">A defined task</h3>
        <p className="mt-2 text-sm text-muted-foreground">Bring your operational goals to the conversation.</p>
      </div>
      <ArrowRight className="mx-auto rotate-90 text-primary md:rotate-0" aria-hidden />
      <div className="text-center">
        <CheckCircle2 size={36} className="mx-auto text-primary" aria-hidden />
        <h3 className="mt-4 text-lg font-bold">A focused pilot</h3>
        <p className="mt-2 text-sm text-muted-foreground">Review the outcome before choosing your next step.</p>
      </div>
    </div>
  );
}
