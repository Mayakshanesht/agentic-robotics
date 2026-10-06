import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { GdprConsent } from "@/components/GdprConsent";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const steps = [
  { title: "Pilot", body: "We build your first skill with you, in your cell, in about 2 weeks." },
  { title: "Self-improving OS", body: "It runs on every robot and keeps getting better." },
  { title: "Web app", body: "Describe new skills yourself, self-serve. First version: December 2026." },
];

const robotTypes = ["Arm", "Humanoid", "Dexterous hand", "Other"];

const schema = z.object({
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  robot_type: z.string().min(1, "Choose a robot type"),
  task: z.string().trim().max(300).optional().or(z.literal("")),
});

const EMPTY = { email: "", company: "", robot_type: "", task: "" };

function Waitlist() {
  const [form, setForm] = useState(EMPTY);
  const [gdpr, setGdpr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdpr) {
      toast.error("Please accept the data-processing notice (GDPR) to continue.");
      return;
    }
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(Object.values(parsed.error.flatten().fieldErrors)[0]?.[0] ?? "Please review the form");
      return;
    }
    setLoading(true);
    try {
      const d = parsed.data;
      // Reuses the existing beta-access table, so waitlist signups appear in /admin.
      const { error } = await supabase.from("beta_access_requests").insert({
        full_name: d.company || d.email,
        email: d.email,
        company: d.company || null,
        role: `Waitlist · robot type: ${d.robot_type}`,
        use_case: d.task || null,
      });
      if (error) throw error;
      // Best-effort email notification (won't block UX if not configured)
      supabase.functions
        .invoke("send-contact-email", {
          body: {
            name: d.company || d.email,
            company: d.company || "",
            email: d.email,
            interest: "Pilot Program",
            message: `Web app waitlist signup.\n\nRobot type: ${d.robot_type}\nTask: ${d.task || "-"}`,
          },
        })
        .catch(() => {});
      setDone(true);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Could not submit, please try again");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-white p-7 text-center shadow-[var(--shadow-card)]">
        <p className="text-lg font-semibold text-foreground">Thanks. We'll be in touch before the first version opens.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
      <h3 className="text-xl font-bold text-foreground">Join the web app waitlist</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#13233B]">Work email *</span>
          <input required type="email" className="input-site" value={form.email} onChange={set("email")} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#13233B]">Company</span>
          <input className="input-site" value={form.company} onChange={set("company")} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#13233B]">Robot type *</span>
          <select required className="input-site" value={form.robot_type} onChange={set("robot_type")}>
            <option value="" disabled>
              Choose
            </option>
            {robotTypes.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#13233B]">What task should your robot learn?</span>
          <input className="input-site" value={form.task} onChange={set("task")} />
        </label>
      </div>
      <div className="mt-4">
        <GdprConsent checked={gdpr} onChange={setGdpr} />
      </div>
      <button type="submit" disabled={loading || !gdpr} className="btn-pilot mt-5 w-full justify-center py-3 disabled:opacity-60">
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting
          </>
        ) : (
          "Join the waitlist"
        )}
      </button>
      <style>{`
        .input-site {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.95rem;
          color: #13233B;
        }
        .input-site:focus { outline: none; border-color: hsl(var(--primary)); box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15); }
      `}</style>
    </form>
  );
}

export function PilotToSelfServe() {
  return (
    <Section id="waitlist" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>How we work with you</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Start with one skill. Scale to every robot.
        </h2>
      </FadeUp>

      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.08} className="relative">
            <div className="h-full rounded-2xl border border-border bg-[#F8FAFC] p-7">
              <div className="text-[13px] font-bold uppercase tracking-[3px] text-primary">Step {i + 1}</div>
              <h3 className="mt-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#13233B]">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <span aria-hidden className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-primary lg:block">
                →
              </span>
            )}
          </FadeUp>
        ))}
      </div>

      <FadeUp className="mx-auto mt-10 max-w-3xl">
        <Waitlist />
      </FadeUp>
    </Section>
  );
}
