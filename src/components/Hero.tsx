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

      <div className="relative z-10 container mx-auto px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/30 bg-accent/10 mb-6 sm:mb-8 mt-6"
        >
          <span className="text-xs sm:text-sm">🌾</span>
          <span className="text-[11px] sm:text-sm font-medium text-accent animate-pulse-slow">Sanabil (سنابل) — Arabic for "Ears of Wheat"</span>
        </motion.div>

        <h1
          className="text-[32px] sm:text-[40px] md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground max-w-5xl mx-auto mb-6"
          style={{ lineHeight: 1.15, letterSpacing: "-0.03em" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="block"
          >
            We Plant Ideas.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="block text-shimmer"
          >
            AI Cultivates Them.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="block"
          >
            You Harvest Success.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[15px] sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          style={{ lineHeight: 1.6, color: "rgba(255, 255, 255, 0.6)" }}
        >
          Like the finest wheat, great software requires the right seeds, expert cultivation, and patience to grow. At Sanabil, we combine world-class engineering with AI-native development to turn your vision into products that thrive — faster than you thought possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
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
