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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "gradient-navy shadow-lg backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-5">
          <button onClick={() => handleClick("#home")}>
            <Logo iconSize={48} showText />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative text-base font-semibold font-display text-primary-foreground/80 hover:text-accent transition-colors duration-200 tracking-[0.01em] group"
                style={{ letterSpacing: "0.01em" }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => handleClick("#contact")}
              className="gradient-gold px-8 py-3.5 rounded-full text-base font-bold font-display text-accent-foreground hover:scale-105 transition-transform duration-200 gold-glow"
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
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 gradient-navy flex flex-col items-center justify-center gap-8 lg:hidden"
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
              className="gradient-gold px-8 py-3.5 rounded-full font-bold font-display text-accent-foreground mt-4 text-base"
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
