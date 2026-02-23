import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, Instagram, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactItems = [
  { icon: Mail, label: "EMAIL", value: "Info@sanabiltechnologies.com", href: "mailto:Info@sanabiltechnologies.com" },
  { icon: Phone, label: "PHONE", value: "+20 (100) 945 3399", href: "tel:+201009453399" },
  { icon: MapPin, label: "LOCATION", value: "Cairo, Egypt | Delaware, USA" },
  { icon: Clock, label: "HOURS", value: "Mon – Fri, 9 AM – 6 PM (GMT+3)" },
];

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Github, href: "#" },
  { icon: Instagram, href: "#" },
];

const projectTypes = [
  "Web Application", "Mobile Application", "Enterprise System",
  "AI/ML Solution", "UI/UX Design", "DevOps & Cloud", "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: 12,
  background: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#FFFFFF",
  fontSize: 15,
  outline: "none",
  transition: "all 0.3s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.6)",
  marginBottom: 6,
};

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.5)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(229, 168, 33, 0.1)";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const errorBorder = "1px solid rgba(239, 68, 68, 0.5)";

  return (
    <section id="contact" ref={ref} className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(220 80% 6%) 0%, hsl(215 75% 12%) 50%, hsl(207 65% 16%) 100%)" }}>

      {/* Animated orbs */}
      <motion.div className="absolute pointer-events-none rounded-full hidden sm:block"
        style={{ width: 600, height: 600, top: "40%", left: "25%", background: "radial-gradient(circle, rgba(229, 168, 33, 0.12) 0%, transparent 50%)" }}
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute pointer-events-none rounded-full hidden sm:block"
        style={{ width: 500, height: 500, top: "60%", left: "75%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 50%)", transform: "translate(-50%, -50%)" }}
        animate={{ x: [0, -15, 20, 0], y: [0, 10, -20, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} />

      {/* Film grain texture */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
        opacity: 0.7,
      }} />

      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: 200, background: "linear-gradient(90deg, transparent, rgba(229, 168, 33, 0.3), transparent)" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="w-1 h-8 sm:h-10 rounded-full gradient-gold" />
            <h2 className="text-[26px] sm:text-3xl md:text-5xl font-bold font-display" style={{
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #FFFFFF 0%, #E5A821 50%, #FFFFFF 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "textShimmer 4s ease-in-out infinite",
            }}>
              Let's Build Something Exceptional
            </h2>
          </div>
          <p className="max-w-xl mx-auto text-[15px] sm:text-lg md:text-xl mt-4 px-2" style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
            Schedule a free consultation. We'll analyze your project and show you how AI-native development can accelerate your vision.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* Form card */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 20, padding: "28px 20px", backdropFilter: "blur(12px)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
            }}
            className="sm:!p-10 sm:!rounded-3xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-4"
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input style={{ ...inputStyle, border: errors.name ? errorBorder : inputStyle.border }}
                        placeholder="John Doe" value={form.name}
                        onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                        onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input style={{ ...inputStyle, border: errors.email ? errorBorder : inputStyle.border }}
                        placeholder="john@company.com" value={form.email}
                        onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: false }); }}
                        onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Phone <span style={{ color: "rgba(255,255,255,0.3)" }}>(optional)</span></label>
                      <input style={inputStyle} placeholder="+1 (555) 000-0000" value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                    <div>
                      <label style={labelStyle}>Company <span style={{ color: "rgba(255,255,255,0.3)" }}>(optional)</span></label>
                      <input style={inputStyle} placeholder="Your Company" value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        onFocus={handleFocus} onBlur={handleBlur} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                      value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })}
                      onFocus={handleFocus as any} onBlur={handleBlur as any}>
                      <option value="" style={{ background: "#0A2540" }}>Select Project Type</option>
                      {projectTypes.map(t => <option key={t} value={t} style={{ background: "#0A2540" }}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" as const, border: errors.message ? errorBorder : inputStyle.border }}
                      placeholder="Tell us about your project..." value={form.message}
                      onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: false }); }}
                      onFocus={handleFocus as any} onBlur={handleBlur as any} />
                  </div>
                  <button type="submit" className="w-full font-bold font-display"
                    style={{
                      background: "linear-gradient(135deg, #E5A821 0%, #F0C040 100%)",
                      color: "#0A2540", fontSize: 16, padding: "16px 32px", borderRadius: 12, border: "none", cursor: "pointer",
                      boxShadow: "0 4px 20px rgba(229, 168, 33, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #F0C040 0%, #E5A821 100%)";
                      e.currentTarget.style.boxShadow = "0 8px 40px rgba(229, 168, 33, 0.5), 0 0 60px rgba(229, 168, 33, 0.15)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #E5A821 0%, #F0C040 100%)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(229, 168, 33, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    onMouseDown={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    Request a Meeting
                  </button>
                  <p className="text-center" style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.35)", marginTop: 12 }}>
                    ⚡ We typically respond within 2 hours
                  </p>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }} className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}>
                    <CheckCircle2 size={64} strokeWidth={1.5} style={{ color: "#E5A821", filter: "drop-shadow(0 0 20px rgba(229, 168, 33, 0.4))" }} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-primary-foreground mt-6" style={{ fontSize: 22 }}>
                    Thank you!
                  </h3>
                  <p className="mt-2" style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.6)" }}>
                    Our team will reach out within 2 hours.
                  </p>
                  <p className="mt-2" style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.35)" }}>
                    In the meantime, feel free to explore our work.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative overflow-hidden sm:p-10 sm:rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: 20, padding: "28px 20px",
            }}>
            {/* Faint globe deco - hidden on mobile */}
            <svg className="absolute right-0 bottom-0 pointer-events-none hidden sm:block" width="220" height="220" viewBox="0 0 220 220" style={{ opacity: 0.03 }}>
              <circle cx="110" cy="110" r="90" fill="none" stroke="#E5A821" strokeWidth="1" />
              <ellipse cx="110" cy="110" rx="50" ry="90" fill="none" stroke="#E5A821" strokeWidth="0.6" />
              <line x1="20" y1="110" x2="200" y2="110" stroke="#E5A821" strokeWidth="0.5" />
              <line x1="110" y1="20" x2="110" y2="200" stroke="#E5A821" strokeWidth="0.5" />
              <ellipse cx="110" cy="75" rx="75" ry="20" fill="none" stroke="#E5A821" strokeWidth="0.4" />
              <ellipse cx="110" cy="145" rx="75" ry="20" fill="none" stroke="#E5A821" strokeWidth="0.4" />
            </svg>

            <div className="relative z-10">
              {contactItems.map((item, i) => (
                <div key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4 group" style={{ padding: "16px 0", textDecoration: "none" }}>
                      <item.icon size={20} style={{ color: "#E5A821", flexShrink: 0 }} />
                      <div>
                        <span className="block uppercase" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.35)" }}>{item.label}</span>
                        <span className="block font-medium group-hover:text-[#E5A821] transition-colors duration-200" style={{ fontSize: 15, color: "#FFFFFF" }}>{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4" style={{ padding: "16px 0" }}>
                      <item.icon size={20} style={{ color: "#E5A821", flexShrink: 0 }} />
                      <div>
                        <span className="block uppercase" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.35)" }}>{item.label}</span>
                        <span className="block font-medium" style={{ fontSize: 15, color: "#FFFFFF" }}>{item.value}</span>
                      </div>
                    </div>
                  )}
                  {i < contactItems.length - 1 && <div style={{ height: 1, background: "rgba(255, 255, 255, 0.05)" }} />}
                </div>
              ))}

              {/* Socials */}
              <div className="flex gap-3 mt-6">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="group flex items-center justify-center"
                    style={{
                      width: 44, height: 44, borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(229, 168, 33, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.25)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}>
                    <s.icon size={18} className="group-hover:text-[#E5A821] transition-colors" style={{ color: "rgba(255, 255, 255, 0.5)" }} />
                  </a>
                ))}
              </div>

              {/* Calendly */}
              <a href="https://calendly.com/amedhat13/meeting-with-ahmad-medhat" target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-flex items-center justify-center gap-2 font-semibold font-display"
                style={{
                  padding: "14px 24px", borderRadius: 12, fontSize: 15, color: "#E5A821",
                  background: "transparent", border: "1px solid rgba(229, 168, 33, 0.3)",
                  transition: "all 0.3s ease", textDecoration: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(229, 168, 33, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(229, 168, 33, 0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor"><path d="M380.3 103.4h-27.9V71.1c0-11.4-9.3-20.7-20.7-20.7s-20.7 9.3-20.7 20.7v32.3H201V71.1c0-11.4-9.3-20.7-20.7-20.7s-20.7 9.3-20.7 20.7v32.3h-27.9c-39.3 0-71.2 31.9-71.2 71.2v195.7c0 39.3 31.9 71.2 71.2 71.2h248.6c39.3 0 71.2-31.9 71.2-71.2V174.6c0-39.3-31.9-71.2-71.2-71.2zm29.8 266.9c0 16.4-13.4 29.8-29.8 29.8H131.7c-16.4 0-29.8-13.4-29.8-29.8V227.1h308.2v143.2zm0-184.6H101.9v-11c0-16.4 13.4-29.8 29.8-29.8h27.9v15.5c0 11.4 9.3 20.7 20.7 20.7s20.7-9.3 20.7-20.7v-15.5h110v15.5c0 11.4 9.3 20.7 20.7 20.7s20.7-9.3 20.7-20.7v-15.5h27.9c16.4 0 29.8 13.4 29.8 29.8v11zM256 310.5c0-17.8-14.4-32.2-32.2-32.2s-32.2 14.4-32.2 32.2 14.4 32.2 32.2 32.2 32.2-14.5 32.2-32.2z"/></svg>
                See us in Action — Book Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes textShimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
