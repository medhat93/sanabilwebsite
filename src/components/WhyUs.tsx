import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Clock, Cpu, Route, Award, ShieldCheck } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const features = [
  {
    icon: Users,
    title: "A Dedicated AI-Augmented Team",
    tagline: "Your own engineering squad",
    description:
      "A full squad of senior engineers, designers, and strategists — each amplified by AI. Your team delivers more in a week than traditional teams do in a month.",
    badge: "⚡ Human expertise × AI speed",
  },
  {
    icon: Clock,
    title: "AI-Powered 24/7 Support",
    tagline: "We never sleep, literally",
    description:
      "AI monitoring detects anomalies and predicts failures around the clock. When you need humans, we respond in minutes — not hours.",
    badge: "⚡ AI detects issues 80% faster",
  },
  {
    icon: Cpu,
    title: "AI-Native from Day One",
    tagline: "AI woven into every phase",
    description:
      "We rebuilt our entire process around AI. Every phase — discovery, prototyping, development, QA, deployment — is faster and more reliable.",
    badge: "⚡ End-to-end AI integration",
  },
  {
    icon: Route,
    title: "Partners in Innovation",
    tagline: "Total transparency, always",
    description:
      "Daily progress through AI-generated reports and real-time dashboards. From first sketch to launch, you're never in the dark.",
    badge: "⚡ Real-time AI progress reports",
  },
  {
    icon: Award,
    title: "Top 5% Talent × AI Superpowers",
    tagline: "Hand-picked senior experts",
    description:
      "Hand-picked senior developers and certified architects who leverage AI to deliver at a level traditional teams can't match.",
    badge: "⚡ Senior engineers amplified by AI",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last, Shipped to Impress",
    tagline: "Zero shortcuts, ever",
    description:
      "AI-generated test suites, automated security scanning, and intelligent code review. Enterprise-grade standards, zero shortcuts.",
    badge: "⚡ 90% automated test coverage",
  },
];

/* ───────── Decorative Visuals (right side of focus card) ───────── */

const TeamVisual = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full" style={{ opacity: 0.6 }}>
    {[
      { cx: 50, cy: 60, r: 22, delay: 0 },
      { cx: 80, cy: 55, r: 24, delay: 0.5 },
      { cx: 110, cy: 60, r: 22, delay: 1 },
      { cx: 140, cy: 58, r: 20, delay: 1.5 },
      { cx: 165, cy: 62, r: 18, delay: 2 },
    ].map((c, i) => (
      <motion.circle
        key={i}
        cx={c.cx}
        cy={c.cy}
        r={c.r}
        fill="none"
        stroke="#E5A821"
        strokeWidth="1.5"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.5, 0.2], cx: [c.cx, c.cx + 4, c.cx - 3, c.cx] }}
        transition={{ duration: 8, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </svg>
);

const ClockVisual = () => (
  <svg viewBox="0 0 200 160" className="w-full h-full" style={{ opacity: 0.6 }}>
    {/* Outer ring */}
    <circle cx="100" cy="70" r="45" fill="none" stroke="#E5A821" strokeWidth="1.5" />
    {/* Pulse ring */}
    <circle cx="100" cy="70" r="52" fill="none" stroke="rgba(229,168,33,0.2)" strokeWidth="1"
      style={{ animation: "clockPulse 3s ease-in-out infinite" }} />
    {/* Hour markers */}
    {[...Array(12)].map((_, i) => (
      <circle
        key={i}
        cx={100 + 38 * Math.cos((i * 30 - 90) * Math.PI / 180)}
        cy={70 + 38 * Math.sin((i * 30 - 90) * Math.PI / 180)}
        r="1.5"
        fill="rgba(229,168,33,0.3)"
      />
    ))}
    {/* Hour hand (static) */}
    <line x1="100" y1="70" x2="100" y2="42" stroke="#E5A821" strokeWidth="1.5" strokeLinecap="round" />
    {/* Second hand (rotating) */}
    <line x1="100" y1="70" x2="100" y2="30" stroke="#E5A821" strokeWidth="1" strokeLinecap="round"
      style={{ transformOrigin: "100px 70px", animation: "clockTick 10s linear infinite" }} />
    {/* Center dot */}
    <circle cx="100" cy="70" r="3" fill="#E5A821" />
    {/* 24/7 watermark */}
    <text x="100" y="140" textAnchor="middle" fill="#E5A821" fontSize="28" fontWeight="800" opacity="0.04">24/7</text>
  </svg>
);

const NeuralVisual = () => {
  const nodes = [
    { x: 30, y: 30 }, { x: 90, y: 20 }, { x: 150, y: 35 }, { x: 170, y: 80 },
    { x: 120, y: 70 }, { x: 60, y: 75 }, { x: 40, y: 110 }, { x: 110, y: 110 },
    { x: 160, y: 120 }, { x: 80, y: 130 },
  ];
  const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[4,1],[5,6],[6,7],[7,8],[8,3],[7,4],[9,6],[9,7]];
  return (
    <svg viewBox="0 0 200 150" className="w-full h-full" style={{ opacity: 0.6 }}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#E5A821" strokeWidth="0.7" strokeOpacity="0.3" />
      ))}
      {nodes.map((n, i) => (
        <motion.circle key={i} cx={n.x} cy={n.y} r="3.5" fill="#E5A821"
          animate={{ opacity: [0.3, 0.8, 0.3], r: [3.5, 4.5, 3.5] }}
          transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </svg>
  );
};

const PathVisual = () => {
  const waypoints = [{ x: 20, y: 100 }, { x: 60, y: 60 }, { x: 110, y: 80 }, { x: 150, y: 40 }, { x: 185, y: 25 }];
  return (
    <svg viewBox="0 0 200 130" className="w-full h-full" style={{ opacity: 0.6 }}>
      <motion.path
        d="M 20 100 Q 40 60 60 60 Q 85 60 110 80 Q 130 95 150 40 Q 165 10 185 25"
        fill="none" stroke="#E5A821" strokeWidth="1.5" strokeDasharray="6 6"
        initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
      />
      {waypoints.map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r="5" fill="#E5A821"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </svg>
  );
};

const BarsVisual = () => {
  const heights = [55, 80, 40, 95, 65, 75];
  return (
    <svg viewBox="0 0 200 130" className="w-full h-full" style={{ opacity: 0.6 }}>
      {heights.map((h, i) => (
        <motion.rect key={i} x={15 + i * 30} width="18" rx="3" fill="#E5A821"
          initial={{ y: 130, height: 0 }}
          animate={{ y: 130 - h, height: h }}
          transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", repeatDelay: 2 }}
        />
      ))}
    </svg>
  );
};

const CodeVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center" style={{ opacity: 0.6 }}>
    <span className="font-mono font-bold select-none" style={{ fontSize: 72, color: "#E5A821", opacity: 0.2 }}>{"{ }"}</span>
    <motion.span className="absolute font-mono" style={{ fontSize: 14, color: "#E5A821", opacity: 0.5, left: "42%", top: "48%" }}
      animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}>
      │
    </motion.span>
    <div className="absolute inset-x-8 top-2 bottom-2 overflow-hidden pointer-events-none" style={{ opacity: 0.12 }}>
      <motion.div animate={{ y: [0, -60] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded" style={{ height: 3, marginBottom: 8, background: "#E5A821", width: `${30 + Math.random() * 50}%` }} />
        ))}
      </motion.div>
    </div>
  </div>
);

