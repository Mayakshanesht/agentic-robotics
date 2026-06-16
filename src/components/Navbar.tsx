import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Solution", href: "/solution" },
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center" aria-label="CloudBee Robotics home">
            <img
              src={logo}
              alt="CloudBee Robotics"
              className="h-11 lg:h-12 w-auto rounded-lg ring-1 ring-white/10 shadow-lg shadow-black/30"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? "text-accent-blue" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-pilot">
              Request Pilot
            </Link>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
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
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="section-container py-5 flex flex-col gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  className={({ isActive }) =>
                    `px-3 py-3 text-sm font-medium rounded-md ${
                      isActive ? "text-accent-blue bg-secondary/40" : "text-muted-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-pilot mt-2 w-full">
                Request Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
