"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/context/AuthContext";
import { useProgress } from "@/lib/context/ProgressContext";
import { useRouter } from "next/navigation";
import { HomeworkReviewModal } from "./HomeworkReviewModal";
import styles from "./Admin.module.scss";
import { User, StudentProgress, Course } from "@/types";

// Extended User type to include progress as returned by API
interface StudentWithProgress extends User {
  progress: (StudentProgress & {
    module: {
      title: string;
      course: { slug: string; title: string; id: string };
    };
  })[];
  // API returns nested module/course info. StudentProgress type in frontend might not match exactly if we include relations.
  // We'll map it or cast it.
}

export function AdminDashboard() {
  const { user, isLoading: authLoading, logout } = useAuth(); // Added logout here
  const { approveHomework, rejectHomework, courses } = useProgress();
  const router = useRouter();

  const [students, setStudents] = useState<StudentWithProgress[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(
    null,
  );
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [reviewState, setReviewState] = useState<{
    isOpen: boolean;
    studentId: string;
    courseId: string;
    moduleId: string;
    submissionLink?: string;
    studentNotes?: string;
  } | null>(null);

  useEffect(() => {
    fetchData();
  }, [user, authLoading, router]);

  const fetchData = () => {
    if (!authLoading && user && user.role === "admin") {
      fetch("/api/admin/progress")
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
          setIsLoadingData(false);
        })
        .catch((err) => {
          console.error("Failed to fetch admin data", err);
          setIsLoadingData(false);
        });
    }
  };

  const updateModuleStatus = async (
    userId: string,
    courseId: string,
    moduleId: string,
    newStatus: string,
  ) => {
    try {
      await fetch("/api/admin/progress/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          courseId,
          moduleId,
          status: newStatus,
        }),
      });
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  if (authLoading || isLoadingData || !user || user.role !== "admin") {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "4rem" }}>
        {authLoading || isLoadingData
          ? "Загрузка данных..."
          : "Проверка прав доступа..."}
      </div>
    );
  }

  // Helper to flat map progress for easier filtering
  const getAllProgressItems = () => {
    return students.flatMap((s) => s.progress);
  };

  const handleReview = (
    studentId: string,
    courseId: string,
    moduleId: string,
    submissionLink?: string,
    studentNotes?: string,
  ) => {
    setReviewState({
      isOpen: true,
      studentId,
      courseId,
      moduleId,
      submissionLink,
      studentNotes,
    });
  };

  const closeReview = () => {
    setReviewState(null);
  };

  const handleApprove = async (comment: string) => {
    if (reviewState) {
      await approveHomework(
        reviewState.studentId,
        reviewState.courseId,
        reviewState.moduleId,
        comment,
      );
      // Refresh data logic?
      // Optimistic update local state
      setStudents((prev) =>
        prev.map((s) => {
          if (s.id === reviewState.studentId) {
            return {
              ...s,
              progress: s.progress.map((p) => {
                if (
                  p.courseId === reviewState.courseId &&
                  p.moduleId === reviewState.moduleId
                ) {
                  return {
                    ...p,
                    homeworkStatus: "approved",
                    status: "completed",
                    adminComments: comment,
                  };
                }
                return p;
              }),
            };
          }
          return s;
        }),
      );
      closeReview();
    }
  };

  const handleReject = async (comment: string) => {
    if (reviewState) {
      await rejectHomework(
        reviewState.studentId,
        reviewState.courseId,
        reviewState.moduleId,
        comment,
      );
      // Optimistic update
      setStudents((prev) =>
        prev.map((s) => {
          if (s.id === reviewState.studentId) {
            return {
              ...s,
              progress: s.progress.map((p) => {
                if (
                  p.courseId === reviewState.courseId &&
                  p.moduleId === reviewState.moduleId
                ) {
                  return {
                    ...p,
                    homeworkStatus: "rejected",
                    adminComments: comment,
                  };
                }
                return p;
              }),
            };
          }
          return s;
        }),
      );
      closeReview();
    }
  };

  const toggleCourse = (courseId: string) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  const getPendingCount = (studentId: string) => {
    const student = students.find((s) => s.id === studentId);
    if (!student) return 0;
    return student.progress.filter((p) => p.homeworkStatus === "submitted")
      .length;
  };

  // Render Student List View
  const renderStudentList = () => {
    return (
      <div className={styles.card}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Студент</th>
              <th>Прогресс</th>
              <th>Ожидает Проверки</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const pendingCount = getPendingCount(student.id);

              // Calculate overall progress
              const totalModules = courses.reduce(
                (acc, course) => acc + course.modules.length,
                0,
              );
              const completedModules = student.progress.filter(
                (p) => p.status === "completed",
              ).length;
              const progressPercent =
                totalModules > 0
                  ? Math.round((completedModules / totalModules) * 100)
                  : 0;

              return (
                <tr
                  key={student.id}
                  onClick={() => setSelectedStudentId(student.id)}
                  style={{ cursor: "pointer", transition: "background 0.2s" }}
                  className={styles.studentRow}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1e293b")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td>
                    <div className={styles.userCell}>
                      <div className={styles.avatar}>
                        {(student.name || "U").charAt(0)}
                      </div>
                      <div className={styles.info}>
                        <span>{student.name}</span>
                        <span className={styles.email}>{student.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          height: "6px",
                          background: "#334155",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${progressPercent}%`,
                            height: "100%",
                            background: "var(--color-accent)",
                            borderRadius: "3px",
                          }}
                        />
                      </div>
                      <span style={{ fontWeight: "bold", color: "#e2e8f0" }}>
                        {progressPercent}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.25rem",
                      }}
                    >
                      {pendingCount > 0 && (
                        <span style={{ color: "#facc15", fontWeight: "bold" }}>
                          {pendingCount} На проверке
                        </span>
                      )}
                      {student.progress.filter(
                        (p) => p.homeworkStatus === "rejected",
                      ).length > 0 && (
                        <span
                          style={{
                            color: "#ef4444",
                            fontWeight: "bold",
                            fontSize: "0.85rem",
                          }}
                        >
                          {
                            student.progress.filter(
                              (p) => p.homeworkStatus === "rejected",
                            ).length
                          }{" "}
                          На доработке
                        </span>
                      )}
                      {pendingCount === 0 &&
                        student.progress.filter(
                          (p) => p.homeworkStatus === "rejected",
                        ).length === 0 && (
                          <span style={{ color: "#9ca3af" }}>
                            Всё проверено
                          </span>
                        )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // Render Student Detail View
  const renderStudentDetail = () => {
    const student = students.find((u) => u.id === selectedStudentId);
    if (!student) return null;

    const studentItems = student.progress;
    const pendingReviews = studentItems.filter(
      (p) => p.homeworkStatus === "submitted",
    );

    return (
      <div className={styles.detailContainer}>
        <button
          className={styles.backButton}
          onClick={() => setSelectedStudentId(null)}
        >
          ← Назад к списку
        </button>

        <div className={styles.studentHeader}>
          <div className={styles.avatarLarge}>
            {(student.name || "U").charAt(0)}
          </div>
          <div>
            <h2>{student.name}</h2>
            <p>{student.email}</p>
          </div>
        </div>

        {/* Pending Reviews Section */}
        {pendingReviews.length > 0 && (
          <div className={styles.pendingSection}>
            <h3 className={styles.sectionTitle}>
              Ожидают Проверки{" "}
              <span className={styles.countBadge}>{pendingReviews.length}</span>
            </h3>
            <div className={styles.pendingGrid}>
              {pendingReviews.map((item) => {
                // item has nested module/course relations from API
                const moduleTitle = item.module?.title || "Unknown Module";
                const courseSlug =
                  item.module?.course?.slug || "Unknown Course";
                const courseId = item.courseId;
                const moduleId = item.moduleId;

                return (
                  <div key={moduleId} className={styles.pendingCard}>
                    <div className={styles.pendingInfo}>
                      <span className={styles.courseTag}>{courseSlug}</span>
                      <h4>{moduleTitle}</h4>
                    </div>
                    <button
                      className={styles.reviewActionBtn}
                      onClick={() =>
                        handleReview(
                          student.id,
                          courseId,
                          moduleId,
                          item.homeworkUrl || "",
                          item.notes || undefined,
                        )
                      }
                    >
                      Проверить
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Rejected / Waiting Section */}
        {studentItems
          .filter((p) => p.homeworkStatus === "rejected")
          .map((item, idx, arr) => {
            if (idx === 0) {
              return (
                <div
                  key="rejected-section"
                  className={styles.pendingSection}
                  style={{
                    background: "rgba(239, 68, 68, 0.05)",
                    borderColor: "rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <h3
                    className={styles.sectionTitle}
                    style={{ color: "#ef4444" }}
                  >
                    Ожидают Исправления{" "}
                    <span
                      className={styles.countBadge}
                      style={{ background: "#ef4444" }}
                    >
                      {arr.length}
                    </span>
                  </h3>
                  <div className={styles.pendingGrid}>
                    {arr.map((rejItem) => (
                      <div
                        key={rejItem.moduleId}
                        className={styles.pendingCard}
                        style={{ borderColor: "rgba(239, 68, 68, 0.3)" }}
                      >
                        <div className={styles.pendingInfo}>
                          <span className={styles.courseTag}>
                            {rejItem.module?.course?.slug}
                          </span>
                          <h4>{rejItem.module?.title}</h4>
                        </div>
                        <span
                          style={{
                            color: "#ef4444",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          ⚠ На доработке
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}

        <h3 className={styles.sectionTitle}>Прогресс Курса</h3>
        <div className={styles.coursesGrid}>
          {courses.map((course) => {
            const courseItems = studentItems.filter(
              (p) => p.courseId === course.id,
            );

            // if (courseItems.length === 0) return null;
            const totalModules = course.modules.length;
            const completedModules = courseItems.filter(
              (p) => p.status === "completed",
            ).length;
            const percent =
              totalModules > 0
                ? Math.round((completedModules / totalModules) * 100)
                : 0;

            const isExpanded = expandedCourseId === course.id;

            return (
              <div key={course.id} className={styles.courseCard}>
                <div
                  className={styles.courseHeader}
                  onClick={() => toggleCourse(course.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.courseTitleRow}>
                    <h3>{course.title}</h3>
                    <span className={styles.expandIcon}>
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>
                  <div className={styles.progressWrapper}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.fill}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <span className={styles.percentText}>{percent}%</span>
                  </div>
                </div>

                {isExpanded && (
                  <div className={styles.moduleList}>
                    {course.modules.map((module) => {
                      const progress = courseItems.find(
                        (p) => p.moduleId === module.id,
                      );
                      const status = progress?.status || "locked";
                      const homeworkStatus = progress?.homeworkStatus;

                      return (
                        <div key={module.id} className={styles.moduleItem}>
                          <div className={styles.moduleInfo}>
                            <span className={styles.moduleTitle}>
                              {module.title}
                            </span>
                            <span
                              className={`${styles.statusBadge} ${styles[status]}`}
                            >
                              <select
                                value={status}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) =>
                                  updateModuleStatus(
                                    student.id,
                                    course.id,
                                    module.id,
                                    e.target.value,
                                  )
                                }
                                style={{
                                  background: "transparent",
                                  border: "none",
                                  color: "inherit",
                                  fontSize: "inherit",
                                  fontWeight: "inherit",
                                  cursor: "pointer",
                                  outline: "none",
                                  padding: 0,
                                  textAlign: "center",
                                  appearance: "none",
                                  WebkitAppearance: "none",
                                }}
                              >
                                <option
                                  value="locked"
                                  style={{ color: "black" }}
                                >
                                  Закрыто
                                </option>
                                <option
                                  value="not-viewed"
                                  style={{ color: "black" }}
                                >
                                  Не начато
                                </option>
                                <option
                                  value="in-progress"
                                  style={{ color: "black" }}
                                >
                                  В процессе
                                </option>
                                <option
                                  value="completed"
                                  style={{ color: "black" }}
                                >
                                  Завершено
                                </option>
                              </select>
                            </span>
                          </div>

                          {progress?.homeworkUrl && (
                            <a
                              href={
                                progress.homeworkUrl?.startsWith("http")
                                  ? progress.homeworkUrl
                                  : `https://${progress.homeworkUrl}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.historyLink}
                              title="Посмотреть задание"
                            >
                              🔗 Ссылка
                            </a>
                          )}

                          {homeworkStatus === "approved" && (
                            <span className={styles.approvedCheck}>
                              ✓ Принято
                            </span>
                          )}
                          {homeworkStatus === "rejected" && (
                            <span className={styles.rejectedLabel}>
                              ⚠ Требуются Правки
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getReviewData = () => {
    if (!reviewState) return null;
    const student = students.find((u) => u.id === reviewState.studentId);
    const course = courses.find(
      (c) => c.id === reviewState.courseId || c.slug === reviewState.courseId,
    ); // Support slug in case
    // Module finding: reviewState.moduleId is ID.
    // Course from courses array (fetched) should have modules.
    const module = course?.modules.find((m) => m.id === reviewState.moduleId);

    if (!student || !module || !course) return null;

    return { student, module, course };
  };

  const reviewData = getReviewData();

  return (
    <>
      {reviewState && reviewData && (
        <HomeworkReviewModal
          isOpen={reviewState.isOpen}
          onClose={closeReview}
          student={reviewData.student}
          module={reviewData.module}
          courseId={reviewData.course.id}
          submissionLink={reviewState.submissionLink}
          studentNotes={reviewState.studentNotes}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
      <div className={styles.adminContainer}>
        <div className={styles.header}>
          <h1>Панель Управления</h1>
          <button onClick={logout} className={styles.logoutButton}>
            Выйти
          </button>
        </div>

        {selectedStudentId ? renderStudentDetail() : renderStudentList()}
      </div>
    </>
  );
}
