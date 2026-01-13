"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { ChallengeData, CheckResult } from "@/data/challenges"; // Adjust path if needed
import styles from "./CodeChallenge.module.scss";
import { CheckCircle, XCircle, RotateCcw, Play } from "lucide-react";

interface CodeChallengeProps {
  data: ChallengeData;
  onComplete?: () => void;
}

export function CodeChallenge({ data, onComplete }: CodeChallengeProps) {
  const [code, setCode] = useState(data.initialCode);
  const [activeTab, setActiveTab] = useState<"task" | "result">("task");
  const [results, setResults] = useState<CheckResult[] | null>(null);
  // Add a state to trigger refresh of iframe if needed, or just depend on code.
  // We want to update iframe content when code changes?
  // Probably better to only update on check or debounce?
  // User said "after student complete" but seeing result is nice.
  // As per screenshot "Result" tab is active. Let's render `code` directly.

  // Resizing state
  const [editorWidth, setEditorWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);

  // When switching topic/challenge, reset state
  useEffect(() => {
    setCode(data.initialCode);
    setResults(null);
    setActiveTab("task");
  }, [data.id, data.initialCode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const container = document.getElementById(
        `challenge-container-${data.id}`
      );
      if (container) {
        const rect = container.getBoundingClientRect();
        const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
        // Clamp between 20% and 80%
        if (newWidth >= 20 && newWidth <= 80) {
          setEditorWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "";
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging, data.id]);

  const handleCheck = () => {
    const checkResults = data.checks(code);
    setResults(checkResults);

    const checkPassed = checkResults.every((r) => r.passed);
    if (checkPassed) {
      setActiveTab("result");
      if (onComplete) {
        onComplete();
      }
    } else {
      setActiveTab("task");
    }
  };

  const handleReset = () => {
    setCode(data.initialCode);
    setResults(null);
    setActiveTab("task");
  };

  const allPassed = results && results.every((r) => r.passed);

  return (
    <div className={styles.container} id={`challenge-container-${data.id}`}>
      {/* Editor Column */}
      <div
        className={styles.editorSection}
        style={{ width: `${editorWidth}%` }}
      >
        <div className={styles.editorHeader}>Editor html:</div>
        <div
          className={styles.editorWrapper}
          style={{ flex: 1, overflow: "hidden" }}
        >
          <Editor
            height="100%"
            defaultLanguage="html"
            value={code}
            theme="vs-dark"
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              automaticLayout: true,
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              fixedOverflowWidgets: true,
            }}
          />
        </div>
      </div>

      {/* Resizer Handle */}
      <div
        className={`${styles.resizer} ${isDragging ? styles.active : ""}`}
        onMouseDown={() => setIsDragging(true)}
      />

      {/* Info/Result Column */}
      <div className={styles.infoSection} style={{ flex: 1 }}>
        <div
          className={styles.tabs}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div style={{ display: "flex" }}>
            <button
              className={`${styles.tab} ${
                activeTab === "task" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("task")}
            >
              Задание и тесты
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "result" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("result")}
            >
              Результат
            </button>
          </div>
          {allPassed && (
            <div
              style={{
                color: "#16a34a",
                fontWeight: "bold",
                paddingRight: "1rem",
                fontSize: "0.9rem",
              }}
            >
              Done
            </div>
          )}
        </div>

        <div className={styles.content}>
          {activeTab === "task" ? (
            <>
              <div dangerouslySetInnerHTML={{ __html: data.description }} />

              <h3
                style={{
                  marginTop: "2rem",
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  color: "#64748b",
                  fontWeight: 600,
                }}
              >
                Критерии выполнения:
              </h3>

              <div style={{ marginTop: "1rem" }}>
                <h3
                  style={{
                    marginTop: "2rem",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    color: "#64748b",
                    fontWeight: 600,
                  }}
                >
                  Результаты проверки:
                </h3>
                {allPassed && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      color: "#16a34a",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      padding: "0.5rem",
                      background: "rgba(34, 197, 94, 0.1)",
                      borderRadius: "4px",
                    }}
                  >
                    <CheckCircle size={20} />
                    <span>Отлично! Задание выполнено.</span>
                  </div>
                )}

                {(results || data.checks(data.initialCode)).map((check) => (
                  <div
                    key={check.id}
                    className={`${styles.checkItem} ${
                      // If results exist, show pass/fail style
                      results
                        ? check.passed
                          ? styles.passed
                          : styles.failed
                        : ""
                    }`}
                  >
                    <div style={{ marginTop: "0.2rem", width: "16px" }}>
                      {results ? (
                        check.passed ? (
                          <CheckCircle size={16} color="#22c55e" />
                        ) : (
                          <XCircle size={16} color="#ef4444" />
                        )
                      ) : (
                        "•"
                      )}
                    </div>
                    <span
                      style={{
                        color: results
                          ? check.passed
                            ? "#15803d"
                            : "#b91c1c"
                          : "#475569",
                      }}
                    >
                      {check.label}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.browserContainer}>
              <iframe
                className={styles.browserFrame}
                srcDoc={code}
                title="Preview"
                sandbox="allow-scripts"
              />
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.resetBtn} onClick={handleReset}>
            <RotateCcw
              size={16}
              style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
            />
            Сбросить
          </button>
          <button className={styles.checkBtn} onClick={handleCheck}>
            Проверить
          </button>
        </div>
      </div>
    </div>
  );
}
