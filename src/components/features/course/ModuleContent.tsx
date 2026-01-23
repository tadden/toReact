"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Course, Module } from "@/types";
import { useProgress } from "@/lib/context/ProgressContext";
import { useAuth } from "@/lib/context/AuthContext";
import styles from "./Course.module.scss";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  FileText,
  Youtube,
  Code,
  AlertTriangle,
  PenTool,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface ModuleContentProps {
  course: Course;
  module: Module;
  nextModuleSlug?: string;
}

type TabView = "theory" | "materials" | "homework";

import { CongratulationModal } from "./CongratulationModal";
import { Quiz } from "./Quiz";
import { quizzes } from "@/data/quizzes";
import { CodeChallenge } from "./CodeChallenge";
import { challenges } from "@/data/challenges";

// Helper to extract first header or provide fallback based on content type
const getTitleFromContent = (
  html: string,
  index: number,
  type?: "QUIZ" | "CHALLENGE" | "NEXT",
) => {
  const match = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/);
  if (match) {
    // Strip tags and decode entities
    return match[1]
      .replace(/<[^>]*>/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"');
  }

  if (type === "QUIZ") return "Тест";
  if (type === "CHALLENGE") return "Задача";

  return `Раздел ${index + 1}`;
};

import { useCourseView } from "@/lib/context/CourseViewContext";