const decoratives = [TeamVisual, ClockVisual, NeuralVisual, PathVisual, BarsVisual, CodeVisual];

/* ───────── Small Card ───────── */
const SmallCard = ({
  feature,
  index,
  isActive,
  onClick,
}: {
  feature: typeof features[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = feature.icon;
  return (
    <motion.button
      onClick={onClick}
      className="text-left w-full group relative cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      style={{
        background: isActive ? "rgba(229, 168, 33, 0.06)" : "rgba(255, 255, 255, 0.02)",
        border: `1px solid ${isActive ? "rgba(229, 168, 33, 0.25)" : "rgba(255, 255, 255, 0.06)"}`,
        borderRadius: 16,
        padding: "20px 24px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: isActive ? "2px solid #E5A821" : "1px solid rgba(255, 255, 255, 0.06)",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.2)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
        }
      }}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={22}
          strokeWidth={1.5}
          style={{
            color: "#E5A821",
            filter: isActive ? "drop-shadow(0 0 8px rgba(229, 168, 33, 0.4))" : "drop-shadow(0 0 6px rgba(229, 168, 33, 0.15))",
            flexShrink: 0,
          }}
        />
        <span className="font-display font-semibold text-primary-foreground" style={{ fontSize: 16 }}>
          {feature.title}
        </span>
      </div>
      <p className="mt-1.5 pl-[34px]" style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.35)" }}>
        {feature.tagline}
      </p>
    </motion.button>
  );
};

