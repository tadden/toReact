import { getCourseBySlug } from "@/lib/data";
import { Sidebar } from "@/components/features/course/Sidebar";
import styles from "@/components/features/course/Course.module.scss";
import { notFound } from "next/navigation";
import { CourseViewProvider } from "@/lib/context/CourseViewContext";

// Since this is a layout, we can fetch data server-side or from mocks directly
// But we need params to know which course we are in.
// Layouts in App Router don't receive path params of their children automatically,
// BUT [courseSlug] is a parent segment of this layout, so it DOES receive it.

export default async function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = await getCourseBySlug(courseSlug);

  if (!course) {
    return notFound();
  }

  // We don't know the active module here efficiently without checking children or headers,
  // but Sidebar can use client hook `useParams` to highlight active.
  // We pass 'activeModuleSlug' as prop to Sidebar only if we knew it, or Sidebar gets it itself.
  // Sidebar (Client Component) can use useParams().

  return (
    <div className={styles.courseContainer}>
      <CourseViewProvider>
        <Sidebar courseId={course.id} />
        {/* activeModuleSlug is handled inside Sidebar via useParams for highlighting */}
        <main className={styles.contentArea}>{children}</main>
      </CourseViewProvider>
    </div>
  );
}
