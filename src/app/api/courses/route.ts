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
            // include: { topics: true }, // OLD: Fetched heavy content
            orderBy: { order: "asc" },
            select: {
              id: true,
              title: true,
              order: true,
              topics: {
                // orderBy: { order: "asc" }, // Topic has no order field
                select: {
                  id: true,
                  title: true,
                  // content: false // Exclude content!
                },
              },
            },
          },
          resources: true,
          homework: true,
          order: true,
        },
      },
    },
  });

  return NextResponse.json(courses);
}
