import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log("Users found:", users.length);

  for (const user of users) {
    console.log(`Checking user: ${user.name} (${user.id})`);
    const progress = await prisma.studentProgress.findMany({
      where: { userId: user.id },
      include: { module: true },
    });

    if (progress.length === 0) {
      console.log("  No progress found.");
    }

    for (const p of progress) {
      console.log(`  Module: ${p.module.slug}`);
      console.log(`  Status: ${p.status}`);
      console.log(`  TopicStates: ${p.topicStates}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
