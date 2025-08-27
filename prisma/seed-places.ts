/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // You can change the number of places to create
  const numberOfPlaces = 100;

  // You should have an account with id 1 in your database
  // or change this to an existing account id.
  const accountId = 1;

  for (let i = 0; i < numberOfPlaces; i++) {
    const place = await prisma.place.create({
      data: {
        name: faker.location.street(),
        latitude: faker.location.latitude({ min: -18.35, max: 0.2 }),
        longitude: faker.location.longitude({ min: -81.33, max: -68.65 }),
        accountId: accountId,
      },
    });
    console.log(`Created place with id: ${place.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
