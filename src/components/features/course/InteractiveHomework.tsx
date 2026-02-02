"use client";

import { useState, useEffect, useRef } from "react";
import { CodeChallenge } from "./CodeChallenge";
import { challenges } from "@/data/challenges";
import styles from "./InteractiveHomework.module.scss";
import {
  CheckCircle,
  Circle,
  ChevronRight,
  ChevronDown,
  Lock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/lib/context/ProgressContext";

interface InteractiveHomeworkProps {
  challengeIds: string[];
  courseId: string;
  moduleId: string;
  onComplete: () => void;
  initialCompletedIds?: string[]; // Optional: if we track per-task completion
}

export function InteractiveHomework({
  challengeIds,
  courseId,
  moduleId,
  onComplete,
  initialCompletedIds,
}: InteractiveHomeworkProps) {
  const [activeChallengeId, setActiveChallengeId] = useState<string>(
    challengeIds[0] || "",
  );
  // We'll track local completion state for this session.
  // In a real app, this should probably sync with backend `topicStates` or similar,
  // but for now, let's keep it simple or assume `studentProgress` saves it?
  // The requirement says "Homework for JS is done when all tasks are done".
  const { saveTopicState, progress } = useProgress();

  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(
    new Set(initialCompletedIds || []),
  );

  // Sync with prop when it updates (async data loading)
  useEffect(() => {
    if (initialCompletedIds && initialCompletedIds.length > 0) {
      setCompletedChallenges((prev) => {
        const next = new Set(prev);
        initialCompletedIds.forEach((id) => next.add(id));
        return next;
      });
    }
  }, [initialCompletedIds]);

  // Guard to prevent auto-switching during active session, only on initial load
  const isInitialLoad = useRef(true);

  // Auto-select latest unlocked task on load
  useEffect(() => {
    // Only run if we haven't processed the initial load yet
    if (isInitialLoad.current && initialCompletedIds) {
      if (initialCompletedIds.length > 0) {
        // Find the first uncompleted challenge
        const firstUncompletedId = challengeIds.find(
          (id) => !initialCompletedIds.includes(id),
        );

        if (firstUncompletedId) {
          setActiveChallengeId(firstUncompletedId);
        } else {
          // All completed? Go to last.
          if (initialCompletedIds.length === challengeIds.length) {
            setActiveChallengeId(challengeIds[challengeIds.length - 1]);
          }
        }
      }

      // Mark initial load as done so we don't jump around if data updates later
      isInitialLoad.current = false;
    }
  }, [initialCompletedIds, challengeIds]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeIndex = challengeIds.indexOf(activeChallengeId);
  const activeChallenge = challenges[activeChallengeId];

  // Retrieve saved code from progress
  // Key format: "code:<challengeId>"
  // We need to access the correct progress entry.
  // We assume specific entry for this module.
  const progressKey = Object.keys(progress).find((key) =>
    key.includes(moduleId),
  );
  const currentProgress = progressKey ? progress[progressKey] : undefined;

  // Note: progress.topicStates is Record<string, any>
  const savedCode = currentProgress?.topicStates?.[
    `code:${activeChallengeId}`
  ] as string | undefined;

  const saveTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const handleCodeChange = (code: string) => {
    // Basic debounce
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      saveTopicState(
        courseId,
        moduleId,
        `code:${activeChallengeId}`,
        code,
      ).catch(console.error);
    }, 1000);
  };

  const handleChallengeComplete = () => {
    // Mark current as complete
    const newCompleted = new Set(completedChallenges);
    newCompleted.add(activeChallengeId);
    setCompletedChallenges(newCompleted);

    // Persist progress: use topicStates to store "challengeId": 1
    // We treat challengeId as a "topicId" for storage purposes, or use a prefix?
    // Given the ID is unique (e.g., "js-vars"), standard topicState seems safe unless "js-vars" is also a topic ID.
    // Topics in JS module are "js-intro", "js-script-connection" etc.
    // "js-vars" is an item in homework. They seem distinct enough.
    saveTopicState(courseId, moduleId, activeChallengeId, 1).catch(
      console.error,
    );

    // If all complete, trigger final complete
    if (newCompleted.size === challengeIds.length) {
      // Small delay to show success
      setTimeout(() => {
        onComplete();
      }, 1000);
    } else {
      // Auto-advance logic? Or user clicks next?
      // Let's auto-advance if not last
      /*
      if (activeIndex < challengeIds.length - 1) {
        setTimeout(() => {
            setActiveChallengeId(challengeIds[activeIndex + 1]);
        }, 1500); 
      }
      */
      // Maybe better to stay and show "Next Task" button?
    }
  };

  if (!activeChallenge) {
    return <div>Challenge not found: {activeChallengeId}</div>;
  }

  return (
    <div className={styles.container}>
      {/* Sidebar removed, mainArea takes full width */}
      <div className={styles.mainArea}>
        <div className={styles.challengeHeader}>
          {/* Dropdown Navigation */}
          <div className={styles.dropdownContainer}>
            <button
              className={styles.dropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                {challenges[activeChallengeId] ? (
                  <>
                    <span
                      className={styles.taskNumber}
                      style={{
                        width: "1.2rem",
                        height: "1.2rem",
                        fontSize: "0.7rem",
                        background: "var(--color-primary)",
                        color: "white",
                      }}
                    >
                      {activeIndex + 1}
                    </span>
                    {activeChallenge.title}
                    {completedChallenges.has(activeChallengeId) && (
                      <span
                        className={styles.completedBadge}
                        style={{
                          marginLeft: "0.5rem",
                          color: "#22c55e",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.8rem",
                          border: "1px solid #22c55e",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          gap: "4px",
                        }}
                      >
                        <CheckCircle size={14} /> Выполнено
                      </span>
                    )}
                  </>
                ) : (
                  "Выберите задание"
                )}
              </span>
              <ChevronDown
                size={20}
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              />
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {challengeIds.map((id, index) => {
                  const isCompleted = completedChallenges.has(id);
                  const isActive = id === activeChallengeId;
                  const challenge = challenges[id];

                  // Locked logic:
                  // First task (index 0) is always unlocked.
                  // Subsequent tasks are locked if the previous task is NOT completed.
                  let isLocked = false;
                  if (index > 0) {
                    const prevId = challengeIds[index - 1];
                    if (!completedChallenges.has(prevId)) {
                      isLocked = true;
                    }
                  }

                  return (
                    <button
                      key={id}
                      disabled={isLocked}
                      className={`${styles.dropdownItem} ${isActive ? styles.active : ""} ${
                        isCompleted ? styles.completed : ""
                      } ${isLocked ? styles.locked : ""}`}
                      onClick={() => {
                        if (!isLocked) {
                          setActiveChallengeId(id);
                          setIsDropdownOpen(false);
                        }
                      }}
                    >
                      <div className={styles.taskIcon}>
                        {isCompleted ? (
                          <CheckCircle size={16} className={styles.checkIcon} />
                        ) : isLocked ? (
                          <Lock size={14} style={{ opacity: 0.5 }} />
                        ) : (
                          <span className={styles.taskNumber}>{index + 1}</span>
                        )}
                      </div>
                      <span className={styles.taskTitle}>
                        {challenge ? challenge.title : id}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.controls}>
            <span className={styles.stepCounter}>
              Задание {activeIndex + 1} / {challengeIds.length}
            </span>
            <button
              className={styles.navBtn}
              disabled={activeIndex === 0}
              onClick={() =>
                setActiveChallengeId(challengeIds[activeIndex - 1])
              }
            >
              &larr; Назад
            </button>
            <button
              className={styles.navBtn}
              disabled={
                activeIndex === challengeIds.length - 1 ||
                !completedChallenges.has(activeChallengeId)
              }
              onClick={() =>
                setActiveChallengeId(challengeIds[activeIndex + 1])
              }
            >
              Вперед &rarr;
            </button>
          </div>
        </div>

        <CodeChallenge
          key={activeChallengeId} // Force re-mount on ID change
          data={activeChallenge}
          onComplete={handleChallengeComplete}
          savedCode={savedCode}
          onCodeChange={handleCodeChange}
        />
      </div>
    </div>
  );
}
