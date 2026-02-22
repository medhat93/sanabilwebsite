import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smartphone, Network, BrainCircuit, PenTool, Cloud } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Applications & Platforms",
    description:
      "Scalable, high-performance web platforms built with modern frameworks and AI-augmented development. From SaaS dashboards to complex enterprise portals — architected for growth, optimized for speed, and designed to convert.",
    badge: "⚡ AI-assisted development delivers 3x faster than traditional builds",
    techs: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Pixel-perfect interfaces, buttery smooth animations, and seamless backend integration — built with AI-assisted testing that catches bugs across thousands of device configurations.",
    badge: "⚡ AI-powered testing across 2000+ device configurations",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
  },
  {
    icon: Network,
    title: "Enterprise Systems & Integration",
    description:
      "ERP, CRM, and custom business systems that streamline operations at scale. We build systems that talk to each other — integrating with your existing infrastructure through AI-optimized APIs and real-time data pipelines.",
    badge: "⚡ AI-optimized integrations reduce data sync time by 70%",
    techs: ["Python", "Java", ".NET", "Microservices", "Kubernetes", "AWS"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning Solutions",
    description:
      "Custom AI solutions that transform your business — from intelligent automation and predictive analytics to natural language processing and computer vision. We architect AI to solve your specific challenges and integrate it seamlessly into your products.",
    badge: "⚡ From POC to production AI in weeks, not months",
    techs: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Vector DBs"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design & Strategy",
    description:
      "Human-centered design that converts. We craft beautiful, intuitive interfaces backed by user research, AI-generated prototyping, and rigorous usability testing. Every pixel serves a purpose — form follows function, and function drives revenue.",
    badge: "⚡ AI prototyping generates 10x more design variations to test",
    techs: ["Figma", "Framer", "User Research", "Design Systems", "Accessibility", "A/B Testing"],
  },
  {
    icon: Cloud,
    title: "DevOps, Cloud & Infrastructure",
    description:
      "CI/CD pipelines, cloud architecture, containerization, and infrastructure as code — all powered by AI-assisted monitoring and automated scaling. We ensure your applications are reliable, scalable, and ready for whatever traffic you throw at them.",
    badge: "⚡ AI monitoring predicts 80% of infrastructure issues before impact",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

/* ───────── Animated Visuals ───────── */

const WebVisual = () => (
  <svg viewBox="0 0 240 160" className="w-full h-full" style={{ opacity: 0.55 }}>
    {/* Browser chrome */}
    <rect x="10" y="10" width="220" height="140" rx="8" fill="none" stroke="#E5A821" strokeWidth="1" />
    <line x1="10" y1="32" x2="230" y2="32" stroke="#E5A821" strokeWidth="0.5" strokeOpacity="0.4" />
    <circle cx="26" cy="21" r="3" fill="#E5A821" fillOpacity="0.3" />
    <circle cx="36" cy="21" r="3" fill="#E5A821" fillOpacity="0.2" />
    <circle cx="46" cy="21" r="3" fill="#E5A821" fillOpacity="0.15" />
    {/* Content blocks */}
    <motion.rect x="20" y="42" width="80" height="8" rx="2" fill="#E5A821" fillOpacity="0.2"
      animate={{ fillOpacity: [0.15, 0.35, 0.15] }} transition={{ duration: 3, repeat: Infinity }} />
    <motion.rect x="20" y="58" width="140" height="4" rx="1" fill="#E5A821" fillOpacity="0.1"
      animate={{ fillOpacity: [0.08, 0.2, 0.08] }} transition={{ duration: 3, delay: 0.3, repeat: Infinity }} />
    <motion.rect x="20" y="68" width="120" height="4" rx="1" fill="#E5A821" fillOpacity="0.1"
      animate={{ fillOpacity: [0.08, 0.2, 0.08] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity }} />
    <motion.rect x="20" y="84" width="90" height="40" rx="4" fill="#E5A821" fillOpacity="0.06"
      animate={{ fillOpacity: [0.04, 0.1, 0.04] }} transition={{ duration: 4, repeat: Infinity }} />
    <motion.rect x="120" y="84" width="100" height="40" rx="4" fill="#E5A821" fillOpacity="0.06"
      animate={{ fillOpacity: [0.04, 0.1, 0.04] }} transition={{ duration: 4, delay: 0.5, repeat: Infinity }} />
    <motion.rect x="20" y="132" width="60" height="10" rx="5" fill="#E5A821" fillOpacity="0.15"
      animate={{ fillOpacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2.5, repeat: Infinity }} />
  </svg>
);

const MobileVisual = () => (
  <svg viewBox="0 0 120 200" className="w-auto h-full max-h-[180px] mx-auto" style={{ opacity: 0.55 }}>
    <rect x="10" y="5" width="100" height="190" rx="14" fill="none" stroke="#E5A821" strokeWidth="1.2" />
    <rect x="40" y="10" width="40" height="4" rx="2" fill="#E5A821" fillOpacity="0.2" />
    <line x1="10" y1="28" x2="110" y2="28" stroke="#E5A821" strokeWidth="0.5" strokeOpacity="0.3" />
    {/* App content */}
    <motion.rect x="20" y="38" width="80" height="6" rx="2" fill="#E5A821" fillOpacity="0.2"
      animate={{ fillOpacity: [0.15, 0.3, 0.15] }} transition={{ duration: 3, repeat: Infinity }} />
    <motion.rect x="20" y="52" width="60" height="3" rx="1" fill="#E5A821" fillOpacity="0.1"
      animate={{ fillOpacity: [0.08, 0.18, 0.08] }} transition={{ duration: 3, delay: 0.2, repeat: Infinity }} />
    <motion.rect x="20" y="66" width="80" height="50" rx="6" fill="#E5A821" fillOpacity="0.05"
      animate={{ fillOpacity: [0.04, 0.09, 0.04] }} transition={{ duration: 4, repeat: Infinity }} />
    <motion.rect x="20" y="126" width="36" height="36" rx="4" fill="#E5A821" fillOpacity="0.06"
      animate={{ fillOpacity: [0.04, 0.1, 0.04] }} transition={{ duration: 3.5, repeat: Infinity }} />
    <motion.rect x="64" y="126" width="36" height="36" rx="4" fill="#E5A821" fillOpacity="0.06"
      animate={{ fillOpacity: [0.04, 0.1, 0.04] }} transition={{ duration: 3.5, delay: 0.3, repeat: Infinity }} />
    <circle cx="60" cy="180" r="6" fill="none" stroke="#E5A821" strokeWidth="0.5" strokeOpacity="0.2" />
  </svg>
);

const EnterpriseVisual = () => {
  const nodes = [
    { x: 40, y: 40 }, { x: 120, y: 25 }, { x: 200, y: 40 },
    { x: 80, y: 90 }, { x: 160, y: 90 },
    { x: 120, y: 140 },
  ];
  const edges = [[0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[3,5],[4,5],[3,4]];
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" style={{ opacity: 0.55 }}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#E5A821" strokeWidth="0.8" strokeOpacity="0.25" />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.rect x={n.x - 16} y={n.y - 12} width="32" height="24" rx="4"
            fill="#E5A821" fillOpacity="0.06" stroke="#E5A821" strokeWidth="0.8" strokeOpacity="0.25"
            animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
          />
        </g>
      ))}
      {/* Pulse dot traveling */}
      <motion.circle r="3" fill="#E5A821" fillOpacity="0.7"
        animate={{ cx: [40, 120, 200, 160, 80, 120, 40], cy: [40, 25, 40, 90, 90, 140, 40] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
};

const AIVisual = () => {
  const layers = [
    [{ x: 30, y: 30 }, { x: 30, y: 70 }, { x: 30, y: 110 }, { x: 30, y: 150 }],
    [{ x: 90, y: 20 }, { x: 90, y: 55 }, { x: 90, y: 90 }, { x: 90, y: 125 }, { x: 90, y: 160 }],
    [{ x: 150, y: 35 }, { x: 150, y: 75 }, { x: 150, y: 115 }, { x: 150, y: 155 }],
    [{ x: 210, y: 55 }, { x: 210, y: 95 }, { x: 210, y: 135 }],
  ];
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full" style={{ opacity: 0.55 }}>
      {layers.slice(0, -1).map((layer, li) =>
        layer.map((n1, ni) =>
          layers[li + 1].map((n2, n2i) => (
            <motion.line key={`${li}-${ni}-${n2i}`}
              x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
              stroke="#E5A821" strokeWidth="0.5" strokeOpacity="0.15"
              animate={{ strokeOpacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, delay: (li * 0.3 + ni * 0.1), repeat: Infinity }}
            />
          ))
        )
      )}
      {layers.flat().map((n, i) => (
        <motion.circle key={i} cx={n.x} cy={n.y} r="4" fill="#E5A821"
          animate={{ fillOpacity: [0.2, 0.6, 0.2], r: [3.5, 5, 3.5] }}
          transition={{ duration: 3, delay: i * 0.15, repeat: Infinity }} />
      ))}
    </svg>
  );
};

const DesignVisual = () => (
  <svg viewBox="0 0 240 170" className="w-full h-full" style={{ opacity: 0.55 }}>
    {/* Overlapping frames */}
    <motion.rect x="30" y="20" width="100" height="70" rx="6" fill="none" stroke="#E5A821" strokeWidth="0.8"
      animate={{ rotate: [-2, 1, -2] }} transition={{ duration: 8, repeat: Infinity }}
      style={{ transformOrigin: "80px 55px" }} />
    <motion.rect x="70" y="50" width="100" height="70" rx="6" fill="#E5A821" fillOpacity="0.04" stroke="#E5A821" strokeWidth="0.8"
      animate={{ rotate: [1, -1, 1] }} transition={{ duration: 7, repeat: Infinity }}
      style={{ transformOrigin: "120px 85px" }} />
    <motion.rect x="110" y="30" width="100" height="70" rx="6" fill="none" stroke="#E5A821" strokeWidth="0.8" strokeOpacity="0.4"
      animate={{ rotate: [0, 2, 0] }} transition={{ duration: 9, repeat: Infinity }}
      style={{ transformOrigin: "160px 65px" }} />
    {/* Color swatches */}
    {[0, 1, 2, 3].map(i => (
      <motion.rect key={i} x={50 + i * 28} y="140" width="20" height="20" rx="4"
        fill="#E5A821" fillOpacity={0.08 + i * 0.04}
        animate={{ fillOpacity: [0.06 + i * 0.03, 0.15 + i * 0.05, 0.06 + i * 0.03] }}
        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
    {/* Cursor */}
    <motion.g animate={{ x: [0, 40, 80, 40, 0], y: [0, -20, 10, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
      <polygon points="90,60 90,78 98,72" fill="#E5A821" fillOpacity="0.5" />
    </motion.g>
  </svg>
);

const DevOpsVisual = () => {
  const stages = [
    { x: 20, label: "Code" }, { x: 75, label: "Build" },
    { x: 130, label: "Test" }, { x: 185, label: "Deploy" },
  ];
  return (
    <svg viewBox="0 0 240 100" className="w-full h-full" style={{ opacity: 0.55 }}>
      {/* Pipeline line */}
      <line x1="30" y1="50" x2="210" y2="50" stroke="#E5A821" strokeWidth="1" strokeOpacity="0.2" />
      {/* Stage nodes */}
      {stages.map((s, i) => (
        <g key={i}>
          <motion.circle cx={s.x + 15} cy={50} r="14" fill="#E5A821" fillOpacity="0.05"
            stroke="#E5A821" strokeWidth="0.8" strokeOpacity="0.3"
            animate={{ strokeOpacity: [0.2, 0.6, 0.2], fillOpacity: [0.03, 0.1, 0.03] }}
            transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
          />
          <text x={s.x + 15} y={80} textAnchor="middle" fill="#E5A821" fontSize="9" fontWeight="500" opacity="0.3">
            {s.label}
          </text>
        </g>
      ))}
      {/* Traveling pulse */}
      <motion.circle r="4" fill="#E5A821" fillOpacity="0.7" cy={50}
        animate={{ cx: [35, 90, 145, 200, 200, 35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 0.9, 1] }}
      />
    </svg>
  );
};

const visuals = [WebVisual, MobileVisual, EnterpriseVisual, AIVisual, DesignVisual, DevOpsVisual];

/* ───────── Tab Button ───────── */
const ServiceTab = ({
  service,
  index,
  isActive,
  onClick,
  progress,
}: {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
  progress: number;
}) => {
  const Icon = service.icon;
  return (
    <button
      onClick={onClick}
      className="w-full text-left relative"
      style={{
        padding: "16px 20px",
        borderLeft: `3px solid ${isActive ? "#E5A821" : "transparent"}`,
        background: isActive ? "rgba(229, 168, 33, 0.06)" : "transparent",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={20}
          strokeWidth={1.5}
          style={{
            color: isActive ? "#E5A821" : "rgba(255, 255, 255, 0.3)",
            filter: isActive ? "drop-shadow(0 0 6px rgba(229, 168, 33, 0.3))" : "none",
            transition: "all 0.3s ease",
            flexShrink: 0,
          }}
        />
        <span
          className="font-display"
          style={{
            fontSize: 16,
            fontWeight: isActive ? 600 : 500,
            color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)",
            transition: "all 0.3s ease",
          }}
        >
          {service.title.split("&")[0].trim()}
        </span>
      </div>
      {/* Progress bar inside active tab */}
      {isActive && (
        <div className="absolute bottom-0 left-[3px] right-0 h-[2px]" style={{ background: "rgba(229, 168, 33, 0.1)" }}>
          <div className="h-full" style={{ width: `${progress}%`, background: "#E5A821", transition: "width 0.1s linear" }} />
        </div>
      )}
    </button>
  );
};

/* ───────── Detail Panel ───────── */
const DetailPanel = ({ index }: { index: number }) => {
  const s = services[index];
  const Icon = s.icon;
  const Visual = visuals[index];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
        {/* Text */}
        <div className="flex-1 min-w-0 flex flex-col" style={{ maxWidth: 520 }}>
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.3 }}
            style={{ filter: "drop-shadow(0 0 16px rgba(229, 168, 33, 0.35))" }} className="mb-4">
            <Icon size={44} strokeWidth={1.3} style={{ color: "#E5A821" }} />
          </motion.div>

          <motion.h3 initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.3 }}
            className="font-display font-bold text-primary-foreground mb-3" style={{ fontSize: 27, letterSpacing: "-0.02em" }}>
            {s.title}
          </motion.h3>

          <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.3 }}
            style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255, 255, 255, 0.6)" }}>
            {s.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}
            className="mt-5">
            <span className="inline-flex items-center gap-1 font-medium" style={{
              background: "rgba(229, 168, 33, 0.08)", border: "1px solid rgba(229, 168, 33, 0.2)",
              borderRadius: 20, padding: "6px 14px", fontSize: 13, color: "#E5A821",
            }}>
              {s.badge}
            </span>
          </motion.div>

          {/* Tech pills */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.3 }}
            className="flex flex-wrap gap-2 mt-5">
            {s.techs.map((t) => (
              <span key={t} style={{
                background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "rgba(255, 255, 255, 0.45)", fontWeight: 500,
              }}>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:flex items-center justify-center pointer-events-none"
          style={{ width: "42%", flexShrink: 0 }}>
          <Visual />
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ───────── Mobile Pill Bar ───────── */
const MobilePillBar = ({ active, onSelect }: { active: number; onSelect: (i: number) => void }) => (
  <div className="flex gap-2 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-none md:hidden" style={{ WebkitOverflowScrolling: "touch" }}>
    {services.map((s, i) => {
      const Icon = s.icon;
      const isActive = active === i;
      return (
        <button key={i} onClick={() => onSelect(i)}
          className="flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
          style={{
            padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500,
            background: isActive ? "rgba(229, 168, 33, 0.15)" : "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${isActive ? "rgba(229, 168, 33, 0.3)" : "rgba(255, 255, 255, 0.06)"}`,
            color: isActive ? "#E5A821" : "rgba(255, 255, 255, 0.4)",
            transition: "all 0.3s ease",
          }}>
          <Icon size={14} strokeWidth={1.5} />
          {s.title.split("&")[0].split("Solutions")[0].trim()}
        </button>
      );
    })}
  </div>
);

/* ───────── Main Section ───────── */
const CYCLE_MS = 6000;

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const startCycle = useCallback(() => {
    clearTimers();
    setProgress(0);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / CYCLE_MS) * 100, 100));
    }, 50);
    timerRef.current = setTimeout(() => {
      setActive((p) => (p + 1) % services.length);
    }, CYCLE_MS) as unknown as ReturnType<typeof setInterval>;
  }, [clearTimers]);

  useEffect(() => {
    if (!paused) startCycle();
    return clearTimers;
  }, [active, paused, startCycle, clearTimers]);

  const handleSelect = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  return (
    <section id="services" ref={ref} className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(207 75% 15%) 0%, hsl(215 75% 12%) 100%)" }}>
      {/* Background orb */}
      <div className="absolute pointer-events-none" style={{ top: "40%", left: "70%", width: 600, height: 600,
        background: "radial-gradient(circle, rgba(229, 168, 33, 0.03) 0%, transparent 50%)", transform: "translate(-50%, -50%)" }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="w-1 h-8 sm:h-10 rounded-full gradient-gold" />
            <h2 className="text-[26px] sm:text-3xl md:text-5xl font-bold font-display text-primary-foreground" style={{ letterSpacing: "-0.02em" }}>
              What We <span className="text-gradient-gold">Build</span>
            </h2>
          </div>
          <p className="text-primary-foreground/50 max-w-2xl mx-auto text-[15px] sm:text-lg md:text-xl mt-4 px-2" style={{ lineHeight: 1.65 }}>
            End-to-end software solutions powered by AI-native engineering. Each service backed by dedicated teams, cutting-edge tools, and a relentless commitment to quality.
          </p>
        </motion.div>

        {/* Mobile pill bar */}
        <MobilePillBar active={active} onSelect={handleSelect} />

        {/* Desktop: Tabs + Detail */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="hidden md:flex gap-6 max-w-[1100px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Tabs */}
          <div style={{
            width: 280, flexShrink: 0, background: "rgba(255, 255, 255, 0.01)",
            border: "1px solid rgba(255, 255, 255, 0.04)", borderRadius: 20, padding: "12px 0",
          }}>
            {services.map((s, i) => (
              <div key={i}>
                <ServiceTab service={s} index={i} isActive={active === i}
                  onClick={() => handleSelect(i)} progress={active === i ? progress : 0} />
                {i < services.length - 1 && (
                  <div style={{ height: 1, background: "rgba(255, 255, 255, 0.04)", margin: "0 20px" }} />
                )}
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-w-0 relative overflow-hidden" style={{
            background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)",
            borderTop: "3px solid #E5A821", borderRadius: 24, padding: 48, minHeight: 480,
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
          }}>
            <AnimatePresence mode="wait">
              <DetailPanel key={active} index={active} />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile detail panel */}
        <div className="md:hidden mt-4" style={{
          background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)",
          borderTop: "3px solid #E5A821", borderRadius: 20, padding: "24px 20px", minHeight: 280,
        }}>
          <AnimatePresence mode="wait">
            <DetailPanel key={active} index={active} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
