"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
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
  const commentId = useId();
  const commentRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const field = commentRef.current;
    if (!field || !isOpen) return;
    field.style.height = "auto";
    field.style.height = `${Math.min(field.scrollHeight + 2, 480)}px`;
  }, [comment, isOpen]);

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

          {module.homework?.description && (
            <div className={styles.section}>
              <label>Текст Домашнего Задания</label>
              <details className={styles.homeworkDetails}>
                <summary>Открыть задание</summary>
                <div
                  className={styles.homeworkContent}
                  dangerouslySetInnerHTML={{
                    __html: module.homework.description,
                  }}
                />
              </details>
            </div>
          )}

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

          <div className={styles.commentSection}>
            <label htmlFor={commentId}>Комментарий ментора</label>
            <p id={`${commentId}-hint`} className={styles.commentHint}>
              Отметьте, что получилось, и перечислите необходимые исправления.
              Разделяйте мысли абзацами — так студенту будет проще прочитать отзыв.
            </p>
            <textarea
              id={commentId}
              ref={commentRef}
              aria-describedby={`${commentId}-hint`}
              className={styles.textarea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={"Что получилось хорошо…\n\nЧто нужно исправить:\n1. …\n2. …"}
            />
            <div className={styles.commentFooter}>
              <span>Студент увидит отзыв после принятия или возврата работы.</span>
              <span>{comment.length.toLocaleString("ru-RU")} симв.</span>
            </div>
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
