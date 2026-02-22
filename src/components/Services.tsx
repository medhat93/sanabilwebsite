import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smartphone, Server, Brain, PenTool, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive web platforms built with modern frameworks. From SaaS dashboards to complex enterprise portals — engineered for performance and growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. Intuitive UX, blazing-fast performance, and seamless backend integration.",
  },
  {
    icon: Server,
    title: "Enterprise Systems",
    description: "ERP, CRM, and custom business systems that streamline operations. Designed for scale, security, and seamless integration with your existing infrastructure.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation, predictive analytics, NLP solutions, and AI-powered features embedded directly into your products and workflows.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Human-centered design that converts. We craft beautiful, intuitive interfaces backed by research, prototyping, and rigorous usability testing.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, cloud architecture, containerization, and infrastructure as code. We ensure your applications are reliable, scalable, and always online.",
  },
];

const SectionTitle = ({ children, gold }: { children: React.ReactNode; gold: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-4 mb-4">
    <div className="w-1 h-10 rounded-full gradient-gold" />
    <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground" style={{ letterSpacing: "-0.02em" }}>
      {children} <span className="text-gradient-gold">{gold}</span>
    </h2>
  </div>
);

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionTitle gold="Build">What We</SectionTitle>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl mt-4" style={{ lineHeight: 1.65 }}>
            End-to-end software solutions tailored to your business needs, built with cutting-edge technology and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card-light p-8 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold font-display text-foreground mb-3" style={{ letterSpacing: "-0.02em" }}>{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed" style={{ lineHeight: 1.65 }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
