"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Circle, Check, Square, CheckSquare } from "lucide-react";
import { QuizData } from "@/data/quizzes";
import styles from "./Quiz.module.scss";

export interface QuizResult {
  selectedOption: number | number[];
  isCorrect: boolean;
}

export function Quiz({
  data,
  userId,
  initialState,
  onSave,
}: {
  data: QuizData;
  userId: string;
  initialState?: QuizResult;
  onSave?: (result: QuizResult) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<
    number | number[] | null
  >(initialState?.selectedOption ?? null);
  const [isSubmitted, setIsSubmitted] = useState(!!initialState);
  const [isCorrect, setIsCorrect] = useState(initialState?.isCorrect ?? false);

  const isMultipleChoice = Array.isArray(data.correctAnswer);

  // Sync state with prop (handle async data loading)
  useEffect(() => {
    if (initialState) {
      setSelectedOption(initialState.selectedOption);
      setIsSubmitted(true);
      setIsCorrect(initialState.isCorrect);
    }
  }, [initialState]);

  // Reset state when data.id changes (fixing component reuse issue)
  useEffect(() => {
    if (!initialState) {
      setSelectedOption(null);
      setIsSubmitted(false);
      setIsCorrect(false);
    }
  }, [data.id, initialState]);

  const handleOptionClick = (index: number) => {
    if (isSubmitted) return;

    if (isMultipleChoice) {
      const currentSelection = (selectedOption as number[]) || [];
      const newSelection = currentSelection.includes(index)
        ? currentSelection.filter((i) => i !== index)
        : [...currentSelection, index];
      setSelectedOption(newSelection);
    } else {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    let correct = false;

    if (isMultipleChoice) {
      const userSelection = Array.isArray(selectedOption)
        ? (selectedOption as number[]).sort((a, b) => a - b)
        : [];
      const correctAnswers = (data.correctAnswer as number[]).sort(
        (a, b) => a - b,
      );

      correct =
        userSelection.length === correctAnswers.length &&
        userSelection.every((val, index) => val === correctAnswers[index]);
    } else {
      correct = selectedOption === data.correctAnswer;
    }

    setIsSubmitted(true);
    setIsCorrect(correct);

    const result = { selectedOption, isCorrect: correct };

    if (userId) {
      if (onSave) {
        onSave(result);
      }
    }
  };

  // Check if option is selected
  const isSelected = (index: number) => {
    if (isMultipleChoice) {
      return Array.isArray(selectedOption) && selectedOption.includes(index);
    }
    return selectedOption === index;
  };

  // Check if option is correct (for display after submit)
  const isOptionCorrect = (index: number) => {
    if (isMultipleChoice) {
      return (data.correctAnswer as number[]).includes(index);
    }
    return data.correctAnswer === index;
  };

  return (
    <div className={styles.quizContainer}>
      <h3 dangerouslySetInnerHTML={{ __html: data.question }} />

      <div className={styles.optionsList}>
        {data.options.map((option, index) => {
          const selected = isSelected(index);
          const correct = isOptionCorrect(index);

          let optionClassName = styles.optionLabel;
          if (isSubmitted) {
            optionClassName += ` ${styles.readOnly}`;
            if (correct) {
              optionClassName += ` ${styles.correct}`;
            } else if (selected && !correct) {
              optionClassName += ` ${styles.wrong}`;
            }
          } else if (selected) {
            optionClassName += ` ${styles.selected}`;
          }

          return (
            <label key={index} className={optionClassName}>
              <input
                type={isMultipleChoice ? "checkbox" : "radio"}
                name={`quiz-${data.id}`}
                value={index}
                checked={selected}
                onChange={() => handleOptionClick(index)}
                disabled={isSubmitted}
              />
              <div className={styles.icon}>
                {isMultipleChoice ? (
                  selected ? (
                    isSubmitted && correct ? (
                      <CheckSquare color="#22c55e" size={24} />
                    ) : isSubmitted && !correct ? (
                      <Square color="#ef4444" size={24} />
                    ) : (
                      <CheckSquare color="var(--color-primary)" size={24} />
                    )
                  ) : isSubmitted && correct ? (
                    <CheckSquare color="#22c55e" size={24} />
                  ) : (
                    <Square color="var(--color-text-dim)" size={24} />
                  )
                ) : // Single choice logic preserved
                isSubmitted ? (
                  correct ? (
                    <CheckCircle color="#22c55e" size={24} />
                  ) : selected ? (
                    <Circle color="#ef4444" size={24} />
                  ) : (
                    <Circle color="#94a3b8" size={24} />
                  )
                ) : selected ? (
                  <CheckCircle color="var(--color-primary)" size={24} />
                ) : (
                  <Circle color="var(--color-text-dim)" size={24} />
                )}
              </div>
              <span>{option}</span>
            </label>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          className={styles.checkBtn}
          onClick={handleSubmit}
          disabled={
            selectedOption === null ||
            (Array.isArray(selectedOption) && selectedOption.length === 0)
          }
        >
          Проверить ответ
        </button>
      ) : (
        <div className={styles.feedback}>
          {isCorrect ? (
            <div className={styles.success}>
              <CheckCircle /> {data.successMessage || "Правильно!"}
            </div>
          ) : (
            <div className={styles.error}>
              Неправильно. Попробуй еще раз!
              <button
                className={styles.retryBtn}
                onClick={() => {
                  setIsSubmitted(false);
                  setIsCorrect(false);
                  setSelectedOption(null);
                }}
              >
                Попробовать снова
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
