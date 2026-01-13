"use client";

import { useState } from "react";
import { Module, User } from "@/types";
import styles from "./HomeworkReviewModal.module.scss";

interface HomeworkReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: User;
  module: Module;
  courseId: string;
  submissionLink?: string;
  studentNotes?: string;
  onApprove: (comment: string) => void;
  onReject: (comment: string) => void;
}

export function HomeworkReviewModal({
  isOpen,
  onClose,
  student,
  module,
  courseId,
  submissionLink,
  studentNotes,
  onApprove,
  onReject,
}: HomeworkReviewModalProps) {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Проверка Домашнего Задания</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <label>Студент</label>
            <div>
              {student.name} ({student.email})
            </div>
          </div>

          <div className={styles.section}>
            <label>Модуль</label>
            <div>{module.title}</div>
          </div>

          <div className={styles.section}>
            <label>Ссылка на Решение</label>
            {submissionLink ? (
              <a
                href={
                  submissionLink.startsWith("http")
                    ? submissionLink
                    : `https://${submissionLink}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {submissionLink}
              </a>
            ) : (
              <span style={{ color: "#ef4444" }}>Ссылка отсутствует</span>
            )}
          </div>

          <div className={styles.section}>
            <label>Комментарий Студента</label>
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "0.75rem",
                borderRadius: "4px",
                color: studentNotes ? "#d4d4d8" : "#71717a",
                fontStyle: studentNotes ? "normal" : "italic",
              }}
            >
              {studentNotes || "Студент не оставил комментариев"}
            </div>
          </div>

          <div className={styles.section}>
            <label>Комментарий Ментора</label>
            <textarea
              className={styles.textarea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Напишите отзыв студенту..."
            />
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelButton} onClick={onClose}>
              Отмена
            </button>
            <button
              className={styles.rejectButton}
              onClick={() => {
                onReject(comment);
                setComment("");
              }}
            >
              Вернуть на Доработку
            </button>
            <button
              className={styles.approveButton}
              onClick={() => {
                onApprove(comment);
                setComment("");
              }}
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
