"use client";

import { useTheme } from "@/lib/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text-main)",
        padding: "0.5rem",
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        backdropFilter: "blur(4px)",
      }}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
