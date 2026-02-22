import sanabilLogo from "@/assets/sanabil-logo.png";

interface LogoProps {
  iconSize?: number;
  showText?: boolean;
  className?: string;
}

const Logo = ({ iconSize = 44, showText = true, className = "" }: LogoProps) => {
  return (
    <div
      className={`flex items-center gap-2.5 group cursor-pointer transition-all duration-300 ${className}`}
      style={{ filter: "drop-shadow(0 0 8px rgba(229, 168, 33, 0.3))" }}
    >
      <img
        src={sanabilLogo}
        alt="Sanabil"
        style={{
          height: iconSize,
          width: "auto",
          filter: "brightness(1.2) drop-shadow(0 0 8px rgba(229, 168, 33, 0.5))",
        }}
        className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,168,33,0.4)]"
      />
      {showText && (
        <span className="font-display text-xl tracking-[0.02em] hidden md:inline-flex gap-1.5">
          <span className="font-bold text-white">Sanabil</span>
          <span className="font-medium text-accent">Technologies</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
