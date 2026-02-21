import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { preCourse } from "./data/pre-course";
import { htmlCssCourse } from "./data/html-css";
import { javascriptCourse } from "./data/javascript";
import { upcomingCourses } from "./data/upcoming";

const prisma = new PrismaClient();

const COURSES = [
  preCourse,
  htmlCssCourse,
  javascriptCourse,
  ...upcomingCourses,
];

async function main() {
  console.log("Start seeding ...");

  // Clean up existing data - DISABLED to preserve manual DB edits
  // await prisma.studentProgress.deleteMany();
  // await prisma.homework.deleteMany();
  // await prisma.resource.deleteMany();
  // await prisma.topic.deleteMany();
  // await prisma.lesson.deleteMany();
  // await prisma.module.deleteMany();
  // await prisma.course.deleteMany();
  // await prisma.user.deleteMany();
  console.log(
    "⚠️  Safe Seeding: Skipping data deletion to preserve existing records.",
  );

  // Create Users
  const password = await bcrypt.hash("password123", 10);

  const students = [
    {
      name: "Alex Cosmonaut",
      email: "student@toreact.com",
      id: "user_student",
    },
    { name: "Roman", email: "roman@toreact.com", id: "user_roman" },
    { name: "Dima", email: "venediktov9797@gmail.com", id: "user_dima" },
    { name: "Vadim", email: "vadimka.ramkovich@gmail.com", id: "user_vadim" },
    { name: "Olga", email: "olga@toreact.com", id: "user_olga" },
    {
      name: "Ilja",
      email: "tadden12@gmail.com",
      id: "user_ilja_student",
    },
    {
      name: "Vitalijs",
      email: "vitalijsvolkovickis@inbox.lv",
      id: "user_vitalijs",
    },
    {
      name: "Alen",
      email: "alenudov@gmail.com",
      id: "user_alen",
    },
    {
      name: "Boris",
      email: "b69771638@gmail.com",
      id: "user_boris",
    },
  ];

  for (const s of students) {
    await prisma.user.upsert({
      where: { id: s.id },
      update: {}, // Don't overwrite existing user data (like passwords)
      create: {
        id: s.id,
        email: s.email,
        name: s.name,
        role: "student",
        avatar: "/avatars/student.png",
        password,
      },
    });
    // console.log(`Ensured student: ${s.name}`);
  }

  const admins = [
    { name: "Ilja", email: "admin@toreact.com", id: "user_ilja" },
  ];

  for (const a of admins) {
    await prisma.user.upsert({
      where: { id: a.id }, // Assuming ID is stable
      update: {},
      create: {
        id: a.id,
        email: a.email,
        name: a.name,
        role: "admin",
        avatar: "/avatars/admin.png",
        password,
      },
    });
    // console.log(`Ensured admin: ${a.name}`);
  }

  console.log("Users created successfully");

  // Create Courses
  for (const courseData of COURSES) {
    const course = await prisma.course.upsert({
      where: { slug: courseData.slug },
      update: {
        title: courseData.title,
        description: courseData.description,
        icon: courseData.icon,
        order: (courseData as any).order,
      },
      create: {
        slug: courseData.slug,
        title: courseData.title,
        description: courseData.description,
        icon: courseData.icon,
        order: (courseData as any).order,
      },
    });

    console.log(`Created course: ${course.title}`);

    for (const modData of courseData.modules) {
      // Find or Create Module
      // We can't use upsert directly if we want to avoid overwriting content fields in 'update' block
      // BUT for simplicity in maintaining structure, usually seed forces structure updates.
      // If user wants to edit content in DB, we should probably NOT update description/title if it exists?
      // COMPROMISE: We will 'upsert' but only update structural fields (order, videoUrl)
      // and LEAVE title/description alone if it exists?
      // NO, usually seed is source of truth for TITLES.
      // Let's settle on: Upsert updates everything defined in seed.
      // If user edits DB, they should know seed might revert it.
      // EXCEPT: We commented out deleteMany, so at least unrelated things aren't wiped.

      const module = await prisma.module.upsert({
        where: {
          courseId_slug: {
            courseId: course.id,
            slug: modData.slug,
          },
        },
        update: {
          title: modData.title,
          description: modData.description,
          videoUrl: modData.videoUrl,
          order: modData.order,
        },
        create: {
          courseId: course.id,
          slug: modData.slug,
          title: modData.title,
          description: modData.description,
          videoUrl: modData.videoUrl,
          order: modData.order,
        },
      });

      // Topics
      if ((modData as any).topics) {
        for (const topicData of (modData as any).topics) {
          // Topic identification: moduleId + title
          const topic = await prisma.topic.findFirst({
            where: {
              moduleId: module.id,
              title: topicData.title,
            },
          });

          if (!topic) {
            await prisma.topic.create({
              data: {
                moduleId: module.id,
                title: topicData.title,
                content: topicData.content,
                order: topicData.order,
              },
            });
          } else {
            await prisma.topic.update({
              where: { id: topic.id },
              data: {
                content: topicData.content,
                order: topicData.order,
              },
            });
          }
        }
      }

      // Resources (Simplify: Delete and Recreate is easier for lists, but dangerous.
      // Let's just create if missing by URL.)
      if (modData.resources) {
        for (const res of modData.resources) {
          const existing = await prisma.resource.findFirst({
            where: { moduleId: module.id, url: res.url },
          });
          if (!existing) {
            await prisma.resource.create({
              data: {
                moduleId: module.id,
                title: res.title,
                url: res.url,
                type: res.type,
              },
            });
          }
        }
      }

      // Homework
      if ("homework" in modData && modData.homework) {
        await prisma.homework.upsert({
          where: { moduleId: module.id },
          update: {
            description: modData.homework.description,
            repoUrl: modData.homework.repoUrl,
            figmaUrl: (modData.homework as any).figmaUrl,
            acceptanceCriteria: (modData.homework as any).acceptanceCriteria,
          },
          create: {
            moduleId: module.id,
            description: modData.homework.description,
            repoUrl: modData.homework.repoUrl,
            figmaUrl: (modData.homework as any).figmaUrl,
            acceptanceCriteria: (modData.homework as any).acceptanceCriteria,
          },
        });
      }
    }
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
