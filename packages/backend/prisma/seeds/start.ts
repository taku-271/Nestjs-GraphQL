import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      name: 'testUser',
    },
  });
  await prisma.todo.create({
    data: {
      title: 'test1',
      user_id: 1,
    },
  });
};

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
