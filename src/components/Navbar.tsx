import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Technology", href: "/#technology" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Platform", href: "/#platform" },
  { label: "Team", href: "/#team" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If on home page and link is an anchor, scroll to section
    if (location.pathname === "/" && href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href === "/") {
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          {link.label}
        </Link>
      );
    }
    
    if (link.href.startsWith("/#")) {
      if (location.pathname === "/") {
        return (
          <a
            key={link.href}
            href={link.href.replace("/#", "#")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        className="text-muted-foreground hover:text-foreground transition-colors font-medium"
      >
        {link.label}
      </Link>
    );
  };

  const renderMobileLink = (link: { label: string; href: string }) => {
    if (link.href === "/") {
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    
    if (link.href.startsWith("/#")) {
      if (location.pathname === "/") {
        return (
          <a
            key={link.href}
            href={link.href.replace("/#", "#")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link
          key={link.href}
          to={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CloudBee Robotics" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => renderLink(link))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/request-access">
              <Button variant="heroOutline" size="default">
                Request Access
              </Button>
            </Link>
            <Link to="/request-access">
              <Button variant="hero" size="default">
                Try Beta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => renderMobileLink(link))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link to="/request-access" onClick={() => setIsOpen(false)}>
                  <Button variant="heroOutline" size="lg" className="w-full">
                    Request Access
                  </Button>
                </Link>
                <Link to="/request-access" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Try Beta
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
