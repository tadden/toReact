import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const courses = await prisma.course.findMany({
    orderBy: { order: "asc" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        select: {
          id: true,
          slug: true,
          title: true,
          videoUrl: true,
          topics: {
            select: {
              id: true,
              title: true,
              // content: false // Exclude content!
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
