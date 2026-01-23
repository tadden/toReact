"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Circle, Check, Square, CheckSquare } from "lucide-react";
import { QuizData } from "@/data/quizzes";

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
        (a, b) => a - b
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
    <div
      style={{
        background: "var(--color-bg-secondary)", // #1e293b
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: "1px solid var(--color-border)",
        maxWidth: "800px",
        margin: "2rem auto",
      }}
    >
      <h3
        style={{ marginBottom: "1.5rem", fontWeight: 600, fontSize: "1.1rem" }}
        dangerouslySetInnerHTML={{ __html: data.question }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {data.options.map((option, index) => {
          const selected = isSelected(index);
          const correct = isOptionCorrect(index);

          let borderColor = "var(--color-border)";
          let bgColor = "transparent";

          if (isSubmitted) {
            if (correct) {
              borderColor = "#22c55e"; // Green
              bgColor = "rgba(34, 197, 94, 0.1)";
            } else if (selected && !correct) {
              borderColor = "#ef4444"; // Red
            }
          } else if (selected) {
            borderColor = "var(--color-primary)";
          }

          return (
            <label
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                border: `2px solid ${borderColor}`,
                borderRadius: "12px",
                cursor: isSubmitted ? "default" : "pointer",
                transition: "all 0.2s",
                background: bgColor,
              }}
            >
              <input
                type={isMultipleChoice ? "checkbox" : "radio"}
                name={`quiz-${data.id}`}
                value={index}
                checked={selected}
                onChange={() => handleOptionClick(index)}
                disabled={isSubmitted}
                style={{ display: "none" }}
              />
              <div style={{ flexShrink: 0 }}>
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
              <span
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-main)",
                }}
              >
                {option}
              </span>
            </label>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={
            selectedOption === null ||
            (Array.isArray(selectedOption) && selectedOption.length === 0)
          }
          style={{
            marginTop: "2rem",
            width: "100%",
            padding: "1rem",
            borderRadius: "12px",
            background: "var(--color-accent)",
            color: "var(--color-accent-text)",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor:
              selectedOption === null ||
              (Array.isArray(selectedOption) && selectedOption.length === 0)
                ? "not-allowed"
                : "pointer",
            opacity:
              selectedOption === null ||
              (Array.isArray(selectedOption) && selectedOption.length === 0)
                ? 0.5
                : 1,
            transition: "all 0.2s",
          }}
        >
          Проверить ответ
        </button>
      ) : (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {isCorrect ? (
            <div
              style={{
                color: "#22c55e",
                fontWeight: "bold",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle /> {data.successMessage || "Правильно!"}
            </div>
          ) : (
            <div
              style={{
                color: "#ef4444",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Неправильно. Попробуй еще раз!
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setIsCorrect(false);
                  setSelectedOption(null);
                }}
                style={{
                  display: "block",
                  margin: "1rem auto 0",
                  background: "transparent",
                  border: "1px solid #ef4444",
                  color: "#ef4444",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  cursor: "pointer",
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
