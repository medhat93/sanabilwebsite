import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="mx-3 md:mx-6 mt-3 rounded-2xl transition-all duration-[400ms] border"
          style={{
            background: scrolled
              ? "rgba(10, 37, 64, 0.85)"
              : "rgba(10, 37, 64, 0.6)",
            backdropFilter: `blur(${scrolled ? 24 : 20}px) saturate(1.8)`,
            WebkitBackdropFilter: `blur(${scrolled ? 24 : 20}px) saturate(1.8)`,
            borderColor: scrolled
              ? "rgba(229, 168, 33, 0.2)"
              : "rgba(229, 168, 33, 0.12)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(229, 168, 33, 0.08)"
              : "0 4px 24px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <button onClick={() => handleClick("#home")}>
              <Logo iconSize={96} showText />
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="relative text-base font-semibold font-display text-primary-foreground/80 hover:text-accent px-4 py-2 rounded-lg hover:bg-white/[0.08] transition-all duration-200 tracking-[0.01em] group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <button
                onClick={() => handleClick("#contact")}
                className="gradient-gold px-8 py-3.5 rounded-full text-base font-bold font-display text-accent-foreground hover:scale-105 transition-transform duration-200 btn-gold-glow"
              >
                Book a Meeting
              </button>
            </div>

            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
            style={{
              background: "rgba(10, 37, 64, 0.95)",
              backdropFilter: "blur(24px) saturate(1.8)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-xl font-semibold font-display text-primary-foreground/90 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="gradient-gold px-8 py-3.5 rounded-full font-bold font-display text-accent-foreground mt-4 text-base btn-gold-glow"
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
