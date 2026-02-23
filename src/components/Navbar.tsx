import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Work", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed z-50 flex items-center"
        style={{
          top: "max(12px, env(safe-area-inset-top))",
          left: 16,
          right: 16,
          height: 64,
          padding: "0 16px",
          borderRadius: 16,
          background: scrolled ? "rgba(10, 37, 64, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          border: scrolled
            ? "1px solid rgba(229, 168, 33, 0.1)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0px 0px 0px 1px rgba(229, 168, 33, 0.05), 0 4px 20px rgba(0, 0, 0, 0.15)"
            : "none",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="w-full flex items-center justify-between">
          <button onClick={() => handleClick("#home")} className="min-h-[44px] flex items-center">
            <Logo iconSize={80} showText className="hidden sm:flex" />
            <Logo iconSize={60} showText textSize="small" className="sm:hidden" />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative text-[14px] xl:text-[15px] font-semibold font-display text-primary-foreground/90 hover:text-primary-foreground px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 min-h-[44px]"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => handleClick("#contact")}
              className="px-6 xl:px-7 py-2.5 rounded-full text-[14px] xl:text-[15px] font-bold font-display transition-all duration-200 min-h-[44px]"
              style={{
                background: "#E5A821",
                color: "hsl(207, 75%, 15%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#F0B832";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(229, 168, 33, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E5A821";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Meeting
            </button>
          </div>

          <button
            className="lg:hidden text-primary-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 lg:hidden"
            style={{
              height: "100dvh",
              background: "rgba(10, 37, 64, 0.95)",
              backdropFilter: "blur(24px)",
              paddingTop: "calc(64px + env(safe-area-inset-top))",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-xl font-semibold font-display text-primary-foreground/90 hover:text-accent transition-colors min-h-[52px] px-6 flex items-center"
                style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="mx-6 mt-4 w-[calc(100%-48px)] max-w-[320px] py-4 rounded-xl font-bold font-display text-base"
              style={{ background: "#E5A821", color: "hsl(207, 75%, 15%)" }}
            >
              Book a Meeting
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