/* ───────── Focus Card ───────── */
const FocusCard = ({ index, paused }: { index: number; paused: boolean }) => {
  const feature = features[index];
  const Icon = feature.icon;
  const Visual = decoratives[index];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(229, 168, 33, 0.05) 0%, rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0.03) 100%)",
        border: "1px solid rgba(229, 168, 33, 0.15)",
        borderTop: "3px solid #E5A821",
        borderRadius: 24,
        padding: 48,
        minHeight: 320,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(229, 168, 33, 0.08)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 min-w-0" style={{ maxWidth: 520 }}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mb-4"
            style={{ filter: "drop-shadow(0 0 14px rgba(229, 168, 33, 0.4))" }}
          >
            <Icon size={36} strokeWidth={1.5} style={{ color: "#E5A821" }} />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="font-display font-bold text-primary-foreground mb-3"
            style={{ fontSize: 27, letterSpacing: "-0.02em" }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255, 255, 255, 0.6)" }}
          >
            {feature.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="mt-5"
          >
            <span
              className="inline-flex items-center gap-1 font-medium"
              style={{
                background: "rgba(229, 168, 33, 0.08)",
                border: "1px solid rgba(229, 168, 33, 0.2)",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 13,
                color: "#E5A821",
              }}
            >
              {feature.badge}
            </span>
          </motion.div>
        </div>

        {/* Decorative visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center justify-center pointer-events-none"
          style={{ width: "40%", minHeight: 160, flexShrink: 0 }}
        >
          <Visual />
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(229, 168, 33, 0.1)", borderRadius: "0 0 24px 24px" }}>
        <motion.div
          key={`progress-${index}`}
          className="h-full"
          style={{ background: "#E5A821", borderRadius: "0 0 0 24px", opacity: paused ? 0.3 : 1 }}
          initial={{ width: "0%" }}
          animate={{ width: paused ? undefined : "100%" }}
          transition={paused ? {} : { duration: 2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

/* ───────── Mobile Accordion ───────── */
const MobileAccordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-3 md:hidden">
      {features.map((f, i) => {
        const Icon = f.icon;
        const isOpen = active === i;
        return (
          <div key={i} style={{
            background: isOpen ? "rgba(229, 168, 33, 0.04)" : "rgba(255, 255, 255, 0.02)",
            border: `1px solid ${isOpen ? "rgba(229, 168, 33, 0.2)" : "rgba(255, 255, 255, 0.06)"}`,
            borderRadius: 16,
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}>
            <button
              className="w-full text-left p-5 flex items-center gap-3"
              onClick={() => setActive(i)}
            >
              <Icon size={22} strokeWidth={1.5} style={{ color: "#E5A821", flexShrink: 0, filter: "drop-shadow(0 0 6px rgba(229, 168, 33, 0.2))" }} />
              <div>
                <span className="font-display font-semibold text-primary-foreground block" style={{ fontSize: 16 }}>{f.title}</span>
                {!isOpen && <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.35)" }}>{f.tagline}</span>}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0">
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.55)" }}>{f.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 font-medium" style={{
                      background: "rgba(229, 168, 33, 0.08)",
                      border: "1px solid rgba(229, 168, 33, 0.2)",
                      borderRadius: 20,
                      padding: "5px 12px",
                      fontSize: 12,
                      color: "#E5A821",
                    }}>
                      {f.badge}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

/* ───────── Main Section ───────── */
const WhyUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % features.length);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, startTimer]);

  const handleSelect = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  const topRow = [0, 1, 2];
  const bottomRow = [3, 4, 5];

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(215 75% 10%) 0%, hsl(215 75% 12%) 50%, hsl(207 75% 15%) 100%)" }}
    >
      {/* Drifting gradient mesh - animated on desktop, static on mobile */}
      <div className="absolute pointer-events-none" style={{
        top: "30%", left: "20%", width: 600, height: 600,
        background: "radial-gradient(circle 400px, rgba(229, 168, 33, 0.025) 0%, transparent 70%)",
        willChange: "transform",
        animation: "orbDriftA 40s ease-in-out infinite",
      }} />
      <div className="absolute pointer-events-none" style={{
        top: "70%", left: "80%", width: 500, height: 500,
        background: "radial-gradient(circle 350px, rgba(59, 130, 246, 0.015) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        willChange: "transform",
        animation: "orbDriftB 50s ease-in-out infinite",
      }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="w-1 h-8 sm:h-10 rounded-full gradient-gold" />
            <h2 className="text-[26px] sm:text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.02em" }}>
              Why Teams Choose <span className="text-gradient-gold">Sanabil</span>
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-xl mx-auto text-[15px] sm:text-lg md:text-xl mt-4 px-2" style={{ lineHeight: 1.65 }}>
            We combine the world's best engineering talent with AI-native workflows to deliver results no traditional agency can match.
          </p>
        </motion.div>

        {/* Desktop: Focus Card Pattern */}
        <div
          className="hidden md:block max-w-[1100px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Top row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-5"
          >
            {topRow.map((i) => (
              <SmallCard key={i} feature={features[i]} index={i} isActive={active === i} onClick={() => handleSelect(i)} />
            ))}
          </motion.div>

          {/* Focus card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <FocusCard key={active} index={active} paused={paused} />
            </AnimatePresence>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 mt-5"
          >
            {bottomRow.map((i) => (
              <SmallCard key={i} feature={features[i]} index={i} isActive={active === i} onClick={() => handleSelect(i)} />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Accordion */}
        <MobileAccordion />
      </div>
    </section>
  );
};

export default WhyUs;
