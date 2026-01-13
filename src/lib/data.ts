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
        include: {
          lessons: {
            include: { topics: true },
            orderBy: { order: "asc" },
          },
          resources: true,
          homework: true,
        },
      },
    },
  });
});

export const getUserProgress = cache(async (userId: string) => {
  return await prisma.studentProgress.findMany({
    where: { userId },
  });
});
