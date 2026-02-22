import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const dummyLogos = [
  { name: "TechFlow", letters: "TF" },
  { name: "CloudScale", letters: "CS" },
  { name: "DataVault", letters: "DV" },
  { name: "NexGen AI", letters: "NA" },
  { name: "Quantum Labs", letters: "QL" },
  { name: "CyberEdge", letters: "CE" },
  { name: "InnoSphere", letters: "IS" },
  { name: "MetaPulse", letters: "MP" },
];

const ClientLogos = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="clients" ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm font-semibold font-display uppercase tracking-widest text-muted-foreground"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...dummyLogos, ...dummyLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 w-[160px] h-[60px] rounded-lg border border-border bg-muted/50 flex items-center justify-center gap-2 hover:border-accent/50 transition-all duration-300 group"
            >
              <span className="w-8 h-8 rounded-md gradient-gold flex items-center justify-center text-xs font-bold text-accent-foreground opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {logo.letters}
              </span>
              <span className="text-sm font-semibold font-display text-muted-foreground/50 group-hover:text-muted-foreground transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
