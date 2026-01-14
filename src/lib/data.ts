import { prisma } from "@/lib/prisma";
import { cache } from "react";

export const getCourses = cache(async () => {
  return await prisma.course.findMany({
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          topics: {
            orderBy: { order: "asc" },
            select: { id: true, title: true, content: false }, // Light fetch
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
          topics: {
            orderBy: { order: "asc" },
            select: { id: true, title: true, content: false }, // Light fetch for sidebar
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
    // Use getCourseBySlug logic but without extra fields?
    // Actually, getCourseBySlug is already "sidebar ready" (light topics).
    // So we can reuse or duplicate similar logic.

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
            topics: {
              orderBy: { order: "asc" },
              // We need topics list for sidebar navigation even if not active module?
              // Yes.
              select: { id: true, title: true, content: false },
            },
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
        topics: {
          orderBy: { order: "asc" },
        }, // FULL content included here
        resources: true,
        homework: true,
      },
    });

    if (!targetModule) return null;

    // 3. Merge them manually
    const modulesWithData = course.modules.map((m) => {
      if (m.slug === moduleSlug) {
        return targetModule;
      }
      return m;
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
