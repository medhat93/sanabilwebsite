import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smartphone, Database, Brain, PenTool, Cloud } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Applications", description: "Scalable, responsive web platforms built with modern frameworks. From SaaS dashboards to complex enterprise portals — engineered for performance and growth." },
  { icon: Smartphone, title: "Mobile Applications", description: "Native and cross-platform mobile apps for iOS and Android. Intuitive UX, blazing-fast performance, and seamless backend integration." },
  { icon: Database, title: "Enterprise Systems", description: "ERP, CRM, and custom business systems that streamline operations. Designed for scale, security, and seamless integration with your existing infrastructure." },
  { icon: Brain, title: "AI & Machine Learning", description: "Intelligent automation, predictive analytics, NLP solutions, and AI-powered features embedded directly into your products and workflows." },
  { icon: PenTool, title: "UI/UX Design", description: "Human-centered design that converts. We craft beautiful, intuitive interfaces backed by research, prototyping, and rigorous usability testing." },
  { icon: Cloud, title: "DevOps & Cloud", description: "CI/CD pipelines, cloud architecture, containerization, and infrastructure as code. We ensure your applications are reliable, scalable, and always online." },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(207 75% 15%) 0%, hsl(215 75% 10%) 100%)" }}>
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(229, 168, 33, 0.06) 0%, transparent 70%)" }}
      />
      {/* Radial glow bottom-left */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(229, 168, 33, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 rounded-full gradient-gold" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.02em" }}>
              What We <span className="text-gradient-gold">Build</span>
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            End-to-end software solutions tailored to your business needs, built with cutting-edge technology and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.title}
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
                <span className="absolute top-6 right-6 font-mono text-sm" style={{ color: "rgba(229, 168, 33, 0.2)" }}>{num}</span>
                <div className="mb-5 group-hover:-translate-y-0.5 transition-transform duration-300" style={{ filter: "drop-shadow(0 0 12px rgba(229, 168, 33, 0.25))" }}>
                  <Icon size={34} strokeWidth={1.8} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-primary-foreground mb-3" style={{ fontSize: 20, letterSpacing: "-0.02em" }}>{service.title}</h3>
                <p className="font-normal" style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.6)" }}>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
