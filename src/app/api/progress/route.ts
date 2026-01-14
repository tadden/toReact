import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await request.json();

  const {
    courseId,
    moduleId,
    status,
    completedTopics,
    quizResults,
    notes,
    homeworkUrl,
    homeworkStatus,
    topicStates,
  } = body;

  if (!courseId || !moduleId) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  // Find user by email to get ID (or use session.user.id if NextAuth is configured to provide it, which it is)
  const userId = session.user.id;

  // Upsert progress
  try {
    const progress = await prisma.studentProgress.upsert({
      where: {
        userId_moduleId: {
          userId,
          moduleId,
        },
      },
      update: {
        status,
        completedTopics: completedTopics
          ? JSON.stringify(completedTopics)
          : undefined, // Store as JSON string
        quizResults: quizResults ? JSON.stringify(quizResults) : undefined,
        topicStates: topicStates ? JSON.stringify(topicStates) : undefined,
        notes,
        homeworkUrl,
        homeworkStatus: homeworkStatus, // Use provided status
        updatedAt: new Date(),
      },
      create: {
        userId,
        courseId,
        moduleId,
        status,
        completedTopics: completedTopics
          ? JSON.stringify(completedTopics)
          : undefined,
        quizResults: quizResults ? JSON.stringify(quizResults) : undefined,
        topicStates: topicStates ? JSON.stringify(topicStates) : undefined,
        notes,
        homeworkUrl,
        homeworkStatus:
          homeworkStatus || (homeworkUrl ? "submitted" : undefined),
      },
    });

    return NextResponse.json({
      ...progress,
      completedTopics: progress.completedTopics
        ? JSON.parse(progress.completedTopics)
        : [],
      quizResults: progress.quizResults ? JSON.parse(progress.quizResults) : {},
      topicStates: progress.topicStates ? JSON.parse(progress.topicStates) : {},
    });
  } catch (error) {
    console.error("API Progress Error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to save progress", details: error }),
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const progress = await prisma.studentProgress.findMany({
    where: {
      userId: session.user.id,
    },
  });

  // Parse completedTopics JSON
  const parsedProgress = progress.map((p) => ({
    ...p,
    completedTopics: p.completedTopics ? JSON.parse(p.completedTopics) : [],
    quizResults: p.quizResults ? JSON.parse(p.quizResults) : {},
    topicStates: p.topicStates ? JSON.parse(p.topicStates) : {},
  }));

  return NextResponse.json(parsedProgress);
}
