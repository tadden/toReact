"use client";

import styles from "./CongratulationModal.module.scss";

interface CongratulationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export function CongratulationModal({
  isOpen,
  onConfirm,
  title = "Поздравляем! 🎉",
  message = "Вы успешно завершили этот модуль! 🚀 Давайте двигаться дальше к новым знаниям!",
  buttonText = "Продолжить обучение",
}: CongratulationModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.rocketContainer}>🚀</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <button className={styles.button} onClick={onConfirm}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
