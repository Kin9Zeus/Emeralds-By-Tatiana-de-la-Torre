"use client";

interface GoldDividerProps {
  className?: string;
  variant?: "full" | "center" | "diamond";
  maxWidth?: string;
}

export default function GoldDivider({
  className = "",
  variant = "center",
  maxWidth = "max-w-md",
}: GoldDividerProps) {
  if (variant === "diamond") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <div
          className={`flex-1 ${maxWidth} h-px bg-gradient-to-r from-transparent via-gold/50 to-gold/20`}
        />
        <div className="w-2 h-2 rotate-45 bg-gold/60 shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
        <div
          className={`flex-1 ${maxWidth} h-px bg-gradient-to-l from-transparent via-gold/50 to-gold/20`}
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div
        className={`w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent ${className}`}
      />
    );
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className={`${maxWidth} w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent`}
      />
    </div>
  );
}