export function ModuleContent({
  course,
  module,
  nextModuleSlug,
}: ModuleContentProps) {
  const {
    updateProgress,
    getModuleProgress,
    markTopicCompleted,
    submitHomework,
    saveQuizResult,
    saveTopicState,
  } = useProgress();
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { activeTopicId, setActiveTopic } = useCourseView();

  const [showCongratulationModal, setShowCongratulationModal] = useState(false);

  // We still use searchParams for 'view' tab, as that's less frequent/critical
  const activeTab = (searchParams.get("view") as TabView) || "theory";

  // Use context for topic ID (instant switching)
  // Fallback to URL if context is null (init) - though context init handles it
  const currentTopicId = activeTopicId || searchParams.get("topic");

  // Topics are now directly on the module
  const allTopics = module.topics || [];

  const progress = getModuleProgress(course.id, module.id);

  const [notes, setNotes] = useState(progress?.notes || "");
  const [homeworkLink, setHomeworkLink] = useState(progress?.homeworkUrl || "");

  // Default to first topic if in theory mode and no topic selected
  const currentTopic = currentTopicId
    ? allTopics.find((t) => t.id === currentTopicId)
    : allTopics[0];

  // Parse content into pages
  const pages = useMemo(() => {
    if (!currentTopic?.content) return [];

    const parts = currentTopic.content.split(
      /\[(QUIZ|CHALLENGE|NEXT)(?:: (.+?))?\]/g,
    );
    const result: {
      text: string;
      title: string;
      quizId?: string;
      challengeId?: string;
      isNext?: boolean;
    }[] = [];

    let sectionIndex = 0;
    for (let i = 0; i < parts.length; i += 3) {
      const text = parts[i];
      const type = parts[i + 1] as "QUIZ" | "CHALLENGE" | "NEXT" | undefined;
      const id = parts[i + 2];

      if (text.trim() || id || type === "NEXT") {
        if (type === "NEXT" && !text.trim()) {
          if (result.length > 0) {
            result[result.length - 1].isNext = true;
          }
          continue;
        }

        result.push({
          text: text,
          title: getTitleFromContent(text, sectionIndex, type),
          quizId: type === "QUIZ" ? id : undefined,
          challengeId: type === "CHALLENGE" ? id : undefined,
          isNext: type === "NEXT",
        });
        sectionIndex++;
      }
    }
    return result;
  }, [currentTopic?.content]);

  const [visiblePageIndex, setVisiblePageIndex] = useState(0);

  useEffect(() => {
    if (!currentTopic) return;

    // IF TOPIC COMPLETED: Show all content immediately
    if (progress?.completedTopics?.includes(currentTopic.id)) {
      setVisiblePageIndex(pages.length);
      return;
    }

    // Restore saved state if available
    if (progress?.topicStates?.[currentTopic.id] !== undefined) {
      setVisiblePageIndex(progress.topicStates[currentTopic.id]);
    } else {
      setVisiblePageIndex(0);
    }
  }, [
    currentTopic?.id,
    progress?.topicStates,
    progress?.completedTopics,
    pages.length,
  ]);

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentTopic?.id]);

  // Check if topic is completed to unlock all navigation
  const isTopicCompleted = progress?.completedTopics?.includes(
    currentTopic?.id || "",
  );

  const handleNavClick = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (progress?.status === "locked") return;
    if (progress?.status !== "completed") {
      updateProgress(course.id, module.id, { status: "in-progress" });
    }
  }, []);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === "theory" && currentTopic && contentRef.current) {
      const preElements = contentRef.current.querySelectorAll("pre");
      preElements.forEach((pre) => {
        // Check if button already exists
        if (pre.querySelector(".copy-button")) return;

        const button = document.createElement("button");
        button.className = styles["copy-button"] || "copy-button";
        // Actually, since I defined .copy-button nested in .theoryContent in SCSS module,
        // it might be hashed if I don't use :global.
        // However, standard SCSS modules won't hash nested classes if they are just used as selectors?
        // No, they are hashed.
        // Let's rely on the fact that I just added .copy-button inside .theoryContent.
        // Accessing styles['copy-button'] might not work if it's nested structure not top level export.
        // I should have defined .copyButton as a top level class in SCSS or used :global(.copy-button).
        // Let's assume standard class="copy-button" for now and I'll fallback to fixing SCSS if it's hashed.
        // Update: In the SCSS update, I wrote .copy-button nested.
        // To be safe, I will stick to a simpler approach:
        // I will use inline styles for the button or a specific global class.
        // But for now, let's try to just give it a class and see.
        // Actually, I can just use the styles I defined if I passed them correctly.
        // But wait, the SCSS I added was:
        // .theoryContent { ... pre { ... .copy-button { ... } } }
        // This 'nested' .copy-button is NOT exposed as a key in `styles` object typically unless configured.
        // It is better to use `button.className = "copy-button"` and ensure SCSS targets `pre :global(.copy-button)` or just `pre .copy-button` is enough if the hash is on the parent?
        // No, CSS Modules hashes everything.
        // The safest bet is to inline the styles in JS or use a specific top-level class.
        // Let's Retcon the SCSS first? No, I already applied it.
        // I will use "copy-button" class and hope the SCSS `pre .copy-button` works.
        // Wait, if `.theoryContent` is hashed to `.theoryContent_hash`, then CSS is `.theoryContent_hash pre .copy-button_hash`.
        // So `class="copy-button"` won't match `.copy-button_hash`.
        // I should have used `:global(.copy-button)` in the SCSS.
        // Let's assume I will fix the SCSS in the next step if this fails, or I just use inline styles for the button in JS to be 100% sure.
        // User wants "ability to copy".
        // Let's use simple inline styles for the button to guarantee it works without fighting CSS modules.

        button.innerText = "Copy";
        button.style.position = "absolute";
        button.style.top = "0.5rem";
        button.style.right = "0.5rem";
        button.style.background = "rgba(255, 255, 255, 0.1)";
        button.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        button.style.color = "#cbd5e1";
        button.style.padding = "0.25rem 0.5rem";
        button.style.borderRadius = "4px";
        button.style.cursor = "pointer";
        button.style.fontSize = "0.75rem";
        button.style.zIndex = "10";

        button.addEventListener("click", () => {
          const code = pre.querySelector("code");
          if (code) {
            navigator.clipboard.writeText(code.innerText).then(() => {
              const originalText = button.innerText;
              button.innerText = "Copied!";
              button.style.color = "#4ade80";
              button.style.borderColor = "#4ade80";
              setTimeout(() => {
                button.innerText = originalText;
                button.style.color = "#cbd5e1";
                button.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }, 2000);
            });
          }
        });

        pre.style.position = "relative"; // Ensure relative
        pre.appendChild(button);
      });
    }
  }, [activeTab, currentTopic]);

  const handleComplete = (
    updates?: Partial<import("@/types").StudentProgress>,
  ) => {
    updateProgress(course.id, module.id, { status: "completed", ...updates });
    if (nextModuleSlug) {
      router.push(`/course/${course.slug}/${nextModuleSlug}`);
    } else {
      router.push("/dashboard");
    }
  };

  const handleNextSection = (
    updates?: Partial<import("@/types").StudentProgress>,
  ) => {
    // Logic to determine next view
    if (module.videoUrl || module.resources.length > 0) {
      router.push(`?view=materials`);
    } else if (module.homework) {
      router.push(`?view=homework`);
    } else {
      // If no materials/homework, mark module complete? or just stay
      // Let's finish module if nothing else
      handleComplete(updates);
    }
    setShowCongratulationModal(false);
  };

  return (
    <div>
      <CongratulationModal
        isOpen={showCongratulationModal}
        onConfirm={() => handleNextSection()}
      />
      <div className={styles.moduleHeader}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
            color: "var(--color-primary)",
          }}
        >
          {course.title} / Модуль {module.order + 1}
        </p>
        <h1>{module.title}</h1>
        <p>{module.description}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          borderBottom: "1px solid var(--color-border)",
          marginBottom: "2rem",
        }}
      >
        <Link
          href={`?view=theory`}
          className={`${styles.tabLink} ${
            activeTab === "theory" ? styles.activeTab : ""
          }`}
        >
          <BookOpen size={18} /> Теория
        </Link>
        {(module.videoUrl || module.resources.length > 0) && (
          <Link
            href={`?view=materials`}
            className={`${styles.tabLink} ${
              activeTab === "materials" ? styles.activeTab : ""
            }`}
          >
            <Youtube size={18} /> Материалы
          </Link>
        )}
        {module.homework && (
          <Link
            href={`?view=homework`}
            className={`${styles.tabLink} ${
              activeTab === "homework" ? styles.activeTab : ""
            }`}
          >
            <PenTool size={18} /> Домашнее задание
            {progress?.homeworkStatus === "rejected" && (
              <AlertCircle
                size={16}
                color="#ef4444"
                style={{ marginLeft: "0.5rem" }}
              />
            )}
          </Link>
        )}
      </div>

      <div className={styles.tabContent}>
        {activeTab === "theory" && currentTopic && (
          <div
            style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
          >
            <div className={styles.theoryContent} style={{ flex: 1 }}>
              <h2
                style={{
                  color: "var(--color-text-main)",
                  marginBottom: "1rem",
                  borderBottom: "1px solid var(--color-border)",
                  paddingBottom: "0.5rem",
                }}
              >
                {currentTopic.title}
              </h2>
              <div ref={contentRef}>
                {pages.slice(0, visiblePageIndex + 1).map((page, pageIdx) => (
                  <div
                    key={pageIdx}
                    id={`section-${pageIdx}`}
                    className="fade-in-content"
                    style={{ scrollMarginTop: "6rem" }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: page.text }} />
                    {page.quizId && quizzes[page.quizId] && (
                      <Quiz
                        data={quizzes[page.quizId]}
                        userId={user?.id || ""}
                        initialState={progress?.quizResults?.[page.quizId]}
                        onSave={(result) =>
                          saveQuizResult(
                            course.id,
                            module.id,
                            page.quizId!,
                            result,
                          )
                        }
                      />
                    )}
                    {page.challengeId && challenges[page.challengeId] && (
                      <CodeChallenge
                        data={challenges[page.challengeId]}
                        onComplete={
                          page.isNext
                            ? () => setVisiblePageIndex(pageIdx + 1)
                            : undefined
                        }
                      />
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {(() => {
                  const isLastPage = visiblePageIndex >= pages.length - 1;
                  const currentPage = pages[visiblePageIndex];
                  const currentQuizId = currentPage?.quizId;

                  // Check if current page has a quiz and if it's passed
                  // If it has a quiz, we must have a result where isCorrect is true
                  // If no quiz, condition is effectively passed
                  const isQuizPassed =
                    !currentQuizId ||
                    (progress?.quizResults?.[currentQuizId]?.isCorrect ??
                      false);

                  if (!isLastPage) {
                    return (
                      <button
                        onClick={() => {
                          const nextIndex = visiblePageIndex + 1;
                          setVisiblePageIndex(nextIndex);
                          if (currentTopic) {
                            saveTopicState(
                              course.id,
                              module.id,
                              currentTopic.id,
                              nextIndex,
                            );

                            // Scroll to the next section
                            setTimeout(() => {
                              const element = document.getElementById(
                                `section-${nextIndex}`,
                              );
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }, 100);
                          }
                        }}
                        disabled={!isQuizPassed}
                        className={styles.ctaButton}
                        style={{
                          background: "var(--color-primary)",
                          border: "none",
                          color: "white",
                          padding: "1rem 2rem",
                          fontSize: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          width: "100%",
                          fontWeight: "bold",
                          borderRadius: "var(--radius-md)",
                          cursor: isQuizPassed ? "pointer" : "not-allowed",
                          boxShadow: isQuizPassed
                            ? "var(--shadow-glow-blue)"
                            : "none",
                          opacity: isQuizPassed ? 1 : 0.5,
                        }}
                      >
                        Продолжить <ArrowRight size={20} />
                      </button>
                    );
                  }

                  return (
                    <button
                      onClick={async () => {
                        if (!isQuizPassed) return;

                        // Mark current as complete
                        await markTopicCompleted(
                          course.id,
                          module.id,
                          currentTopic.id,
                        );

                        // Find next topic
                        const currentIndex = allTopics.findIndex(
                          (t) => t.id === currentTopic.id,
                        );

                        // Calculate "updated" completed topics locally to prevent stale closure issues
                        // when calling handleNextSection -> handleComplete
                        const currentCompleted =
                          progress?.completedTopics || [];
                        const updatedCompletedTopics =
                          currentCompleted.includes(currentTopic.id)
                            ? currentCompleted
                            : [...currentCompleted, currentTopic.id];

                        if (currentIndex < allTopics.length - 1) {
                          const nextTopic = allTopics[currentIndex + 1];
                          // Optimized instant navigation
                          setActiveTopic(nextTopic.id);
                        } else {
                          // It's the last topic
                          if (!nextModuleSlug) {
                            // Only show modal if it's the LAST module of the course
                            setShowCongratulationModal(true);
                          } else {
                            // Otherwise just proceed, PASSING the updated topics
                            handleNextSection({
                              completedTopics: updatedCompletedTopics,
                            });
                          }
                        }
                      }}
                      disabled={!isQuizPassed}
                      className={styles.ctaButton}
                      style={{
                        background: "var(--color-accent)",
                        border: "none",
                        color: "var(--color-accent-text)",
                        padding: "1rem 2rem",
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        width: "100%",
                        fontWeight: "bold",
                        borderRadius: "var(--radius-md)",
                        cursor: isQuizPassed ? "pointer" : "not-allowed",
                        boxShadow: isQuizPassed
                          ? "var(--shadow-glow-yellow)"
                          : "none",
                        opacity: isQuizPassed ? 1 : 0.5,
                      }}
                    >
                      {allTopics.findIndex((t) => t.id === currentTopic.id) ===
                      allTopics.length - 1
                        ? !nextModuleSlug
                          ? "Завершить курс"
                          : "Завершить модуль"
                        : "К следующей теме"}{" "}
                      <ArrowRight size={20} />
                    </button>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {activeTab === "materials" && (
          <div>
            {module.videoUrl ? (
              <div className={styles.videoContainer}>
                <iframe
                  src={`https://www.youtube.com/embed/${module.videoUrl}`}
                  title={module.title}
                  allowFullScreen
                ></iframe>
              </div>
            ) : module.resources.some((r) => r.type === "video") ? null : (
              <p>В этом модуле нет видеоматериалов.</p>
            )}

            {module.resources.length > 0 && (
              <div style={{ marginTop: "2rem" }}>
                <h3>Дополнительные Ресурсы</h3>
                <ul
                  style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}
                >
                  {module.resources.map((res, idx) => {
                    const getYouTubeId = (url: string) => {
                      const regExp =
                        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                      const match = url.match(regExp);
                      return match && match[2].length === 11 ? match[2] : null;
                    };

                    const videoId =
                      res.type === "video" ? getYouTubeId(res.url) : null;

                    if (videoId) {
                      return (
                        <li key={idx} style={{ marginBottom: "2rem" }}>
                          <h4
                            style={{ marginBottom: "0.5rem", color: "#e2e8f0" }}
                          >
                            {res.title}
                          </h4>
                          <div className={styles.videoContainer}>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={res.title}
                              allowFullScreen
                            ></iframe>
                          </div>
                        </li>
                      );
                    } else if (res.type === "video" && res.url) {
                      // Fallback for generic video files (webm, mp4, etc.)
                      return (
                        <li key={idx} style={{ marginBottom: "2rem" }}>
                          <h4
                            style={{ marginBottom: "0.5rem", color: "#e2e8f0" }}
                          >
                            {res.title}
                          </h4>
                          <div className={styles.videoContainer}>
                            <video
                              controls
                              style={{ width: "100%", height: "100%" }}
                            >
                              <source src={res.url} type="video/webm" />
                              <source src={res.url} type="video/mp4" />
                              Ваш браузер не поддерживает видео.
                            </video>
                          </div>
                        </li>
                      );
                    }

                    if (res.type === "code") {
                      return (
                        <li key={idx} style={{ marginBottom: "2rem" }}>
                          <h4
                            style={{ marginBottom: "0.5rem", color: "#e2e8f0" }}
                          >
                            {res.title}
                          </h4>
                          <div style={{ position: "relative" }}>
                            <pre
                              style={{
                                background: "#0f172a",
                                padding: "1rem",
                                borderRadius: "0.5rem",
                                overflowX: "auto",
                                border: "1px solid #334155",
                                margin: 0,
                              }}
                            >
                              <code
                                style={{
                                  fontFamily: "monospace",
                                  color: "#e2e8f0",
                                  fontSize: "0.875rem",
                                }}
                              >
                                {res.url}
                              </code>
                            </pre>
                            <button
                              onClick={() =>
                                navigator.clipboard.writeText(res.url)
                              }
                              style={{
                                position: "absolute",
                                top: "0.5rem",
                                right: "0.5rem",
                                background: "#334155",
                                border: "none",
                                color: "#fff",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "0.25rem",
                                cursor: "pointer",
                                fontSize: "0.75rem",
                              }}
                              title="Copy to clipboard"
                            >
                              Copy
                            </button>
                          </div>
                        </li>
                      );
                    }

                    return (
                      <li key={idx} style={{ marginBottom: "0.75rem" }}>
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#60a5fa",
                            textDecoration: "none",
                            background: "rgba(255,255,255,0.05)",
                            padding: "0.5rem",
                            borderRadius: "4px",
                          }}
                        >
                          {res.type === "pdf" ? (
                            <FileText size={16} />
                          ) : (
                            <ExternalLink size={16} />
                          )}
                          {res.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "homework" && (
          <div className={styles.actionSection} style={{ marginTop: 0 }}>
            <h3>
              <Code style={{ display: "inline", verticalAlign: "middle" }} />{" "}
              Практическое Задание
            </h3>
            <div
              style={{
                marginBottom: "1.5rem",
                color: "#cbd5e1",
                lineHeight: "1.6",
              }}
              dangerouslySetInnerHTML={{
                __html: module.homework?.description || "",
              }}
            />

            {module.homework?.figmaUrl && (
              <div style={{ marginBottom: "2rem" }}>
                <a
                  href={module.homework.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#22c55e",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px -1px rgba(34, 197, 94, 0.2)",
                  }}
                >
                  <ExternalLink size={20} /> Открыть макет в Figma
                </a>
              </div>
            )}

            {module.homework?.acceptanceCriteria &&
              module.homework.acceptanceCriteria.length > 0 && (
                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      marginBottom: "1rem",
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    Критерии приёма
                  </h3>
                  {module.homework.acceptanceCriteria.map((section: any) => (
                    <div
                      key={section.id}
                      style={{
                        marginBottom: "1.5rem",
                        background: "rgba(255, 255, 255, 0.03)",
                        padding: "1rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <h4
                        style={{
                          color: "var(--color-primary)",
                          marginBottom: "0.75rem",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {section.title}
                      </h4>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {section.items.map((item: string, idx: number) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                              color: "#e2e8f0",
                              fontSize: "0.9rem",
                            }}
                          >
                            <span
                              style={{
                                color: "#64748b",
                                minWidth: "1.2rem",
                                marginTop: "2px",
                              }}
                            >
                              •
                            </span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.replace(
                                  /`([^`]+)`/g,
                                  (_, content) =>
                                    `<code style="background: rgba(255,255,255,0.1); padding: 0.1rem 0.3rem; border-radius: 4px; font-family: monospace; font-size: 0.85em;">${content
                                      .replace(/</g, "&lt;")
                                      .replace(/>/g, "&gt;")}</code>`,
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

            {progress?.homeworkStatus === "approved" &&
              progress.adminComments && (
                <div
                  style={{
                    background: "rgba(74, 222, 128, 0.1)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                    borderRadius: "8px",
                    padding: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <h4
                    style={{
                      color: "#4ade80",
                      margin: "0 0 0.5rem 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <CheckCircle size={18} /> Отзыв Ментора
                  </h4>
                  <p style={{ margin: 0, color: "#bbf7d0" }}>
                    {progress.adminComments}
                  </p>
                </div>
              )}

            {progress?.homeworkStatus === "rejected" && (
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "8px",
                  padding: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    color: "#ef4444",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <AlertTriangle size={18} /> Требуются Исправления
                </h4>
                <p style={{ margin: 0, color: "#fca5a5" }}>
                  {progress.adminComments ||
                    "Администратор запросил изменения."}
                </p>
              </div>
            )}

            <div className={styles.inputGroup}>
              <label>Ссылка на репозиторий GitHub</label>
              {progress?.homeworkStatus === "approved" ? (
                <div style={{ padding: "0.5rem 0" }}>
                  <a
                    href={
                      homeworkLink.startsWith("http")
                        ? homeworkLink
                        : `https://${homeworkLink}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#60a5fa",
                      textDecoration: "underline",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <ExternalLink size={16} /> {homeworkLink}
                  </a>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="https://github.com/username/repo"
                  value={homeworkLink}
                  onChange={(e) => setHomeworkLink(e.target.value)}
                  disabled={progress?.homeworkStatus === "submitted"}
                />
              )}
            </div>

            {progress?.homeworkStatus !== "approved" && (
              <div className={styles.inputGroup}>
                <label>Вопросы ментору</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Есть трудности или вопросы?"
                  disabled={progress?.homeworkStatus === "submitted"}
                />
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              {progress?.homeworkStatus === "approved" ? (
                <div
                  style={{
                    color: "#4ade80",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle size={20} /> Задание Принято!
                </div>
              ) : progress?.homeworkStatus === "submitted" ? (
                <div
                  style={{
                    color: "#facc15",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle size={20} /> На Проверке
                </div>
              ) : (
                <button
                  onClick={() => {
                    if (homeworkLink) {
                      submitHomework(course.id, module.id, homeworkLink, notes);
                    } else {
                      alert("Пожалуйста, предоставьте ссылку на GitHub");
                    }
                  }}
                  className={styles.ctaButton}
                  style={{
                    background:
                      progress?.homeworkStatus === "rejected"
                        ? "#ef4444"
                        : "var(--color-accent)",
                    border: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--color-accent-text)",
                  }}
                >
                  {progress?.homeworkStatus === "rejected" ? (
                    <>
                      Отправить Исправления <CheckCircle size={18} />
                    </>
                  ) : (
                    <>
                      Отправить на Проверку <CheckCircle size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
