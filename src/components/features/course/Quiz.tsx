"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Circle, Check } from "lucide-react";
import { QuizData } from "@/data/quizzes";

export interface QuizResult {
  selectedOption: number;
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
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialState?.selectedOption ?? null
  );
  const [isSubmitted, setIsSubmitted] = useState(!!initialState);
  const [isCorrect, setIsCorrect] = useState(initialState?.isCorrect ?? false);

  // Sync state with prop (handle async data loading)
  useEffect(() => {
    if (initialState) {
      setSelectedOption(initialState.selectedOption);
      setIsSubmitted(true);
      setIsCorrect(initialState.isCorrect);
    } else {
      // If db cleared or no data, ensure we reset locally if we strictly follow DB
      // But typically default state is enough.
      // User requested "if i reset database ... result ... should be reseted"
      // So if initialState becomes undefined (and we are sure it's not just loading latency?), we should reset.
      // However, detecting "loading" vs "empty" is hard here without a loading prop.
      // For now, let's assume if we receive undefined, we don't force reset unless we want to be very reactive.
      // Actually, if I reload, initialState is undefined, then undefined (still empty).
      // If I worked, it became defined.
      // If I reset DB, on reload -> undefined. State stays null. Correct.
      // If I'm already on the page and reset DB? We won't know unless we poll.
      // But for RELOAD case, we just rely on mount state.
      // WAIT, if I am navigating between topics, Quiz component might be remounted or reused?
      // key={index} in ModuleContent uses index. If topics change, keys change?
      // content.split gives array. index logic is stable for same content.
      // If I switch topic, content changes, keys match index, but `Quiz` data prop changes?
      // If `Quiz` is reused (same key, different data), we MUST reset state.
      // So checking `data.id` in `useEffect` or `key` logic is important.
      // ModuleContent uses `key={index}`.
      // If Topic A has [Quiz 1] at index 1.
      // Topic B has [Quiz 2] at index 1.
      // Check component reuse: React might reuse component if key is same.
      // So we need to reset state if `data.id` changes.
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

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === data.correctAnswer;

    setIsSubmitted(true);
    setIsCorrect(correct);

    const result = { selectedOption, isCorrect: correct };

    if (userId) {
      // Save to DB via prop
      if (onSave) {
        onSave(result);
      }
    }
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setIsCorrect(false);
    setSelectedOption(null);
    // We don't delete from DB on retry usually, or do we?
    // User just wants to retry locally?
    // If they retry and leave, old result persists?
    // If we want to clear DB on retry:
    // if (onSave) onSave(null?) - interface expects result.
    // Let's assume retry is local. Next valid submit overwrites.
  };

  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        padding: "2rem",
        background: "var(--color-bg-card)",
        maxWidth: "600px",
        margin: "2rem auto",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3
        style={{
          marginBottom: "1.5rem",
          fontSize: "1.1rem",
          fontWeight: "500",
          color: "var(--color-text-main)",
        }}
      >
        {data.question}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {data.options.map((option, index) => (
          <label
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
              border: `2px solid ${
                isSubmitted
                  ? index === data.correctAnswer
                    ? "#22c55e" // Green for correct
                    : index === selectedOption
                    ? "#ef4444" // Red for wrong selected
                    : "var(--color-border)"
                  : selectedOption === index
                  ? "var(--color-primary)"
                  : "var(--color-border)"
              }`,
              borderRadius: "12px",
              cursor: isSubmitted ? "default" : "pointer",
              transition: "all 0.2s",
              background:
                isSubmitted && index === data.correctAnswer
                  ? "rgba(34, 197, 94, 0.1)"
                  : "transparent",
            }}
          >
            <input
              type="radio"
              name={`quiz-${data.id}`}
              value={index}
              checked={selectedOption === index}
              onChange={() => !isSubmitted && setSelectedOption(index)}
              disabled={isSubmitted}
              style={{ display: "none" }}
            />
            {isSubmitted ? (
              index === data.correctAnswer ? (
                <CheckCircle color="#22c55e" size={24} />
              ) : index === selectedOption ? (
                <Circle color="#ef4444" size={24} />
              ) : (
                <Circle color="#94a3b8" size={24} />
              )
            ) : selectedOption === index ? (
              <CheckCircle color="var(--color-primary)" size={24} />
            ) : (
              <Circle color="var(--color-text-dim)" size={24} />
            )}
            <span
              style={{
                fontSize: "1rem",
                color: "var(--color-text-main)",
              }}
            >
              {option}
            </span>
          </label>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
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
            cursor: selectedOption === null ? "not-allowed" : "pointer",
            opacity: selectedOption === null ? 0.5 : 1,
            transition: "all 0.2s",
          }}
        >
          Проверить ответ
        </button>
      ) : (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            borderRadius: "12px",
            background: isCorrect
              ? "rgba(34, 197, 94, 0.1)"
              : "rgba(239, 68, 68, 0.1)",
            border: `1px solid ${isCorrect ? "#22c55e" : "#ef4444"}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {isCorrect ? (
              <CheckCircle color="#22c55e" size={24} />
            ) : (
              <Circle color="#ef4444" size={24} />
            )}
            <h4
              style={{
                fontSize: "1.1rem",
                color: isCorrect ? "#22c55e" : "#ef4444",
                margin: 0,
              }}
            >
              {isCorrect ? "Правильно!" : "Неправильно"}
            </h4>
          </div>
          <p
            style={{
              marginTop: "0.5rem",
              color: "var(--color-text-main)",
              fontSize: "1rem",
            }}
          >
            {isCorrect
              ? data.successMessage || "Отличная работа!"
              : "Попробуй еще раз, чтобы найти правильный ответ."}
          </p>
          {!isCorrect && (
            <button
              onClick={handleRetry}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                background: "transparent",
                border: "1px solid var(--color-text-dim)",
                borderRadius: "8px",
                color: "var(--color-text-main)",
                cursor: "pointer",
              }}
            >
              Попробовать снова
            </button>
          )}
        </div>
      )}
    </div>
  );
}
