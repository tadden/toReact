"use client";

import styles from "./SpaceBackground.module.scss";

export function SpaceBackground({
  showPlanets = false,
}: {
  showPlanets?: boolean;
}) {
  return (
    <div className={styles.space}>
      <div className={styles.starsSmall}></div>
      <div className={styles.starsMedium}></div>
      <div className={styles.starsLarge}></div>
      {showPlanets && (
        <div className={styles.planetsContainer}>
          <div className={`${styles.planet} ${styles.planetOne}`}></div>
          <div className={`${styles.planet} ${styles.planetTwo}`}></div>
          <div className={`${styles.planet} ${styles.planetThree}`}></div>
        </div>
      )}
    </div>
  );
}
