"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface CourseViewContextType {
  activeTopicId: string | null;
  setActiveTopic: (topicId: string) => void;
}

const CourseViewContext = createContext<CourseViewContextType | undefined>(
  undefined,
);

export function CourseViewProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlTopicId = searchParams.get("topic");

  const [activeTopicId, setActiveTopicId] = useState<string | null>(urlTopicId);

  // Sync state FROM URL (e.g. initial load or back button)
  useEffect(() => {
    setActiveTopicId(urlTopicId);
  }, [urlTopicId]);

  const setActiveTopic = (topicId: string) => {
    // 1. Instant UI Update
    setActiveTopicId(topicId);

    // 2. Background URL Update
    // Construct new URL params
    const params = new URLSearchParams(searchParams);
    params.set("topic", topicId);

    // Use replace/push. scroll: false prevents jumping
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <CourseViewContext.Provider value={{ activeTopicId, setActiveTopic }}>
      {children}
    </CourseViewContext.Provider>
  );
}

export function useCourseView() {
  const context = useContext(CourseViewContext);
  if (context === undefined) {
    throw new Error("useCourseView must be used within a CourseViewProvider");
  }
  return context;
}
