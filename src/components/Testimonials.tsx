import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    quote:
      "Sanabil transformed our vision into a world-class platform in 8 weeks. Their AI-augmented team felt like part of our own company. Code quality exceeded agencies twice their size.",
    name: "Ahmed Hafez",
    role: "CEO, Shadoo",
    initials: "AH",
  },
  {
    quote:
      "Their AI monitoring resolved a critical database issue at 3 AM — before users noticed. That's the kind of reliability that lets me sleep at night.",
    name: "Ahmed El-Assy",
    role: "CPO, Gameball",
    initials: "AE",
  },
  {
    quote:
      "Clean code, AI-generated test coverage from day one, and they delivered our platform 40% faster than expected. Sanabil's quality is on another level.",
    name: "Mohamed Saleh",
    role: "Operations Manager, Rawabi Holding",
    initials: "MS",
  },
];

const Stars = ({ animate }: { animate: boolean }) => (
  <div className="flex gap-1 mb-5">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: i * 0.1, duration: 0.3, ease: "backOut" }}
      >
        <Star
          size={18}
          fill="#E5A821"
          strokeWidth={0}
          style={{ color: "#E5A821", filter: "drop-shadow(0 0 4px rgba(229, 168, 33, 0.3))" }}
        />
      </motion.div>
    ))}
  </div>
);

const CYCLE_MS = 6000;

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, CYCLE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, next]);

  const getIndex = (offset: number) => (active + offset + testimonials.length) % testimonials.length;
  const leftIdx = getIndex(-1);
  const rightIdx = getIndex(1);

  const SideCard = ({ idx, side }: { idx: number; side: "left" | "right" }) => {
    const t = testimonials[idx];
    return (
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => setActive(idx)}
        className="hidden lg:block cursor-pointer flex-shrink-0"
        style={{
          width: 280,
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: 20,
          padding: 36,
          transform: "scale(0.9)",
          filter: "blur(1px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.6";
          e.currentTarget.style.filter = "blur(0px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.4";
          e.currentTarget.style.filter = "blur(1px)";
        }}
      >
        <p className="italic line-clamp-3" style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255, 255, 255, 0.7)" }}>
          "{t.quote}"
        </p>
        <div className="flex items-center gap-3 mt-4">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(229, 168, 33, 0.3) 0%, rgba(229, 168, 33, 0.1) 100%)",
              border: "2px solid rgba(229, 168, 33, 0.2)",
              color: "#E5A821",
            }}
          >
            {t.initials}
          </div>
          <div>
            <p className="font-semibold text-primary-foreground" style={{ fontSize: 14 }}>{t.name}</p>
            <p style={{ fontSize: 12, color: "rgba(255, 255, 255, 0.35)" }}>{t.role}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(215 75% 12%) 0%, hsl(207 65% 16%) 100%)" }}
    >
      {/* Gold orb - centered spotlight */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          width: 700,
          height: 500,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse 500px 400px at 50% 50%, rgba(229, 168, 33, 0.1) 0%, transparent 70%)",
        }}
      />
      {/* Footlight glow from below */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: "50%",
          width: 800,
          height: 300,
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse 600px 200px at 50% 100%, rgba(229, 168, 33, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={14} fill="#E5A821" strokeWidth={0} style={{ color: "#E5A821", opacity: 0.3 + i * 0.15 }} />
            ))}
          </div>
          <h2
            className="text-[26px] sm:text-3xl md:text-5xl font-bold font-display text-primary-foreground"
            style={{ letterSpacing: "-0.03em" }}
          >
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-[15px] sm:text-lg" style={{ color: "rgba(255, 255, 255, 0.45)", marginTop: 16 }}>
            Real results from real partnerships.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="flex items-center justify-center gap-6 max-w-[1100px] mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left side card */}
          <SideCard idx={leftIdx} side="left" />

          {/* Center spotlight */}
          <div className="flex-1 max-w-[620px] min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative sm:p-12 sm:rounded-3xl sm:min-h-[320px]"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(229, 168, 33, 0.15)",
                  borderTop: "3px solid #E5A821",
                  borderRadius: 20,
                  padding: "28px 24px",
                  minHeight: 280,
                  boxShadow:
                    "0 24px 64px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(229, 168, 33, 0.08)",
                  zIndex: 2,
                }}
              >
                {/* Large quote watermark */}
                <span
                  className="absolute pointer-events-none select-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 80,
                    color: "rgba(229, 168, 33, 0.08)",
                    top: -5,
                    left: 16,
                    lineHeight: 1,
                  }}
                >
                  "
                </span>

                <Stars animate={true} />

                <p
                  className="relative z-10 italic text-[15px] sm:text-lg"
                  style={{
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.85)",
                    maxWidth: 520,
                  }}
                >
                  "{testimonials[active].quote}"
                </p>

                {/* Divider */}
                <div
                  className="my-6"
                  style={{
                    width: 48,
                    height: 1,
                    background: "rgba(229, 168, 33, 0.3)",
                  }}
                />

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold font-display text-[16px] sm:text-[18px]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(229, 168, 33, 0.3) 0%, rgba(229, 168, 33, 0.1) 100%)",
                        border: "2px solid rgba(229, 168, 33, 0.2)",
                        color: "#E5A821",
                      }}
                    >
                    {testimonials[active].initials}
                  </div>
                    <div>
                      <p
                        className="font-semibold font-display text-primary-foreground text-[15px] sm:text-base"
                      >
                        {testimonials[active].name}
                      </p>
                      <p className="text-[13px] sm:text-sm" style={{ color: "rgba(255, 255, 255, 0.45)" }}>
                        {testimonials[active].role}
                      </p>
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side card */}
          <SideCard idx={rightIdx} side="right" />
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={prev}
            className="hidden sm:flex items-center justify-center group min-w-[44px] min-h-[44px]"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(229, 168, 33, 0.1)";
              e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <ChevronLeft
              size={18}
              className="group-hover:text-[#E5A821] transition-colors"
              style={{ color: "rgba(255, 255, 255, 0.4)" }}
            />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: active === i ? 10 : 8,
                  height: active === i ? 10 : 8,
                  borderRadius: "50%",
                  background: active === i ? "#E5A821" : "rgba(255, 255, 255, 0.2)",
                  boxShadow:
                    active === i
                      ? "0 0 8px rgba(229, 168, 33, 0.4)"
                      : "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="hidden sm:flex items-center justify-center group min-w-[44px] min-h-[44px]"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(229, 168, 33, 0.1)";
              e.currentTarget.style.borderColor = "rgba(229, 168, 33, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <ChevronRight
              size={18}
              className="group-hover:text-[#E5A821] transition-colors"
              style={{ color: "rgba(255, 255, 255, 0.4)" }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
