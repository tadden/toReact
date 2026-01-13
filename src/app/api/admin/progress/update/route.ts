import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const body = await request.json();
  const { userId, courseId, moduleId, status, homeworkStatus, adminComments } =
    body;

  if (!userId || !courseId || !moduleId) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  const progress = await prisma.studentProgress.upsert({
    where: {
      userId_moduleId: {
        userId,
        moduleId,
      },
    },
    update: {
      status,
      homeworkStatus,
      adminComments,
      updatedAt: new Date(),
    },
    create: {
      userId,
      courseId,
      moduleId,
      status: status || "in-progress",
      homeworkStatus,
      adminComments,
    },
  });

  return NextResponse.json(progress);
}
