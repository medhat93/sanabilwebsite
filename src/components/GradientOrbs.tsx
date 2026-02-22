import { motion } from "framer-motion";

interface GradientOrbsProps {
  variant?: "hero" | "cta";
}

const GradientOrbs = ({ variant = "hero" }: GradientOrbsProps) => {
  const orbs = variant === "hero"
    ? [
        { color: "rgba(229, 168, 33, 0.15)", size: 400, x: "10%", y: "20%", duration: 20 },
        { color: "rgba(10, 37, 64, 0.4)", size: 500, x: "70%", y: "60%", duration: 25 },
        { color: "rgba(229, 168, 33, 0.1)", size: 350, x: "80%", y: "10%", duration: 18 },
      ]
    : [
        { color: "rgba(229, 168, 33, 0.12)", size: 350, x: "20%", y: "30%", duration: 22 },
        { color: "rgba(10, 37, 64, 0.3)", size: 400, x: "75%", y: "50%", duration: 20 },
      ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(80px)",
            left: orb.x,
            top: orb.y,
            willChange: "transform",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GradientOrbs;
