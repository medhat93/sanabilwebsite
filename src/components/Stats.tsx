import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FolderCheck, Users, ThumbsUp, HeartPulse } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: FolderCheck, decorative: "chart" },
  { value: 30, suffix: "+", label: "Happy Clients", icon: Users, decorative: "circles" },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp, decorative: "ring" },
  { value: 24, suffix: "/7", label: "Support & Monitoring", icon: HeartPulse, decorative: "pulse" },
];

const Counter = ({ target, suffix, started, delay }: { target: number; suffix: string; started: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        setCount(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(step);
        else setDone(true);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, target, delay]);

  return (
    <motion.span
      animate={done ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
      className="block font-mono font-extrabold text-4xl sm:text-[40px] md:text-[46px] lg:text-[54px]"
      style={{
        letterSpacing: "-0.03em",
        color: "#E5A821",
        textShadow: done ? "0 0 30px rgba(229, 168, 33, 0.3)" : "none",
        transition: "text-shadow 0.5s ease",
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

/* Decorative SVG backgrounds */
const ChartDeco = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 150" preserveAspectRatio="none">
    <polyline points="10,120 50,90 90,100 130,60 170,40 190,50" fill="none" stroke="rgba(229,168,33,0.04)" strokeWidth="2" />
  </svg>
);
const CirclesDeco = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(229,168,33,0.03)" strokeWidth="1" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(229,168,33,0.025)" strokeWidth="1" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(229,168,33,0.02)" strokeWidth="1" />
  </svg>
);
const RingDeco = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(229,168,33,0.05)" strokeWidth="3"
      strokeDasharray="340 40" transform="rotate(-90 100 100)" />
  </svg>
);
const PulseDeco = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 100">
    <polyline points="10,50 40,50 55,20 70,80 85,50 100,50 115,30 130,70 145,50 190,50"
      fill="none" stroke="rgba(229,168,33,0.04)" strokeWidth="1.5" />
  </svg>
);

const decoMap: Record<string, React.FC> = { chart: ChartDeco, circles: CirclesDeco, ring: RingDeco, pulse: PulseDeco };

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 overflow-hidden" style={{ background: "#0A2540" }}>
      {/* Dot grid - hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" style={{
        backgroundImage: "radial-gradient(circle, rgba(229, 168, 33, 0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      {/* Vertical light sweep - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ overflow: "hidden" }}>
        <div style={{
          width: "100%",
          height: "200%",
          background: "linear-gradient(180deg, transparent 0%, rgba(229,168,33,0.02) 45%, rgba(229,168,33,0.04) 50%, rgba(229,168,33,0.02) 55%, transparent 100%)",
          animation: "verticalSweep 15s linear infinite",
          willChange: "transform",
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-[1100px] mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const Deco = decoMap[stat.decorative];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="group relative overflow-hidden text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderTop: "2px solid rgba(229, 168, 33, 0.3)",
                  borderRadius: 16,
                  padding: "24px 16px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.border = "1px solid rgba(229, 168, 33, 0.2)";
                  el.style.borderTop = "2px solid rgba(229, 168, 33, 0.5)";
                  el.style.background = "rgba(255, 255, 255, 0.04)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(229, 168, 33, 0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.border = "1px solid rgba(255, 255, 255, 0.06)";
                  el.style.borderTop = "2px solid rgba(229, 168, 33, 0.3)";
                  el.style.background = "rgba(255, 255, 255, 0.02)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Decorative - hidden on mobile */}
                <div className="hidden sm:block">
                  <Deco />
                </div>

                {/* Pulse dot */}
                <span className="absolute top-3 right-3 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full" style={{
                  background: "#E5A821", opacity: 0.6,
                  animation: "statPulse 2s ease-in-out infinite",
                }} />

                {/* Icon */}
                <Icon size={20} strokeWidth={1.5} className="mx-auto mb-2 sm:mb-3" style={{ color: "rgba(229, 168, 33, 0.5)" }} />

                {/* Number */}
                <Counter target={stat.value} suffix={stat.suffix} started={inView} delay={i * 200} />

                {/* Label */}
                <p className="mt-1 sm:mt-2 font-medium text-[13px] sm:text-[15px]" style={{ color: "rgba(255, 255, 255, 0.5)" }}>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes statPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(229, 168, 33, 0.4); }
          50% { box-shadow: 0 0 0 6px rgba(229, 168, 33, 0); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
