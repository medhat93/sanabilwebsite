import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sanabil Technologies transformed our vision into a world-class platform. Their dedicated team felt like an extension of our own. The AI-driven approach saved us months of development time.",
    name: "Ahmed Al-Rahman",
    role: "CTO, TechVentures Inc.",
    initials: "AA",
  },
  {
    quote: "The 24/7 support is a game-changer. Every time we had an urgent request, the Sanabil team responded within minutes. They truly care about their clients' success.",
    name: "Sarah Mitchell",
    role: "Product Manager, CloudScale Solutions",
    initials: "SM",
  },
  {
    quote: "We've worked with many software vendors, but Sanabil's engineering quality is on another level. Clean code, excellent documentation, and a team that genuinely understands our business.",
    name: "Omar Hassan",
    role: "CEO, DataFlow Analytics",
    initials: "OH",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-24 gradient-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 rounded-full gradient-gold" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.02em" }}>
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="group relative cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: 16,
                backdropFilter: "blur(10px)",
                padding: 32,
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(229, 168, 33, 0.15)";
                el.style.borderTopColor = "#E5A821";
                el.style.borderTopWidth = "2px";
                el.style.background = "linear-gradient(180deg, rgba(229, 168, 33, 0.08) 0%, rgba(255, 255, 255, 0.06) 40%, rgba(255, 255, 255, 0.06) 100%)";
                el.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.borderTopColor = "rgba(255, 255, 255, 0.06)";
                el.style.borderTopWidth = "1px";
                el.style.background = "rgba(255, 255, 255, 0.03)";
                el.style.boxShadow = "none";
              }}
            >
              <Quote size={24} className="text-accent mb-4" style={{ filter: "drop-shadow(0 0 12px rgba(229, 168, 33, 0.25))" }} />
              <p
                className="mb-6 italic"
                style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.6)" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display"
                  style={{
                    background: "rgba(229, 168, 33, 0.15)",
                    color: "#E5A821",
                    border: "1px solid rgba(229, 168, 33, 0.25)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold font-display text-primary-foreground">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255, 255, 255, 0.4)" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
