"use client";

import { Rocket } from "lucide-react";
import styles from "./Logo.module.scss";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <div className={`${styles.logo} ${styles[size]} ${className}`}>
      <div className={styles.rocketWrapper}>
        <Rocket className={styles.rocket} />
        {/* Glow effect backing */}
        <div className={styles.glow} />
      </div>
      <span className={styles.text}>
        To <span className={styles.accent}>React</span>
      </span>
    </div>
  );
}
