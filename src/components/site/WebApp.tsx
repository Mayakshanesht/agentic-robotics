import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { WebAppPreview } from "@/components/site/anim/WebAppPreview";

export function WebApp() {
  return (
    <Section id="web-app" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>Stay in touch</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Be part of what comes next.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          Join our waitlist for company updates and future opportunities to work with CloudBee Robotics.
          Tell us about the task and robot you have in mind.
        </p>
      </FadeUp>
      <div className="mt-10">
        <WebAppPreview />
      </div>
      <FadeUp className="mt-6">
        <Link to="/pilots#waitlist" className="btn-pilot px-7 py-3.5 text-base">
          Join the waitlist
        </Link>
      </FadeUp>
    </Section>
  );
}
