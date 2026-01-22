export type Role = "student" | "admin";
export type ModuleStatus =
  | "locked"
  | "not-viewed"
  | "in-progress"
  | "completed";

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  avatar?: string | null;
  mustChangePassword?: boolean;
}

export interface ModuleResource {
  title: string;
  url: string;
  type: string;
}

export interface ModuleTopic {
  id: string;
  title: string;
  content: string; // HTML/Markdown
}

export interface ModuleHomework {
  description: string;
  repoUrl?: string | null; // Pre-filled if checking
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  videoUrl?: string | null; // Optional for theory-only modules
  topics: ModuleTopic[];
  homework?: ModuleHomework | null;
  resources: ModuleResource[];
  order: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // identifier for icon component
  modules: Module[];
}

export interface StudentProgress {
  id: string;
  userId: string;

  courseId: string;
  moduleId: string;
  status: ModuleStatus;
  completedTopics: string[]; // IDs of completed topics
  quizResults?: Record<
    string,
    { selectedOption: number | number[]; isCorrect: boolean }
  >;
  notes?: string | null;
  homeworkUrl?: string | null;
  homeworkStatus?: "pending" | "submitted" | "approved" | "rejected";
  adminComments?: string | null;
  topicStates?: Record<string, number>; // JSON state: { topicId: pageIndex }
  updatedAt: number;
}

export interface DashboardStats {
  totalModules: number;
  completedModules: number;
  progressPercentage: number;
}
