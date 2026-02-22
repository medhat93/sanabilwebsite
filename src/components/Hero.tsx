import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import GradientOrbs from "./GradientOrbs";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-navy">
      <ParticleBackground />
      <GradientOrbs variant="hero" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 mt-6"
        >
          <span className="text-sm">🌾</span>
          <span className="text-sm font-medium text-accent animate-pulse-slow">Sanabil (سنابل) — Arabic for "Ears of Wheat"</span>
        </motion.div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-primary-foreground max-w-5xl mx-auto mb-6"
          style={{ lineHeight: 1.15, letterSpacing: "-0.03em" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="block"
          >
            We Plant Ideas.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="block text-shimmer"
          >
            AI Cultivates Them.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="block"
          >
            You Harvest Success.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
          style={{ lineHeight: 1.6, color: "rgba(255, 255, 255, 0.6)" }}
        >
          Like the finest wheat, great software requires the right seeds, expert cultivation, and patience to grow. At Sanabil, we combine world-class engineering with AI-native development to turn your vision into products that thrive — faster than you thought possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="gradient-gold px-8 py-4 rounded-full font-semibold font-display text-accent-foreground hover:scale-105 transition-transform duration-200 btn-gold-glow text-base md:text-lg"
          >
            Plant Your Next Idea
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="px-8 py-4 rounded-full font-semibold font-display text-primary-foreground border-2 border-primary-foreground/30 hover:border-accent hover:text-accent transition-all duration-200 text-base md:text-lg"
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button onClick={() => scrollTo("#clients")} className="text-primary-foreground/40 hover:text-accent transition-colors">
          <ChevronDown size={32} className="animate-bounce-down" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
