import { Link } from "react-router-dom";

interface ServinixLogoProps {
  className?: string;
  light?: boolean;
}

const ServinixLogo = ({ className = "", light = false }: ServinixLogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
        <span className="text-lg font-black text-primary-foreground tracking-tight">X</span>
      </div>
      <span className={`font-heading text-xl font-bold ${light ? "text-white" : "text-foreground"}`}>
        Servini<span className="text-primary font-black">X</span>
      </span>
    </Link>
  );
};

export default ServinixLogo;
