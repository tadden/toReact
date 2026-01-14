import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> } // Params is a Promise in Next.js 15+! Wait, user has next 16? Let's assume standard behavior or Promise.
) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          topics: {
            orderBy: { order: "asc" },
          },
          resources: true,
          homework: true,
        },
      },
    },
  });

  if (!course) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(course);
}
