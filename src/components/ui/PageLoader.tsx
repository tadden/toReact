"use client";

import { useEffect, useState } from "react";
import styles from "./PageLoader.module.scss";
import { Rocket } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Animation duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.rocketWrapper}>
        <Rocket size={64} className={styles.rocket} />
        <div className={styles.exhaust}></div>
      </div>
    </div>
  );
}
