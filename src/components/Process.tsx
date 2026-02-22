import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Palette, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Strategy", description: "We dive deep into your business goals, target users, and technical requirements. We define the project scope, tech stack, and create a detailed roadmap." },
  { icon: Palette, title: "Design & Prototype", description: "Our designers create wireframes and interactive prototypes. You see and feel the product before a single line of code is written. Iterate until it's perfect." },
  { icon: Code2, title: "Development & AI Integration", description: "Our dedicated team builds your solution using agile sprints. AI-powered code analysis ensures quality. Regular demos keep you in the loop at every stage." },
  { icon: TestTube, title: "Testing & Quality Assurance", description: "Rigorous automated and manual testing. Performance, security, and usability audits. We don't ship until it meets the highest standards." },
  { icon: Rocket, title: "Launch & Continuous Support", description: "Smooth deployment to production. Post-launch monitoring, 24/7 support, and continuous improvements to keep your product ahead of the competition." },
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-1 h-10 rounded-full gradient-gold" />
            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground" style={{ letterSpacing: "-0.02em" }}>
              Our <span className="text-gradient-gold">Process</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            A proven methodology that delivers results — every time.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line with gold gradient fill */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              className="absolute inset-0 origin-top"
              style={{ background: "linear-gradient(180deg, hsl(40 80% 52%), hsl(40 80% 62%))" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              <div
                className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full gradient-gold flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(229, 168, 33, 0.3)" }}
              >
                <step.icon size={24} className="text-accent-foreground" />
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold font-display text-foreground mb-1" style={{ letterSpacing: "-0.02em" }}>{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed" style={{ lineHeight: 1.65 }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
