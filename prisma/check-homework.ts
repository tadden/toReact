import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const homework = await prisma.homework.findFirst({
    where: {
      module: {
        slug: "module-1-html-basics",
      },
    },
  });

  console.log("Homework Data:", JSON.stringify(homework, null, 2));
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
