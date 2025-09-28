import { cn } from "@/lib/utils";
import feraLogo from "@/assets/fera-tech-logo.png";

interface BrandLogoProps {
  variant?: "mark" | "lockup";
  className?: string;
  glowStrength?: "normal" | "strong";
}

export function BrandLogo({ 
  variant = "mark", 
  className,
  glowStrength = "normal"
}: BrandLogoProps) {
  const glowClass = glowStrength === "strong" ? "brand-glow-strong" : "brand-glow";
  
  if (variant === "lockup") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <img 
          src={feraLogo} 
          alt="Fera Tech" 
          className={cn("h-8 w-8", glowClass)}
        />
        <span className="text-lg font-semibold text-foreground">
          Fera Tech
        </span>
      </div>
    );
  }

  return (
    <img 
      src={feraLogo} 
      alt="Fera Tech" 
      className={cn("h-8 w-8", glowClass, className)}
    />
  );
}