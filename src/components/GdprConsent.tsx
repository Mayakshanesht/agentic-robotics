import { Link } from "react-router-dom";

interface Props {
  checked: boolean;
  onChange: (v: boolean) => void;
  id?: string;
  variant?: "dark" | "light";
}

/**
 * GDPR consent checkbox for forms (Art. 6(1)(a) GDPR).
 * Required for storing personal data submitted via CloudBee Robotics forms
 * (based in Germany). Users must actively opt-in before submission.
 */
export function GdprConsent({ checked, onChange, id = "gdpr-consent" }: Props) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed cursor-pointer select-none"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[hsl(var(--accent-blue))] cursor-pointer"
      />
      <span>
        I agree that CloudBee Robotics (Aachen, Germany) may store and process the
        information I submit in this form for the sole purpose of responding to my
        request. I understand I can request deletion at any time by emailing{" "}
        <a
          href="mailto:mayur.waghchoure@cloudbeerobotics.com"
          className="text-accent-blue hover:underline"
        >
          mayur.waghchoure@cloudbeerobotics.com
        </a>
        . See our{" "}
        <Link to="/privacy" className="text-accent-blue hover:underline">
          Privacy Notice
        </Link>{" "}
        for details (GDPR / DSGVO).
      </span>
    </label>
  );
}
