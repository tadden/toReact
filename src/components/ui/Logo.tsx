"use client";

import { Rocket } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  // Size mapping
  const sizeMap = {
    sm: { icon: 20, text: "1.2rem" },
    md: { icon: 28, text: "1.5rem" },
    lg: { icon: 40, text: "2.5rem" },
    xl: { icon: 60, text: "4rem" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontFamily: "var(--font-inter, sans-serif)",
        fontWeight: 800,
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Rocket
          size={icon}
          color="var(--color-accent)"
          fill="rgba(255, 197, 47, 0.2)"
          style={{
            transform: "rotate(-45deg)",
            filter: "drop-shadow(0 0 8px var(--color-accent))",
          }}
        />
        {/* Glow effect backing */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "var(--color-accent)",
            filter: "blur(15px)",
            opacity: 0.2,
            zIndex: -1,
          }}
        />
      </div>
      <span
        style={{
          fontSize: text,
          color: "var(--color-text-main)",
          letterSpacing: "-0.5px",
        }}
      >
        To<span style={{ color: "var(--color-primary)" }}>React</span>
      </span>
    </div>
  );
}
