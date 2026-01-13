import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const courses = await prisma.course.findMany({
    include: {
      modules: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          slug: true,
          title: true,
          videoUrl: true,
          lessons: {
            include: { topics: true },
            orderBy: { order: "asc" },
          },
          resources: true,
          homework: true, // Use full object if needed, or select fields. Sidebar checks 'homework' existence.
          order: true,
        },
      },
    },
  });

  return NextResponse.json(courses);
}
