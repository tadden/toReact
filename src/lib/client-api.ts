import { Course } from "@/types";

export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch("/api/courses");
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
}

export async function fetchCourseBySlug(slug: string): Promise<Course> {
  const res = await fetch(`/api/courses/${slug}`);
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("Course not found");
    }
    throw new Error("Failed to fetch course");
  }
  return res.json();
}
