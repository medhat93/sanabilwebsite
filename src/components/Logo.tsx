import sanabilIcon from "@/assets/sanabil-icon.png";

interface LogoProps {
  iconSize?: number;
  showText?: boolean;
  textSize?: "default" | "small";
  className?: string;
}

const Logo = ({ iconSize = 96, showText = true, textSize = "default", className = "" }: LogoProps) => {
  const isSmall = textSize === "small";

  return (
    <div
      className={`flex items-center gap-0.5 group cursor-pointer transition-all duration-300 ${className}`}
    >
      <img
        src={sanabilIcon}
        alt="Sanabil"
        style={{
          height: iconSize,
          width: "auto",
          mixBlendMode: "screen",
          filter: "brightness(1.1) saturate(1.2) drop-shadow(0 0 8px rgba(229, 168, 33, 0.5))",
        }}
        className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,168,33,0.35)]"
      />
      {showText && (
        <div className="hidden md:flex flex-col leading-none">
          <span
            className="font-display font-bold text-primary-foreground"
            style={{ fontSize: isSmall ? 20 : 24, letterSpacing: "0.02em" }}
          >
            Sanabil
          </span>
          <span
            className="font-display font-medium text-accent uppercase"
            style={{ fontSize: isSmall ? 13 : 15, letterSpacing: "0.08em", marginTop: 3 }}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
