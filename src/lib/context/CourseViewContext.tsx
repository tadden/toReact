"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type TabView = "theory" | "materials" | "homework";

interface CourseViewContextType {
  activeTopicId: string | null;
  setActiveTopic: (topicId: string) => void;
  activeView: TabView;
  setActiveView: (view: TabView) => void;
}

const CourseViewContext = createContext<CourseViewContextType | undefined>(
  undefined,
);

export function CourseViewProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlTopicId = searchParams.get("topic");
  const urlView = (searchParams.get("view") as TabView) || "theory";

  const [activeTopicId, setActiveTopicId] = useState<string | null>(urlTopicId);
  const [activeView, setActiveViewState] = useState<TabView>(urlView);

  // Sync state FROM URL (e.g. initial load or back button)
  useEffect(() => {
    setActiveTopicId(urlTopicId);
  }, [urlTopicId]);

  useEffect(() => {
    setActiveViewState(urlView);
  }, [urlView]);

  const setActiveTopic = (topicId: string) => {
    // 1. Instant UI Update
    setActiveTopicId(topicId);
    setActiveViewState("theory");

    // 2. Background URL Update
    const params = new URLSearchParams(searchParams);
    params.set("topic", topicId);
    params.set("view", "theory");

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const setActiveView = (view: TabView) => {
    // 1. Instant UI Update
    setActiveViewState(view);

    // 2. Update URL without triggering Next.js server navigation
    //    Tab switching is client-side only — no server fetch needed
    const params = new URLSearchParams(window.location.search);
    params.set("view", view);

    window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
  };

  return (
    <CourseViewContext.Provider
      value={{ activeTopicId, setActiveTopic, activeView, setActiveView }}
    >
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
