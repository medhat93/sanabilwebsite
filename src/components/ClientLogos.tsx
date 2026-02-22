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
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "transparent",
        paddingTop: 40,
        paddingBottom: 40,
        borderTop: "1px solid rgba(229, 168, 33, 0.06)",
        borderBottom: "1px solid rgba(229, 168, 33, 0.06)",
      }}
    >
      <div className="container mx-auto px-6 mb-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="uppercase text-center"
          style={{
            color: "rgba(255, 255, 255, 0.4)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.15em",
          }}
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      <div className="relative group">
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, hsl(207 75% 15%) 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, hsl(207 75% 15%) 0%, transparent 100%)" }}
        />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 150, height: 48, marginLeft: 30, marginRight: 30 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[48px] max-w-[150px] object-contain transition-all duration-[400ms] ease-in-out"
                style={{
                  filter: "grayscale(1) brightness(0.7)",
                  opacity: 0.4,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.filter = "grayscale(0) brightness(1)";
                  el.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.filter = "grayscale(1) brightness(0.7)";
                  el.style.opacity = "0.4";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
