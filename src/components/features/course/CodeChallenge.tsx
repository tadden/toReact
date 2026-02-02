"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { ChallengeData, CheckResult } from "@/data/challenges"; // Adjust path if needed
import styles from "./CodeChallenge.module.scss";
import { CheckCircle, XCircle, RotateCcw, Play } from "lucide-react";

interface CodeChallengeProps {
  data: ChallengeData;
  onComplete?: () => void;
  onCodeChange?: (code: string) => void;
  savedCode?: string;
}

export function CodeChallenge({
  data,
  onComplete,
  onCodeChange,
  savedCode,
}: CodeChallengeProps) {
  // Determine challenge type
  const isJs = data.type === "javascript";
  const defaultTab = isJs ? "javascript" : "html";

  const [code, setCode] = useState(savedCode || data.initialCode);
  const [cssCode, setCssCode] = useState(data.initialCss || "");
  const [activeTab, setActiveTab] = useState<"task" | "checks" | "result">(
    "task",
  );
  const [activeEditorTab, setActiveEditorTab] = useState<
    "html" | "css" | "javascript"
  >(defaultTab);
  const [results, setResults] = useState<CheckResult[] | null>(null);

  // Resizing state
  const [editorWidth, setEditorWidth] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);

  // When switching topic/challenge, reset state
  useEffect(() => {
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(data.initialCode);
    }
    setCssCode(data.initialCss || "");
    setResults(null);
    setActiveTab("task");
    setActiveEditorTab(data.type === "javascript" ? "javascript" : "html");
  }, [data.id, data.initialCode, data.initialCss, data.type, savedCode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const container = document.getElementById(
        `challenge-container-${data.id}`,
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
    const checkResults = data.checks(code, cssCode);
    setResults(checkResults);

    const checkPassed = checkResults.every((r) => r.passed);
    if (checkPassed) {
      // Stay on checks tab to show success, or switch to Result?
      // Maybe switch to Checks to show the green checks?
      setActiveTab("checks");
      if (onComplete) {
        onComplete();
      }
    } else {
      setActiveTab("checks");
    }
  };

  const handleReset = () => {
    setCode(data.initialCode);
    setCssCode(data.initialCss || "");
    setResults(null);
    setActiveTab("task");
    setActiveEditorTab(data.type === "javascript" ? "javascript" : "html");
  };

  const allPassed = results && results.every((r) => r.passed);

  // Combine HTML and CSS for preview
  // If JS, we might want to wrap in script tag?
  // For now, let's assume JS challenges don't need visual preview or just output console?
  // But existing challenges.ts has checks that parse string.
  // We can just embed it.
  const previewDoc = isJs
    ? `
      <!DOCTYPE html>
      <html>
        <body>
          <script>
            try {
              ${code}
            } catch (e) {
              console.error(e);
            }
          </script>
        </body>
      </html>
    `
    : `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${code}
      </body>
    </html>
  `;

  const hasCss = data.initialCss !== undefined && !isJs;

  return (
    <div className={styles.container} id={`challenge-container-${data.id}`}>
      {/* Editor Column */}
      <div
        className={styles.editorSection}
        style={{ width: `${editorWidth}%` }}
      >
        <div className={styles.tabsHeader}>
          <div className={styles.tabList}>
            <button
              className={`${styles.tab} ${
                activeEditorTab === "html" || activeEditorTab === "javascript"
                  ? styles.active
                  : ""
              }`}
              onClick={() => setActiveEditorTab(isJs ? "javascript" : "html")}
              style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
            >
              {isJs ? "JavaScript" : "HTML"}
            </button>
            {hasCss && (
              <button
                className={`${styles.tab} ${
                  activeEditorTab === "css" ? styles.active : ""
                }`}
                onClick={() => setActiveEditorTab("css")}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                CSS
              </button>
            )}
          </div>
        </div>

        <div className={styles.editorWrapper}>
          <Editor
            height="100%"
            defaultLanguage={isJs ? "javascript" : "html"} // simplified
            language={
              activeEditorTab === "css" ? "css" : isJs ? "javascript" : "html"
            }
            value={activeEditorTab === "css" ? cssCode : code}
            theme="vs-dark"
            onChange={(value) => {
              if (activeEditorTab === "css") {
                setCssCode(value || "");
              } else {
                const newCode = value || "";
                setCode(newCode);
                if (onCodeChange) {
                  onCodeChange(newCode);
                }
              }
            }}
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
        <div className={`${styles.tabs} ${styles.tabsHeader}`}>
          <div className={styles.tabList}>
            <button
              className={`${styles.tab} ${
                activeTab === "task" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("task")}
            >
              Задание
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "checks" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("checks")}
            >
              Критерии
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
          {allPassed && <div className={styles.successLabel}>Done</div>}
        </div>

        <div className={styles.content}>
          {activeTab === "task" && (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          )}

          {activeTab === "checks" && (
            <div className={styles.sectionsWrapper}>
              <h3 className={styles.subHeader}>Результаты проверки:</h3>
              {allPassed && (
                <div className={styles.successBox}>
                  <CheckCircle size={20} />
                  <span>Отлично! Задание выполнено.</span>
                </div>
              )}

              {(results || data.checks(data.initialCode, data.initialCss)).map(
                (check) => (
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
                    <div className={styles.checkIconWrapper}>
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
                      className={`${styles.checkLabel} ${
                        results
                          ? check.passed
                            ? styles.passed
                            : styles.failed
                          : ""
                      }`}
                    >
                      {check.label}
                    </span>
                  </div>
                ),
              )}
            </div>
          )}

          {activeTab === "result" && (
            <div className={styles.browserContainer}>
              <iframe
                className={styles.browserFrame}
                srcDoc={previewDoc}
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
