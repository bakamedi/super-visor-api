/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient, StateType } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding vehicles ...');

  // You can change the number of vehicles to create
  const numberOfVehicles = 5;

  // You should have an account with id 1 in your database
  // or change this to an existing account id.
  const accountId = 1;

  const stateTypes = ['STOP', 'ONLINE', 'RUNNING', 'OFFLINE'];

  for (let i = 0; i < numberOfVehicles; i++) {
    const vehicle = await prisma.vehicle.create({
      data: {
        name: faker.vehicle.vehicle(),
        stateType: stateTypes[
          Math.floor(Math.random() * stateTypes.length)
        ] as StateType,
        latitude: faker.location.latitude({ min: -18.35, max: 0.2 }),
        longitude: faker.location.longitude({ min: -81.33, max: -68.65 }),
        accountId: accountId,
      },
    });
    console.log(`Created vehicle with id: ${vehicle.id}`);
  }

  console.log('Seeding vehicles finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
