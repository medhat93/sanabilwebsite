import { useState } from "react";

const clients = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
  { name: "Notion", logo: "https://logo.clearbit.com/notion.so" },
  { name: "Figma", logo: "https://logo.clearbit.com/figma.com" },
];

const LogoItem = ({ name, logo }: { name: string; logo: string }) => {
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {failed ? (
        <span
          className="font-display whitespace-nowrap"
          style={{
            color: hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
            fontSize: 18,
            fontWeight: 600,
            transition: "color 0.4s ease",
          }}
        >
          {name}
        </span>
      ) : (
        <img
          src={logo}
          alt={name}
          onError={() => setFailed(true)}
          style={{
            height: 28,
            width: "auto",
            objectFit: "contain",
            filter: hovered
              ? "grayscale(0) brightness(1) invert(0) opacity(1)"
              : "grayscale(1) brightness(0.8) invert(1) opacity(0.35)",
            transition: "filter 0.4s ease",
          }}
        />
      )}
    </div>
  );
};

const ClientMarquee = () => {
  return (
    <section
      style={{
        background: "#0A2540",
        padding: "40px 0",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: 13,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        Trusted by Industry Leaders
      </p>

      <div
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          overflow: "hidden",
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: 80,
            width: "max-content",
            animation: "marquee 35s linear infinite",
          }}
        >
          {[...clients, ...clients].map((c, i) => (
            <LogoItem key={i} name={c.name} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
