"use client";

import { useEffect } from "react";

import { useAuth } from "@/lib/context/AuthContext";
import { useProgress } from "@/lib/context/ProgressContext";
import { useRouter } from "next/navigation";
import styles from "@/components/features/dashboard/Dashboard.module.scss";
import { Code2, Braces, Layout, Lock } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const {
    getCourseProgress,
    progress,
    courses,
    isLoading: progressLoading,
  } = useProgress();
  const router = useRouter();

  const isLoading = authLoading || progressLoading;

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push("/");
      } else if (user.role === "admin") {
        router.push("/admin");
      }
    }
  }, [user, authLoading, router]);

  if (isLoading || !user || user.role === "admin") {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
      >
        Загрузка Центра Управления...
      </div>
    );
  }

  const getIcon = (slug: string) => {
    switch (slug) {
      case "pre-course":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon"
            width="28"
            height="28"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        );
      case "html-css":
        return <Layout size={28} />;
      case "javascript":
        return <Braces size={28} />;
      case "react":
        return <Code2 size={28} />;
      default:
        return <Lock size={28} />;
    }
  };

  return (
    <>
      <div
        className={styles.dashboardHeader}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <h1>Добро пожаловать, {user?.name?.split(" ")[0]}</h1>
          <p>Выбери главу для прохождения:</p>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ThemeToggle />
          <button
            onClick={() => {
              localStorage.removeItem("toreact_user");
              window.location.href = "/";
            }}
            className={styles.logoutButton}
          >
            Выйти
          </button>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        {courses.map((course) => {
          const percentage = getCourseProgress(course.id);

          return (
            <div
              key={course.id}
              className={`${styles.courseCard} ${
                course.slug === "pre-course"
                  ? `${styles.fullWidthCard} ${styles.preCourseCard}`
                  : ""
              }`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{getIcon(course.slug)}</div>
                <h3>{course.title}</h3>
              </div>

              {course.slug !== "pre-course" && (
                <>
                  <div className={styles.stats}>
                    <span>Прогресс</span>
                    <span>{percentage}%</span>
                  </div>

                  <div className={styles.progressBar}>
                    <div
                      className={styles.fill}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </>
              )}

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#94a3b8",
                  margin: "0.5rem 0",
                }}
              >
                {course.description}
              </p>

              {(() => {
                const hasStarted = Object.values(progress).some(
                  (p) =>
                    p.courseId === course.id &&
                    p.userId === user?.id &&
                    (p.completedTopics?.length || 0) > 0
                );

                // Smart Continue Logic
                const getContinueUrl = () => {
                  if (!course.modules || course.modules.length === 0) {
                    return `/course/${course.slug}`;
                  }

                  const sortedModules = [...course.modules].sort(
                    (a, b) => a.order - b.order
                  );

                  // 1. Find the first non-completed module (or in-progress one)
                  let targetModule = sortedModules[0];
                  for (const mod of sortedModules) {
                    const modProgress =
                      progress[`${user?.id}-${course.id}-${mod.id}`];
                    if (modProgress?.status === "completed") {
                      continue;
                    }
                    targetModule = mod;
                    break;
                  }

                  // 2. Determine available topics
                  const modProgress =
                    progress[`${user?.id}-${course.id}-${targetModule.id}`];

                  if (!modProgress) {
                    // Not started this module yet -> Go to root/first topic
                    return `/course/${course.slug}/${targetModule.slug}`;
                  }

                  // If in-progress, find first uncompleted topic
                  const allTopics = targetModule.topics || [];
                  const completedSet = new Set(
                    modProgress.completedTopics || []
                  );

                  const nextTopic = allTopics.find(
                    (t) => !completedSet.has(t.id)
                  );

                  if (nextTopic) {
                    return `/course/${course.slug}/${targetModule.slug}?view=theory&topic=${nextTopic.id}`;
                  }

                  // If all topics completed, check homework
                  if (targetModule.homework) {
                    return `/course/${course.slug}/${targetModule.slug}?view=homework`;
                  }

                  // Or materials
                  if (
                    targetModule.videoUrl ||
                    targetModule.resources.length > 0
                  ) {
                    return `/course/${course.slug}/${targetModule.slug}?view=materials`;
                  }

                  // Default fallthrough
                  return `/course/${course.slug}/${targetModule.slug}`;
                };

                return (
                  <Link href={getContinueUrl()} className={styles.actionButton}>
                    {hasStarted ? "Продолжить Миссию" : "Начать Миссию"}
                  </Link>
                );
              })()}
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {/* Flying Rocket Illustration */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <svg
            width="300"
            height="300"
            viewBox="0 0 500 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.rocketSvg}
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 197, 47, 0.3))",
            }}
          >
            <style>
              {`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                  100% { transform: translateY(0px); }
                }
                .rocket-body { animation: float 4s ease-in-out infinite; }
              `}
            </style>
            <g className="rocket-body">
              {/* Main Body */}
              <path
                d="M250 80 C250 80 160 200 160 350 C160 400 190 450 210 470 L190 530 L250 490 L310 530 L290 470 C310 450 340 400 340 350 C340 200 250 80 250 80 Z"
                fill="#E2E8F0"
              />
              <path
                d="M250 80 C250 80 250 200 250 350 C250 400 340 400 340 350 C340 200 250 80 250 80 Z"
                fill="#F1F5F9"
                opacity="0.3"
              />

              {/* Window */}
              <circle
                cx="250"
                cy="230"
                r="45"
                fill="#0b1026"
                stroke="#334155"
                strokeWidth="8"
              />
              <circle cx="250" cy="230" r="35" fill="#3b82f6" opacity="0.8" />
              <circle cx="265" cy="215" r="10" fill="white" opacity="0.9" />

              {/* Fins - Flashy Red/Orange */}
              <path
                d="M160 350 L60 450 L160 450 Z"
                fill="#ef4444"
                stroke="#991b1b"
                strokeWidth="5"
              />
              <path
                d="M340 350 L440 450 L340 450 Z"
                fill="#ef4444"
                stroke="#991b1b"
                strokeWidth="5"
              />
              <path
                d="M250 490 L250 250"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="15 15"
                opacity="0.5"
              />

              {/* Engine Flames */}
              <g>
                <path
                  d="M210 490 Q250 630 290 490"
                  fill="#f59e0b"
                  opacity="0.8"
                >
                  <animate
                    attributeName="d"
                    values="M210 490 Q250 630 290 490;M210 490 Q250 580 290 490;M210 490 Q250 630 290 490"
                    dur="0.4s"
                    repeatCount="indefinite"
                  />
                </path>
                <path d="M230 490 Q250 580 270 490" fill="#fef08a">
                  <animate
                    attributeName="d"
                    values="M230 490 Q250 580 270 490;M230 490 Q250 540 270 490;M230 490 Q250 580 270 490"
                    dur="0.4s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
