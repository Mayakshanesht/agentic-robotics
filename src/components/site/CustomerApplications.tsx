import { ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BOOK_A_PILOT_PATH } from "@/data/company";
import { FadeUp, Kicker, Section } from "@/components/site/ui";

const industries = [
  { id: "manufacturing", label: "Manufacturing", sector: "Industrial manufacturing", heading: "Keep your team focused on production.", tasks: ["Part handling", "Machine loading", "Assembly support"] },
  { id: "automotive", label: "Automotive", sector: "Automotive", heading: "Explore robotics around your assembly work.", tasks: ["Component handling", "Parts preparation", "Assembly support"] },
  { id: "electronics", label: "Electronics", sector: "Electronics", heading: "Find a practical starting point on your workbench.", tasks: ["Component preparation", "Workbench handling", "Assembly support"] },
  { id: "battery", label: "Batteries", sector: "Battery technology", heading: "Discuss the handling tasks in your operation.", tasks: ["Parts preparation", "Material handling", "Assembly support"] },
  { id: "logistics", label: "Logistics", sector: "Logistics", heading: "Explore the repetitive work between arrival and dispatch.", tasks: ["Item handling", "Sorting support", "Packing preparation"] },
];

export function CustomerApplications() {
  return (
    <Section id="customer-industries" className="border-t border-border bg-white">
      <FadeUp className="max-w-3xl">
        <Kicker>For your industry</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Start with a task your team cares about.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Choose your industry to explore potential pilot opportunities. Your task, priorities and operating
          requirements guide the conversation.
        </p>
      </FadeUp>
      <Tabs defaultValue="manufacturing" className="mt-8">
        <TabsList aria-label="Choose your industry" className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {industries.map((industry) => (
            <TabsTrigger key={industry.id} value={industry.id} className="min-h-11 rounded-full border border-border bg-background px-5 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-white">
              {industry.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {industries.map((industry) => (
          <TabsContent key={industry.id} value={industry.id} className="mt-5">
            <div className="grid overflow-hidden rounded-2xl border border-border bg-[#F8FAFC] lg:grid-cols-[1.3fr_1fr]">
              <div className="p-7 lg:p-10">
                <Factory size={30} className="text-primary" aria-hidden />
                <h3 className="mt-5 max-w-xl text-2xl font-bold leading-snug text-foreground">{industry.heading}</h3>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">Potential tasks to discuss</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {industry.tasks.map((task) => <li key={task} className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground">{task}</li>)}
                </ul>
                <Link to={`${BOOK_A_PILOT_PATH}&sector=${encodeURIComponent(industry.sector)}`} className="btn-pilot mt-7">
                  Discuss your task <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
              <div className="bg-[#0A1C33] p-7 text-white lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-teal-200">A useful first conversation</p>
                <ul className="mt-6 space-y-5">
                  {["Identify the work you want to automate", "Discuss your robot and operational requirements", "Agree the scope and success criteria for a pilot"].map((goal) => (
                    <li key={goal} className="flex gap-3 text-base leading-relaxed"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-300" aria-hidden />{goal}</li>
                  ))}
                </ul>
                <p className="mt-7 text-sm leading-relaxed text-slate-300">These are discussion examples. Pilot suitability and scope are assessed with your team.</p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
