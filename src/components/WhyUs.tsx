import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Clock, Cpu, Footprints, Star, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Dedicated Team Per Project", description: "Every project gets a fully dedicated team of engineers, designers, and project managers. No shared resources, no divided attention — your project is our sole focus." },
  { icon: Clock, title: "24/7 Round-the-Clock Support", description: "We're always available. Our support doesn't end at deployment — we provide continuous monitoring, maintenance, and rapid response to keep your systems running flawlessly." },
  { icon: Cpu, title: "AI-Integrated Workflow", description: "We leverage the latest AI technologies throughout our development process — from AI-assisted code review and testing to intelligent project management and predictive quality assurance." },
  { icon: Footprints, title: "From Vision to Launch, Side by Side", description: "We walk with you through every phase — discovery, planning, design, development, testing, deployment, and beyond. Full transparency, regular demos, and continuous feedback loops." },
  { icon: Star, title: "Highly Qualified Calibers", description: "Our engineers are hand-picked from the top 5% of talent. Senior developers, certified architects, and domain experts who bring years of experience to your project." },
  { icon: ShieldCheck, title: "Engineering Excellence", description: "Clean architecture, comprehensive testing, thorough code reviews, and industry best practices. We deliver software that's not just functional — it's maintainable, secure, and built to last." },
];

const WhyUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Why <span className="text-gradient-gold">Sanabil Technologies</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We don't just write code — we become your technology partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <f.icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
