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
    <section id="testimonials" ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 rounded-full gradient-gold" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground" style={{ letterSpacing: "-0.02em" }}>
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="group glass-card-light p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-12px_rgba(229,168,33,0.15)]"
              style={{ willChange: "transform" }}
            >
              <Quote size={24} className="text-accent mb-4" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 italic" style={{ lineHeight: 1.65 }}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold font-display text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
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
