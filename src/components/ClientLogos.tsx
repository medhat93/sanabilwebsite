import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const names = [
  "TechVentures",
  "CloudScale",
  "DataFlow",
  "NexGen Systems",
  "Quantum Labs",
  "InnoSphere",
  "AeroDigital",
  "VertexAI",
];

const ClientLogos = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="overflow-hidden"
      style={{ padding: "32px 0", background: "transparent" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-center mb-6 uppercase font-display"
        style={{
          color: "rgba(255, 255, 255, 0.3)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.15em",
        }}
      >
        Trusted by Industry Leaders
      </motion.p>

      <div
        className="relative group"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...names, ...names].map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 font-display cursor-default transition-colors duration-300"
              style={{
                color: "rgba(255, 255, 255, 0.2)",
                fontSize: 18,
                fontWeight: 600,
                marginLeft: 40,
                marginRight: 40,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.2)"; }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
