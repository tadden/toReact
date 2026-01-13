"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useProgress } from "@/lib/context/ProgressContext";
import styles from "./Course.module.scss";
import {
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Tv,
  PenTool,
  Lock,
  AlertCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Sidebar({ courseId }: { courseId: string }) {
  const { getModuleProgress, isModuleLocked, courses } = useProgress();
  const params = useParams(); // { courseSlug, moduleSlug }
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "theory";
  const activeModuleSlug = params.moduleSlug as string;

  // Find course from context or wait for load
  // courseId passed as prop is likely ID (CUID).
  // Context 'courses' has real IDs.
  const course = courses.find((c) => c.id === courseId);

  // State for which module is expanded.
  // Initialize with the currently active module if available.
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  // State for Theory sections expansion (map of moduleId -> boolean)
  // Default all to true? Or false? User code had <details open>, so true.
  const [expandedTheory, setExpandedTheory] = useState<Record<string, boolean>>(
    {}
  );

  // Sync open state with URL navigation
  useEffect(() => {
    if (course && activeModuleSlug) {
      const activeModule = course.modules.find(
        (m) => m.slug === activeModuleSlug
      );
      if (activeModule) {
        setOpenModuleId(activeModule.id);
        // Ensure the active module's theory is open
        setExpandedTheory((prev) => ({ ...prev, [activeModule.id]: true }));
      }
    }
  }, [activeModuleSlug, course]);

  if (!course) return null;

  return (
    <aside className={styles.sidebar}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            color: "#94a3b8",
            fontSize: "0.9rem",
            display: "block",
          }}
        >
          ← Назад
        </Link>
        <ThemeToggle />
      </div>

      <h2>{course.title}</h2>

      <div className={styles.moduleList}>
        {course.modules.map((module) => {
          const progress = getModuleProgress(courseId, module.id);
          const isCompleted = progress?.status === "completed";
          const isActive = module.slug === activeModuleSlug;
          const isOpen = openModuleId === module.id;
          const isLocked = isModuleLocked(courseId, module.id);

          // If locked, render a simplified Div instead of Link
          if (isLocked) {
            return (
              <div
                key={module.id}
                className={`${styles.moduleItem} ${styles.locked}`}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    opacity: 0.5,
                  }}
                >
                  <Lock size={16} style={{ flexShrink: 0 }} />
                  {module.title}
                </div>
              </div>
            );
          }

          return (
            <div key={module.id}>
              {/* Module Header (Clicking toggle vs navigate) */}
              <Link
                href={`/course/${course.slug}/${module.slug}?view=theory`}
                className={`${styles.moduleItem} ${
                  isActive ? styles.active : ""
                }`}
                onClick={(e) => {
                  // If we are strictly clicking the current active module header,
                  // we accept this as a "Toggle" intention.
                  // If we are clicking a DIFFERENT module, we let navigation happen (which triggers Effect).
                  if (isActive) {
                    e.preventDefault();
                    setOpenModuleId((prev) =>
                      prev === module.id ? null : module.id
                    );
                  }
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle
                      size={16}
                      color="#4ade80"
                      style={{ flexShrink: 0 }}
                    />
                  ) : (
                    <Circle size={16} style={{ flexShrink: 0 }} />
                  )}
                  {module.title}
                  {progress?.homeworkStatus === "rejected" && (
                    <AlertCircle
                      size={16}
                      color="#ef4444"
                      style={{ flexShrink: 0, marginLeft: "auto" }}
                    />
                  )}
                </div>
                {isOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </Link>

              {/* Sub-menu (Visible if Open) */}
              {isOpen && (
                <div className={styles.subModuleList}>
                  {/* Theory Section with Controlled Collapse */}
                  <div className={styles.theoryDetails}>
                    {course.slug !== "pre-course" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation(); // Prevent bubbling to Module link
                          setExpandedTheory((prev) => ({
                            ...prev,
                            [module.id]: !prev[module.id],
                          }));
                        }}
                        className={styles.theorySummary}
                      >
                        Теория
                        {/* Default to open, so if undefined treat as true? Or set default state. 
                          The user wants "next to <ChevronDown and up" 
                          Assume: Open = ChevronDown, Closed = ChevronRight (or similar)
                          Let's stick to standard: Right = Closed, Down = Open.
                       */}
                        {expandedTheory[module.id] !== false ? (
                          <ChevronDown
                            size={16}
                            className={styles.summaryIcon}
                          />
                        ) : (
                          <ChevronRight
                            size={16}
                            className={styles.summaryIcon}
                          />
                        )}
                      </button>
                    )}

                    {/* Render Content if Expanded (Default True) or if Pre-course */}
                    {(course.slug === "pre-course" ||
                      expandedTheory[module.id] !== false) && (
                      <div className={styles.theoryContent}>
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lesson.id}
                            style={{ marginBottom: "0.75rem" }}
                          >
                            {/* Make Lesson Title Collapsible? User request was just "see lesson name". 
                                Let's standard static header for now as simpler. 
                                OR collapsible as previously attempted? 
                                User asked: "We need to change a bit schema. So each module contain two lessons ... use should see lesson name".
                                User didn't explicitly ask for collapse this time, just structure. 
                                I'll do static header.
                            */}
                            <div
                              style={{
                                fontSize: "0.75rem",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                color: "var(--color-text-dim)",
                                marginBottom: "0.5rem",
                                paddingLeft: "1rem",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {lesson.title}
                            </div>
                            {lesson.topics.map((topic, topicIndex) => {
                              const isFirstOverall =
                                lessonIndex === 0 && topicIndex === 0;
                              const isTopicActive =
                                searchParams.get("topic") === topic.id ||
                                (isFirstOverall &&
                                  !searchParams.get("topic") &&
                                  currentView === "theory" &&
                                  isActive);

                              const isTopicCompleted =
                                progress?.completedTopics?.includes(topic.id);

                              return (
                                <Link
                                  key={topic.id}
                                  href={`?view=theory&topic=${topic.id}`}
                                  className={`${styles.subModuleItem} ${
                                    isTopicActive ? styles.active : ""
                                  }`}
                                >
                                  {isTopicCompleted ? (
                                    <CheckCircle
                                      size={16}
                                      color="#4ade80"
                                      style={{ flexShrink: 0 }}
                                    />
                                  ) : (
                                    <Circle
                                      size={16}
                                      style={{ flexShrink: 0 }}
                                    />
                                  )}
                                  {topic.title}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {(module.videoUrl || module.resources.length > 0) && (
                    <Link
                      href={`?view=materials`}
                      className={`${styles.subModuleItem} ${
                        currentView === "materials" && isActive
                          ? styles.active
                          : ""
                      }`}
                    >
                      <Tv size={14} /> Материалы
                    </Link>
                  )}

                  {module.homework && (
                    <Link
                      href={`?view=homework`}
                      className={`${styles.subModuleItem} ${
                        currentView === "homework" && isActive
                          ? styles.active
                          : ""
                      }`}
                    >
                      <PenTool size={14} /> Домашнее задание
                      {progress?.homeworkStatus === "rejected" && (
                        <AlertCircle
                          size={14}
                          color="#ef4444"
                          style={{ marginLeft: "auto" }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
