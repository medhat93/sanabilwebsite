import { useState } from "react";

const clients = [
  "Google", "Microsoft", "Amazon", "Stripe", "Slack", "Shopify", "Notion", "Figma",
];

const clients2 = [
  "Meridian Corp", "Axiom Digital", "PrimeStack", "Elevate Labs", "SynapseIO", "Orbit Systems", "NovaEdge", "Helix Cloud",
];

const NameItem = ({ name, size = 18, baseOpacity = 0.2 }: { name: string; size?: number; baseOpacity?: number }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="flex-shrink-0 font-display whitespace-nowrap cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "rgba(255,255,255,0.7)" : `rgba(255,255,255,${baseOpacity})`,
        fontSize: size,
        fontWeight: 600,
        transition: "all 0.3s ease",
        textShadow: hovered ? "0 0 20px rgba(229,168,33,0.2)" : "none",
      }}
    >
      {name}
    </span>
  );
};

const Dot = () => (
  <span
    className="flex-shrink-0 select-none"
    style={{ color: "rgba(229,168,33,0.3)", fontSize: 24, lineHeight: 1 }}
    aria-hidden
  >
    ·
  </span>
);

const maskStyle = {
  maskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
  overflow: "hidden" as const,
};

const ClientMarquee = () => {
  const row1 = [...clients, ...clients];
  const row2 = [...clients2, ...clients2];

  return (
    <section
      id="clients"
      style={{
        background: "linear-gradient(180deg, rgba(10,37,64,1) 0%, rgba(10,37,64,1) 100%)",
        position: "relative",
        padding: "28px 0",
        overflow: "hidden",
      }}
      className="sm:py-10"
    >
      {/* Gold glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(10,37,64,0) 0%, rgba(229,168,33,0.02) 50%, rgba(10,37,64,0) 100%)" }}
      />
      {/* Light sweep - hidden on mobile */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          width: "200%",
          height: "100%",
          background: "linear-gradient(90deg, transparent 0%, rgba(229,168,33,0.02) 45%, rgba(229,168,33,0.04) 50%, rgba(229,168,33,0.02) 55%, transparent 100%)",
          animation: "lightSweep 20s linear infinite",
          willChange: "transform",
        }}
      />

      <div className="relative z-10">
        {/* Gold line */}
        <div className="w-8 sm:w-10 h-px mx-auto mb-3" style={{ background: "rgba(229,168,33,0.3)" }} />

        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textAlign: "center",
            marginBottom: 24,
          }}
          className="sm:text-[13px] sm:tracking-[0.15em] sm:mb-8"
        >
          Trusted by Industry Leaders
        </p>

        {/* Row 1 */}
        <div style={maskStyle}>
          <div
            className="flex items-center"
            style={{ gap: 32, width: "max-content", animation: "marquee 30s linear infinite" }}
          >
            {row1.map((name, i) => (
              <span key={i} className="flex items-center gap-8 sm:gap-10">
                <NameItem name={name} size={15} />
                <Dot />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - hidden on mobile */}
        <div className="hidden sm:block" style={{ ...maskStyle, marginTop: 20 }}>
          <div
            className="flex items-center"
            style={{ gap: 40, width: "max-content", animation: "marquee 35s linear infinite reverse" }}
          >
            {row2.map((name, i) => (
              <span key={i} className="flex items-center gap-10">
                <NameItem name={name} size={14} baseOpacity={0.12} />
                <Dot />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
