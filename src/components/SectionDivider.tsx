import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionDivider = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="flex items-center justify-center py-2">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="h-px w-40 origin-center"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(40 80% 52% / 0.4), transparent)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
