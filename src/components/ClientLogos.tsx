import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoTechflow from "@/assets/logos/techflow.png";
import logoCloudscale from "@/assets/logos/cloudscale.png";
import logoDatavault from "@/assets/logos/datavault.png";
import logoNexgen from "@/assets/logos/nexgen.png";
import logoQuantum from "@/assets/logos/quantum.png";
import logoCyberedge from "@/assets/logos/cyberedge.png";
import logoInnosphere from "@/assets/logos/innosphere.png";
import logoMetapulse from "@/assets/logos/metapulse.png";

const logos = [
  { src: logoTechflow, name: "TechFlow" },
  { src: logoCloudscale, name: "CloudScale" },
  { src: logoDatavault, name: "DataVault" },
  { src: logoNexgen, name: "NexGen AI" },
  { src: logoQuantum, name: "Quantum Labs" },
  { src: logoCyberedge, name: "CyberEdge" },
  { src: logoInnosphere, name: "InnoSphere" },
  { src: logoMetapulse, name: "MetaPulse" },
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
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 w-[200px] h-[80px] rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[70px] max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
