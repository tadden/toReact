import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== "admin") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Fetch all students and their progress
  const students = await prisma.user.findMany({
    where: { role: "student" },
    include: {
      progress: {
        include: {
          module: {
            include: {
              course: true,
            },
          },
        },
      },
    },
  });

  // Transform data to match frontend expectations if necessary
  return NextResponse.json(students);
}
