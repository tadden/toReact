import React, { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import styles from "./RocketNavigation.module.scss";

interface RocketNavigationProps {
  steps: { title: string; id: number }[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

export const RocketNavigation: React.FC<RocketNavigationProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  const [rocketPosition, setRocketPosition] = useState(0);

  useEffect(() => {
    // Calculate position for smooth rocket movement
    // 50px is height of one step item
    setRocketPosition(currentStep * 50);
  }, [currentStep]);

  return (
    <div className={styles.rocketNavContainer}>
      {/* Timeline Line */}
      <div className={styles.timelineLine} />

      {/* The Rocket ship traveling down/up */}
      <div className={styles.rocketIcon} style={{ top: `${rocketPosition}px` }}>
        <Rocket size={18} fill="currentColor" />
      </div>

      {steps.map((step, index) => {
        // Step is available if it's less than or equal to currentStep
        // But logic says: "add navigation only after student pressed next".
        // Use 'currentStep' (visiblePageIndex) to determine visibility.
        // If index <= currentStep, it means it's revealed.
        const isRevealed = index <= currentStep;
        const isActive = index === currentStep;

        return (
          <div
            key={step.id}
            className={`${styles.navItem} ${isActive ? styles.active : ""} ${
              !isRevealed ? styles.disabled : styles.completed
            }`}
            onClick={() => isRevealed && onStepClick(index)}
          >
            <div className={styles.navDot} />
            <span className={styles.navText}>
              {isRevealed ? step.title : "Locked"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
