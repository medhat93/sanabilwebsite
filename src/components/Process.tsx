import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrainCircuit, Sparkles, Terminal, ShieldCheck, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: BrainCircuit,
    label: "STEP 01",
    title: "AI-Powered Discovery & Strategy",
    description: "AI analyzes market data, competitors, and user patterns while our strategists craft the perfect roadmap for your product.",
    badge: "⚡ What used to take 3-4 weeks now takes 5-7 days",
  },
  {
    icon: Sparkles,
    label: "STEP 02",
    title: "Rapid Prototyping with AI Design",
    description: "AI-assisted tools generate wireframes and UI variations at speed. Multiple design directions within days, not weeks.",
    badge: "⚡ From concept to clickable prototype in under 1 week",
  },
  {
    icon: Terminal,
    label: "STEP 03",
    title: "AI-Augmented Development",
    description: "Senior engineers work alongside AI coding assistants at 3-5x speed. Every pull request double-reviewed: AI for patterns, humans for intent.",
    badge: "⚡ 3-5x faster development with higher code quality",
  },
  {
    icon: ShieldCheck,
    label: "STEP 04",
    title: "Intelligent QA & Security",
    description: "AI generates comprehensive test suites, finds edge cases humans miss, and runs automated security scans before anything hits production.",
    badge: "⚡ 90% automated test coverage from day one",
  },
  {
    icon: Rocket,
    label: "STEP 05",
    title: "Launch, Learn & Evolve",
    description: "AI monitoring tracks performance and user behavior 24/7 — predicting issues before they happen, suggesting data-driven optimizations.",
    badge: "⚡ Predictive monitoring catches 80% of issues before users notice",
  },
];

const TimelineStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex gap-0" style={{ paddingBottom: index < steps.length - 1 ? 56 : 0 }} 
      /* Desktop spacing */ 
    >
      {/* Node */}
      <div className="absolute left-[12px] md:left-[80px] w-[10px] md:w-[12px] h-[10px] md:h-[12px] rounded-full z-10" style={{
        top: 6,
        transform: "translateX(-5px)",
        border: inView ? "none" : "2px solid rgba(229, 168, 33, 0.2)",
        background: inView ? "#E5A821" : "transparent",
        boxShadow: inView ? "0 0 20px rgba(229, 168, 33, 0.5)" : "none",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }} />

      {/* Content */}
      <div className="pl-10 md:pl-0 md:ml-[140px]" style={{ maxWidth: 560 }}>
        <motion.span
          initial={{ opacity: 0, x: 15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="block font-mono font-semibold uppercase mb-2"
          style={{ fontSize: 11, letterSpacing: "0.1em", color: "#E5A821" }}
        >
          {step.label}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, x: 15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-3 font-display font-bold text-primary-foreground mb-3 text-[20px] md:text-[26px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          <Icon size={18} strokeWidth={1.8} className="flex-shrink-0 md:w-5 md:h-5" style={{ color: "#E5A821", filter: "drop-shadow(0 0 8px rgba(229, 168, 33, 0.3))" }} />
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-sm md:text-base"
          style={{ lineHeight: 1.7, color: "rgba(255, 255, 255, 0.55)" }}
        >
          {step.description}
        </motion.p>
        {/* AI Differentiator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="mt-4"
        >
          <span
            className="inline-block font-medium"
            style={{
              background: "rgba(229, 168, 33, 0.1)",
              border: "1px solid rgba(229, 168, 33, 0.25)",
              borderRadius: 20,
              padding: "5px 12px",
              fontSize: 11,
              color: "#E5A821",
            }}
          >
            {step.badge}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

const SpeedComparison = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="mt-24 max-w-[600px] mx-auto">
      <p className="text-center mb-8 uppercase font-mono font-medium" style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255, 255, 255, 0.3)" }}>
        Time to Market
      </p>
      <div className="space-y-5">
        {/* Traditional */}
        <div>
          <div className="flex justify-between mb-2">
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.4)" }}>Traditional Development</span>
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.3)" }}>6-12 months</span>
          </div>
          <div className="w-full h-[4px] rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.15)" }}
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>
        {/* Sanabil */}
        <div>
          <div className="flex justify-between mb-2">
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.6)" }}>Sanabil AI-Native</span>
            <span className="font-semibold" style={{ fontSize: 14, color: "#E5A821" }}>6-12 weeks</span>
          </div>
          <div className="w-full h-[4px] rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.08)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #E5A821, #F0D060)" }}
              initial={{ width: 0 }}
              animate={inView ? { width: "35%" } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CircuitBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="1.5" fill="rgba(229, 168, 33, 0.03)" />
        <circle cx="0" cy="0" r="1" fill="rgba(229, 168, 33, 0.02)" />
        <circle cx="80" cy="0" r="1" fill="rgba(229, 168, 33, 0.02)" />
        <circle cx="0" cy="80" r="1" fill="rgba(229, 168, 33, 0.02)" />
        <circle cx="80" cy="80" r="1" fill="rgba(229, 168, 33, 0.02)" />
        <line x1="40" y1="40" x2="80" y2="40" stroke="rgba(229, 168, 33, 0.025)" strokeWidth="0.5" />
        <line x1="40" y1="40" x2="40" y2="0" stroke="rgba(229, 168, 33, 0.025)" strokeWidth="0.5" />
        <line x1="40" y1="40" x2="0" y2="40" stroke="rgba(229, 168, 33, 0.025)" strokeWidth="0.5" />
        <line x1="40" y1="40" x2="40" y2="80" stroke="rgba(229, 168, 33, 0.025)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
);

const Process = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.6", "end 0.8"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(207 75% 15%) 0%, hsl(215 75% 8%) 100%)" }}
    >
      {/* Circuit background */}
      <CircuitBackground />

      {/* Gold glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(229, 168, 33, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="block font-mono text-xs uppercase mb-3" style={{ color: '#E5A821', letterSpacing: '0.15em' }}>
            Our Process
          </span>
          <h2 className="text-[26px] sm:text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.03em" }}>
            How We Build — <span className="text-gradient-gold">AI-Native</span>
          </h2>
          <div className="hr-gold-fade max-w-[80px] mx-auto mt-4" />
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-[15px] sm:text-lg md:text-xl mt-5" style={{ lineHeight: 1.65 }}>
            Traditional agencies take months. We deliver production-ready software in weeks.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-[1000px] mx-auto">
          {/* Timeline track */}
          <div
            className="absolute left-[12px] md:left-[80px] top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(229, 168, 33, 0.15)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, #E5A821, #F0D060)",
              }}
            >
              {/* Pulsing leading dot */}
              <div
                className="absolute bottom-0 left-1/2 w-[8px] h-[8px] rounded-full"
                style={{
                  transform: "translate(-50%, 50%)",
                  background: "#E5A821",
                  boxShadow: "0 0 12px rgba(229, 168, 33, 0.6)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </motion.div>
          </div>

          {steps.map((step, i) => (
            <TimelineStep key={step.title} step={step} index={i} />
          ))}
        </div>

        {/* Speed Comparison */}
        <SpeedComparison />
      </div>
    </section>
  );
};

export default Process;
