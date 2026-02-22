import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = Array.from({ length: 8 }, (_, i) => `Client Logo ${i + 1}`);

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
          {[...logos, ...logos].map((label, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 w-[150px] h-[60px] rounded-lg border border-border bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground hover:border-accent/50 hover:text-accent transition-all duration-300"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
