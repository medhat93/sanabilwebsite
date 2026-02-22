import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Clock, Cpu, Footprints, Star, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Dedicated Team Per Project", description: "Every project gets a fully dedicated team of engineers, designers, and project managers. No shared resources, no divided attention — your project is our sole focus." },
  { icon: Clock, title: "24/7 Round-the-Clock Support", description: "We're always available. Our support doesn't end at deployment — we provide continuous monitoring, maintenance, and rapid response to keep your systems running flawlessly." },
  { icon: Cpu, title: "AI-Integrated Workflow", description: "We leverage the latest AI technologies throughout our development process — from AI-assisted code review and testing to intelligent project management and predictive quality assurance." },
  { icon: Footprints, title: "From Vision to Launch, Side by Side", description: "We walk with you through every phase — discovery, planning, design, development, testing, deployment, and beyond. Full transparency, regular demos, and continuous feedback loops." },
  { icon: Star, title: "Highly Qualified Calibers", description: "Our engineers are hand-picked from the top 5% of talent. Senior developers, certified architects, and domain experts who bring years of experience to your project." },
  { icon: ShieldCheck, title: "Engineering Excellence", description: "Clean architecture, comprehensive testing, thorough code reviews, and industry best practices. We deliver software that's not just functional — it's maintainable, secure, and built to last." },
];

const WhyUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" ref={ref} className="py-24 gradient-navy">
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
              Why <span className="text-gradient-gold">Sanabil Technologies</span>?
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            We don't just write code — we become your technology partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={f.title}
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
                <span
                  className="absolute top-6 right-6 font-mono text-sm"
                  style={{ color: "rgba(229, 168, 33, 0.2)" }}
                >
                  {num}
                </span>

                <div
                  className="mb-5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 0 12px rgba(229, 168, 33, 0.25))" }}
                >
                  <Icon size={34} strokeWidth={1.8} className="text-accent" />
                </div>

                <h3
                  className="font-display font-semibold text-primary-foreground mb-3"
                  style={{ fontSize: 20, letterSpacing: "-0.02em" }}
                >
                  {f.title}
                </h3>
                <p
                  className="font-normal"
                  style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.6)" }}
                >
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
