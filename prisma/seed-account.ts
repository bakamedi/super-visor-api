/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding account ...');

  const account = await prisma.account.create({
    data: {
      name: 'Administrador', // O faker.name.fullName()
      phone: '999999999',
    },
  });

  console.log(`Created account with id: ${account.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
