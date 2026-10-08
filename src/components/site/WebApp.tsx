import { Link } from "react-router-dom";
import { FadeUp, Kicker, Section } from "@/components/site/ui";
import { WebAppPreview } from "@/components/site/anim/WebAppPreview";

export function WebApp() {
  return (
    <Section id="web-app" className="border-t border-border">
      <FadeUp className="max-w-3xl">
        <Kicker>The web app</Kicker>
        <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-[-1px] lg:text-[2.5rem]">
          Soon you will describe skills yourself.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-[#13233B]">
          The same loop we run with you in a pilot, as software. Selected companies get access to our web app
          from December 2026, with broader customer access from mid-2027.
        </p>
      </FadeUp>
      <div className="mt-10">
        <WebAppPreview />
      </div>
      <FadeUp className="mt-6">
        <Link to="/pilots#waitlist" className="btn-pilot px-7 py-3.5 text-base">
          Join the web app waitlist
        </Link>
      </FadeUp>
    </Section>
  );
}
