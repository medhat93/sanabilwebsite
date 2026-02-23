import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FolderCheck, Users, ThumbsUp, HeartPulse } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: FolderCheck },
  { value: 30, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: 24, suffix: "/7", label: "Support & Monitoring", icon: HeartPulse },
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
        const eased = 1 - Math.pow(1 - p, 3);
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
    >
      {count}{suffix}
    </motion.span>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#0A2540" }}>
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block" style={{
        backgroundImage: "radial-gradient(circle, rgba(229, 168, 33, 0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial layout: large hero stat + 3 supporting stats */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero stat - takes up left side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 text-center lg:text-left"
            >
              <div className="relative inline-block">
                <span className="stat-hero-number text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]">
                  <Counter target={50} suffix="+" started={inView} delay={0} />
                </span>
                {/* Decorative arc behind number */}
                <div className="absolute -inset-8 pointer-events-none hidden lg:block" style={{
                  border: '1px solid rgba(229, 168, 33, 0.06)',
                  borderRadius: '50%',
                }} />
              </div>
              <p className="mt-2 font-display font-semibold text-xl sm:text-2xl text-primary-foreground" style={{ letterSpacing: '-0.01em' }}>
                Projects Delivered
              </p>
              <p className="mt-2 text-sm" style={{ color: 'rgba(255, 255, 255, 0.35)', maxWidth: 320 }}>
                From startups to enterprises — each one shipped on time with AI-native precision.
              </p>
            </motion.div>

            {/* Right side: 3 stats stacked */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {stats.slice(1).map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden text-center"
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        borderRadius: 20,
                        padding: "32px 16px",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.border = "1px solid rgba(229, 168, 33, 0.2)";
                        el.style.background = "rgba(255, 255, 255, 0.04)";
                        el.style.transform = "translateY(-4px)";
                        el.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(229, 168, 33, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.border = "1px solid rgba(255, 255, 255, 0.06)";
                        el.style.background = "rgba(255, 255, 255, 0.02)";
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      {/* Top accent line */}
                      <div className="absolute top-0 left-[20%] right-[20%] h-px" style={{
                        background: "linear-gradient(90deg, transparent, rgba(229, 168, 33, 0.4), transparent)",
                      }} />

                      <Icon size={20} strokeWidth={1.5} className="mx-auto mb-3" style={{ color: "rgba(229, 168, 33, 0.5)" }} />

                      <span className="block font-display font-extrabold text-3xl sm:text-4xl md:text-[46px]"
                        style={{ letterSpacing: "-0.03em", color: "#E5A821" }}>
                        <Counter target={stat.value} suffix={stat.suffix} started={inView} delay={(i + 1) * 200} />
                      </span>

                      <p className="mt-2 font-medium text-[13px] sm:text-[15px]" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
