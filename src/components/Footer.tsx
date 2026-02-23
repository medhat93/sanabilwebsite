import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Twitter, Github, Instagram, ChevronUp } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" },
];

const serviceLinks = [
  { label: "Web Applications", tabIndex: 0 },
  { label: "Mobile Applications", tabIndex: 1 },
  { label: "Enterprise Systems", tabIndex: 2 },
  { label: "AI & Machine Learning", tabIndex: 3 },
  { label: "UI/UX Design", tabIndex: 4 },
  { label: "DevOps & Cloud", tabIndex: 5 },
];
const companyLinks = [
  { label: "About Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group flex items-center text-sm"
    style={{
      color: "rgba(255, 255, 255, 0.35)",
      lineHeight: 2.2,
      textDecoration: "none",
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "#E5A821";
      e.currentTarget.style.transform = "translateX(3px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "rgba(255, 255, 255, 0.35)";
      e.currentTarget.style.transform = "translateX(0)";
    }}
  >
    <span
      className="inline-block mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-1.5"
      style={{ transition: "all 0.25s ease", fontSize: 12, color: "#E5A821" }}
    >
      →
    </span>
    {children}
  </a>
);

const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h4
    className="flex items-center gap-2 font-display font-semibold uppercase mb-5"
    style={{ fontSize: 14, letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.9)" }}
  >
    <span className="inline-block w-1 h-1 rounded-full" style={{ background: "#E5A821" }} />
    {children}
  </h4>
);

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [nlEmail, setNlEmail] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const stagger = (i: number) => ({ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A2540 0%, #050E1A 40%, #030912 100%)",
        paddingTop: 48,
        paddingBottom: "calc(24px + env(safe-area-inset-bottom))",
      }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(229, 168, 33, 0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Top-edge gold mist */}
      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{
        height: 120,
        background: "linear-gradient(180deg, rgba(229, 168, 33, 0.08) 0%, transparent 100%)",
      }} />

      {/* Gold top separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 300,
          height: 1,
          background: "linear-gradient(90deg, transparent 0%, rgba(229, 168, 33, 0.3) 50%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={stagger(0)}
            className="text-center sm:text-left"
          >
            <div className="flex justify-center sm:justify-start">
              <Logo iconSize={80} showText textSize="small" />
            </div>
            <p className="mt-4 mx-auto sm:mx-0" style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.35)", lineHeight: 1.5, maxWidth: 280 }}>
              سنابل — where ideas grow into extraordinary software.
            </p>
            <div className="flex gap-2.5 mt-5 justify-center sm:justify-start">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="group flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(229, 168, 33, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <s.icon size={16} className="group-hover:text-[#E5A821] transition-colors" style={{ color: "rgba(255, 255, 255, 0.4)" }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={stagger(1)}>
            <ColumnHeading>Services</ColumnHeading>
            {serviceLinks.map((s) => (
              <a
                key={s.label}
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("select-service-tab", { detail: s.tabIndex }));
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center text-sm"
                style={{
                  color: "rgba(255, 255, 255, 0.35)",
                  lineHeight: 2.2,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E5A821";
                  e.currentTarget.style.transform = "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.35)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  className="inline-block mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-1.5"
                  style={{ transition: "all 0.25s ease", fontSize: 12, color: "#E5A821" }}
                >
                  →
                </span>
                {s.label}
              </a>
            ))}
          </motion.div>

          {/* Company */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={stagger(2)}>
            <ColumnHeading>Company</ColumnHeading>
            {companyLinks.map((l) => (
              <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
            ))}
          </motion.div>

          {/* Legal */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={stagger(3)}>
            <ColumnHeading>Legal</ColumnHeading>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </motion.div>
        </div>

        {/* Newsletter bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: 16,
            padding: "20px 20px",
          }}
          /* Desktop padding override via className */
        >
          <div>
            <p className="font-semibold text-primary-foreground" style={{ fontSize: 16 }}>Stay in the loop</p>
            <p style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.35)" }}>
              Get insights on AI-native development delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              className="flex-1 sm:w-[240px]"
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.5)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229, 168, 33, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              className="flex-shrink-0 font-semibold"
              style={{
                background: "#E5A821",
                color: "#0A2540",
                fontSize: 13,
                padding: "10px 20px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(229, 168, 33, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            borderTop: "1px solid rgba(229, 168, 33, 0.06)",
            paddingTop: 24,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.25)" }}>
            © 2025 Sanabil Technologies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1"
            style={{
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.3)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#E5A821"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.3)"; }}
          >
            Back to top
            <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
