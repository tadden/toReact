import { prisma } from "@/lib/prisma";
import { cache } from "react";

// Cached fetchers for Server Components

export const getCourses = cache(async () => {
  return await prisma.course.findMany({
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            include: { topics: true },
            orderBy: { order: "asc" },
          },
        },
      },
    },
  });
});

export const getCourseBySlug = cache(async (slug: string) => {
  return await prisma.course.findUnique({
    where: { slug },
    include: {
      modules: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          slug: true,
          title: true,
          order: true,
          // We don't need full nested content for the sidebar usually, just titles/slugs
          // But wait, the sidebar needs to know topics?
          // If sidebar needs topics, we should include them LIGHTLY (id, title, isCompleted?)
          // For now, to keep it compatible with existing UI without huge refactor,
          // let's keep it as is but maybe we can optimize specific pages later.
          // The USER asked for faster loading. The biggest weight is likely the sheer amount of text in all modules.

          // Let's TRY to just return what's needed.
          // Existing code expects: course.modules[].lessons[].topics

          lessons: {
            include: { topics: true }, // Topics content is heavy!
            orderBy: { order: "asc" },
          },
          resources: true,
          homework: true,
        },
      },
    },
  });
});

// New optimized fetcher for Module Page
export const getCourseWithTargetModule = cache(
  async (courseSlug: string, moduleSlug: string) => {
    // 1. Fetch Course Metadata + Module List (for Sidebar/Navigation) - minimal data
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
      include: {
        modules: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            slug: true,
            title: true,
            order: true,
          },
        },
      },
    });

    if (!course) return null;

    // 2. Fetch ONLY the target module with FULL content
    const targetModule = await prisma.module.findFirst({
      where: {
        courseId: course.id,
        slug: moduleSlug,
      },
      include: {
        lessons: {
          orderBy: { order: "asc" },
          include: {
            topics: true, // Content included here
          },
        },
        resources: true,
        homework: true,
      },
    });

    if (!targetModule) return null;

    // 3. Merge them manually to match expected shape for ModuleContent
    // We need to replace the "light" module in the list with the "heavy" target module
    // OR just pass them separately if ModuleContent supported it.
    // Existing ModuleContent expects `course.modules` to have everything if it navigates internally?
    // Actually ModuleContent mostly uses `module` prop for content, and `course` prop for header/context?
    // Let's check ModuleContent props usage.

    // Reconstructing the object to satisfying the `Course` type with mixed depth might be tricky with TypeScript
    // if we don't want to change types.
    // However, we can return a constructed objects.

    // Let's modify the interface of the page to use this smarter fetching.

    const modulesWithData = course.modules.map((m) => {
      if (m.slug === moduleSlug) {
        return targetModule;
      }
      return m; // This 'm' is lightweight (no lessons/topics)
    });

    return {
      ...course,
      modules: modulesWithData,
    };
  }
);

export const getUserProgress = cache(async (userId: string) => {
  return await prisma.studentProgress.findMany({
    where: { userId },
  });
});
