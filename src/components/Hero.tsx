import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import GradientOrbs from "./GradientOrbs";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden gradient-navy">
      <ParticleBackground />
      <GradientOrbs variant="hero" />

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block" style={{ opacity: 0.04 }}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute" style={{
            width: 1,
            height: '140%',
            background: 'linear-gradient(180deg, transparent, #E5A821, transparent)',
            left: `${20 + i * 15}%`,
            top: '-20%',
            transform: `rotate(${15 + i * 2}deg)`,
          }} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6">
        {/* Asymmetric layout: left-aligned on desktop */}
        <div className="max-w-5xl mx-auto lg:mx-0 lg:ml-[8%] text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 bg-accent/10 mb-6 sm:mb-8 mt-6"
          >
            <span className="text-xs sm:text-sm">🌾</span>
            <span className="text-[11px] sm:text-sm font-medium text-accent animate-pulse-slow">Sanabil (سنابل) — Arabic for "Ears of Wheat"</span>
          </motion.div>

          <h1
            className="text-[32px] sm:text-[44px] md:text-6xl lg:text-[76px] font-bold font-display text-primary-foreground max-w-5xl mb-6"
            style={{ lineHeight: 1.08, letterSpacing: "-0.04em" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              We Plant Ideas.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block text-shimmer"
            >
              AI Cultivates Them.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              You Harvest Success.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-[15px] sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 px-2 lg:px-0 mx-auto lg:mx-0"
            style={{ lineHeight: 1.6, color: "rgba(255, 255, 255, 0.6)" }}
          >
            We combine world-class engineering with AI-native development to turn your vision into products that thrive — faster than you thought possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto gradient-gold px-8 py-4 rounded-xl sm:rounded-full font-semibold font-display text-accent-foreground hover:scale-105 transition-transform duration-200 btn-gold-glow text-base md:text-lg"
            >
              Plant Your Next Idea
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl sm:rounded-full font-semibold font-display text-primary-foreground border-2 border-primary-foreground/30 hover:border-accent hover:text-accent transition-all duration-200 text-base md:text-lg"
            >
              Explore Our Services
            </button>
          </motion.div>
        </div>

        {/* Decorative floating badge - desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              border: '1px solid rgba(229, 168, 33, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'radial-gradient(circle, rgba(229, 168, 33, 0.06) 0%, transparent 70%)',
            }}>
              <div className="text-center">
                <span className="block font-display font-extrabold text-4xl" style={{ color: '#E5A821', letterSpacing: '-0.03em' }}>3×</span>
                <span className="block text-xs font-medium mt-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Faster Delivery</span>
              </div>
            </div>
            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px]"
              style={{ border: '1px dashed rgba(229, 168, 33, 0.08)', borderRadius: '50%' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button onClick={() => scrollTo("#clients")} className="text-primary-foreground/40 hover:text-accent transition-colors p-2">
          <ChevronDown size={28} className="sm:w-8 sm:h-8 animate-bounce-down" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
