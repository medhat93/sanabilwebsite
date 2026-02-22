import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Compass, Palette, Terminal, ShieldCheck, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  { icon: Compass, label: "STEP 01", title: "Discovery & Strategy", description: "We dive deep into your business goals, target users, and technical requirements. We define the project scope, tech stack, and create a detailed roadmap." },
  { icon: Palette, label: "STEP 02", title: "Design & Prototype", description: "Our designers create wireframes and interactive prototypes. You see and feel the product before a single line of code is written. Iterate until it's perfect." },
  { icon: Terminal, label: "STEP 03", title: "Development & AI Integration", description: "Our dedicated team builds your solution using agile sprints. AI-powered code analysis ensures quality. Regular demos keep you in the loop at every stage." },
  { icon: ShieldCheck, label: "STEP 04", title: "Testing & Quality Assurance", description: "Rigorous automated and manual testing. Performance, security, and usability audits. We don't ship until it meets the highest standards." },
  { icon: Rocket, label: "STEP 05", title: "Launch & Continuous Support", description: "Smooth deployment to production. Post-launch monitoring, 24/7 support, and continuous improvements to keep your product ahead of the competition." },
];

const TimelineStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex gap-0" style={{ paddingBottom: index < steps.length - 1 ? 80 : 0 }}>
      {/* Node */}
      <div className="absolute left-0 md:left-[80px] w-[12px] h-[12px] rounded-full z-10" style={{
        top: 6,
        transform: "translateX(-5px)",
        border: inView ? "none" : "2px solid rgba(229, 168, 33, 0.2)",
        background: inView ? "#E5A821" : "transparent",
        boxShadow: inView ? "0 0 20px rgba(229, 168, 33, 0.5)" : "none",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }} />

      {/* Content */}
      <div className="pl-12 md:pl-0 md:ml-[140px]" style={{ maxWidth: 520 }}>
        <motion.span
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="block font-mono font-semibold uppercase mb-2"
          style={{ fontSize: 13, letterSpacing: "0.1em", color: "#E5A821" }}
        >
          {step.label}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-3 font-display font-bold text-primary-foreground mb-3"
          style={{ fontSize: 26, letterSpacing: "-0.02em" }}
        >
          <Icon size={20} strokeWidth={1.8} className="text-accent flex-shrink-0" style={{ filter: "drop-shadow(0 0 8px rgba(229, 168, 33, 0.3))" }} />
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255, 255, 255, 0.55)" }}
        >
          {step.description}
        </motion.p>
      </div>
    </div>
  );
};

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
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(207 75% 15%) 0%, hsl(215 75% 8%) 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gold glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(229, 168, 33, 0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 rounded-full gradient-gold" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.02em" }}>
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            A proven methodology that delivers results — every time.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-[1000px] mx-auto">
          {/* Timeline track */}
          <div
            className="absolute left-0 md:left-[80px] top-0 bottom-0 w-[2px]"
            style={{ background: "rgba(229, 168, 33, 0.15)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(180deg, #E5A821, #F0D060)",
              }}
            />
          </div>

          {steps.map((step, i) => (
            <TimelineStep key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
