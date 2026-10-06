import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { CONTACT_EMAIL } from "@/data/company";

const navLinks = [
  { label: "How it works", to: "/how-it-works" },
  { label: "Why CloudBee", to: "/why-cloudbee" },
  { label: "Pilots", to: "/pilots" },
  { label: "Research", to: "/research" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Investors", to: "/investors" },
];

export const BOOK_A_PILOT = `mailto:${CONTACT_EMAIL}?subject=Pilot%20request`;

/** Navy badge: the logo is drawn for dark backgrounds, so it never sits directly on white. */
export function LogoBadge({ className = "h-10" }: { className?: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-xl bg-[#0A1C33] p-2.5">
      <img src={logo} alt="CloudBee Robotics" className={`${className} w-auto`} />
    </span>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" aria-label="CloudBee Robotics home">
            <LogoBadge className="h-8 lg:h-9" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={BOOK_A_PILOT} className="btn-pilot">
              Book a pilot
            </a>
          </div>

          <button className="p-2 text-foreground lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-white lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-5">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={BOOK_A_PILOT} className="btn-pilot mt-2 w-full">
                Book a pilot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
