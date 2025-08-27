import { Vehicle } from '@prisma/client';

export abstract class IVehicleRepository {
  abstract findAll(accountId: number): Promise<Vehicle[]>;
}
