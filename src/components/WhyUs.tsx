import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Clock, Cpu, Route, Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "A Dedicated AI-Augmented Team",
    description: "Every project gets a fully dedicated squad of senior engineers, designers, and strategists — each empowered by AI assistants that multiply their output. Your team writes code 3-5x faster, catches bugs in real-time, and delivers more in a week than traditional teams do in a month. No shared resources, no divided focus — just a high-performance unit built around your product.",
    badge: "⚡ Human expertise × AI speed = Exponential output",
    span: 2,
    decorative: "circles",
  },
  {
    icon: Clock,
    title: "AI-Powered 24/7 Support",
    description: "Our AI monitoring systems watch your infrastructure around the clock — detecting anomalies, predicting failures, and auto-escalating to human engineers before issues impact your users. When you need us, we respond in minutes, not hours.",
    badge: "⚡ AI detects issues 80% faster than traditional monitoring",
    span: 1,
    decorative: "247",
  },
  {
    icon: Cpu,
    title: "AI-Native from Day One",
    description: "We didn't bolt AI onto an old process — we rebuilt everything around it. From AI-driven discovery and rapid prototyping to intelligent QA and predictive deployment, every phase is faster, smarter, and more reliable.",
    badge: "⚡ End-to-end AI integration across all 5 delivery phases",
    span: 1,
    decorative: "circuit",
  },
  {
    icon: Route,
    title: "Partners in Innovation",
    description: "We don't disappear into a black box and emerge months later. You see progress daily — AI-generated reports, automated demo builds, and real-time dashboards keep you in the loop at every sprint. We walk with you from the first whiteboard sketch through launch and beyond, evolving your product with data-driven insights from real user behavior.",
    badge: "⚡ Real-time project visibility with AI-generated progress reports",
    span: 2,
    decorative: "path",
  },
  {
    icon: Award,
    title: "Top 5% Talent × AI Superpowers",
    description: "Our engineers aren't just top-tier — they're trained to work alongside AI as a force multiplier. Hand-picked senior developers, certified architects, and domain experts who leverage AI coding assistants, automated code review, and intelligent debugging tools to deliver at a level traditional teams simply can't match.",
    badge: "⚡ Senior engineers amplified by AI = Unmatched delivery speed",
    span: 2,
    decorative: "top5",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last, Shipped to Impress",
    description: "AI-generated test suites, automated security scanning, and intelligent code review ensure every line meets enterprise-grade standards. Clean architecture, zero shortcuts, production-hardened from day one.",
    badge: "⚡ 90% automated test coverage + zero-compromise security",
    span: 1,
    decorative: "brackets",
  },
];

const DecorativeElement = ({ type }: { type: string }) => {
  switch (type) {
    case "circles":
      return (
        <svg className="absolute bottom-[-20px] right-[-20px] w-[180px] h-[180px] pointer-events-none" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(229, 168, 33, 0.04)" strokeWidth="1.5" />
          <circle cx="120" cy="70" r="55" fill="none" stroke="rgba(229, 168, 33, 0.04)" strokeWidth="1.5" />
          <circle cx="60" cy="110" r="50" fill="none" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1.5" />
        </svg>
      );
    case "247":
      return (
        <span className="absolute top-4 right-4 font-extrabold pointer-events-none select-none" style={{ fontSize: 100, color: "rgba(229, 168, 33, 0.04)", transform: "rotate(-12deg)", lineHeight: 1 }}>
          24/7
        </span>
      );
    case "circuit":
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
          {[40, 80, 120, 160].map(x => [40, 80, 120, 160].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="rgba(229, 168, 33, 0.03)" />
          )))}
          <line x1="40" y1="40" x2="120" y2="40" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1" />
          <line x1="80" y1="40" x2="80" y2="120" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1" />
          <line x1="120" y1="80" x2="160" y2="80" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1" />
          <line x1="40" y1="120" x2="120" y2="120" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1" />
          <line x1="160" y1="120" x2="160" y2="160" stroke="rgba(229, 168, 33, 0.03)" strokeWidth="1" />
        </svg>
      );
    case "path":
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
          <path d="M 20 180 Q 100 100 200 120 Q 300 140 380 20" fill="none" stroke="rgba(229, 168, 33, 0.06)" strokeWidth="2" strokeDasharray="8 8" />
          {[20, 100, 200, 300, 380].map((x, i) => {
            const y = i === 0 ? 180 : i === 1 ? 130 : i === 2 ? 120 : i === 3 ? 100 : 20;
            return <circle key={x} cx={x} cy={y} r="3" fill="rgba(229, 168, 33, 0.06)" />;
          })}
        </svg>
      );
    case "top5":
      return (
        <span className="absolute bottom-2 right-6 font-extrabold pointer-events-none select-none" style={{ fontSize: 90, color: "rgba(229, 168, 33, 0.04)", transform: "rotate(8deg)", lineHeight: 1 }}>
          TOP 5%
        </span>
      );
    case "brackets":
      return (
        <span className="absolute top-1/2 right-6 -translate-y-1/2 font-mono font-bold pointer-events-none select-none" style={{ fontSize: 120, color: "rgba(229, 168, 33, 0.03)", lineHeight: 1 }}>
          {"{ }"}
        </span>
      );
    default:
      return null;
  }
};

const BentoCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = feature.icon;
  const isWide = feature.span === 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="group relative overflow-hidden cursor-default"
      style={{
        gridColumn: `span ${feature.span}`,
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: 20,
        padding: 36,
        minHeight: isWide ? 220 : 260,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.border = "1px solid rgba(229, 168, 33, 0.2)";
        el.style.background = "linear-gradient(180deg, rgba(229, 168, 33, 0.06) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.04) 100%)";
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.border = "1px solid rgba(255, 255, 255, 0.06)";
        el.style.background = "rgba(255, 255, 255, 0.02)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <DecorativeElement type={feature.decorative} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit" style={{ filter: "drop-shadow(0 0 10px rgba(229, 168, 33, 0.25))" }}>
          <Icon size={28} strokeWidth={1.5} style={{ color: "#E5A821" }} />
        </div>

        <h3 className="font-display font-semibold text-primary-foreground mb-2.5" style={{ fontSize: 21, letterSpacing: "-0.01em" }}>
          {feature.title}
        </h3>

        <p className="mb-4" style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.5)" }}>
          {feature.description}
        </p>

        <div className="mt-auto">
          <span
            className="inline-flex items-center gap-1 font-medium group-hover:bg-[rgba(229,168,33,0.14)] transition-colors duration-300"
            style={{
              background: "rgba(229, 168, 33, 0.08)",
              border: "1px solid rgba(229, 168, 33, 0.2)",
              borderRadius: 20,
              padding: "6px 14px",
              fontSize: 12,
              color: "#E5A821",
            }}
          >
            {feature.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(215 75% 10%) 0%, hsl(215 75% 12%) 50%, hsl(207 75% 15%) 100%)" }}
    >
      {/* Gold orb */}
      <div className="absolute pointer-events-none" style={{ top: "30%", left: "20%", width: 600, height: 600, background: "radial-gradient(circle, rgba(229, 168, 33, 0.04) 0%, transparent 50%)" }} />
      {/* Blue orb */}
      <div className="absolute pointer-events-none" style={{ top: "70%", left: "80%", width: 500, height: 500, background: "radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 50%)", transform: "translate(-50%, -50%)" }} />

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
              Why <span className="text-gradient-gold">Sanabil Technologies</span>?
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            We don't just write code — we become your technology partner.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            maxWidth: 1100,
          }}
        >
          {features.map((f, i) => (
            <BentoCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Mobile/tablet responsive override */}
        <style>{`
          @media (max-width: 1024px) {
            #why-us .mx-auto[style] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #why-us .mx-auto[style] > * {
              grid-column: span 1 !important;
            }
          }
          @media (max-width: 640px) {
            #why-us .mx-auto[style] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default WhyUs;
