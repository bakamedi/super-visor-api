import { Injectable } from '@nestjs/common';
import { IVehicle } from './interfaces/IVehicle';
import { Prisma } from '@prisma/client';

@Injectable()
export class VehicleRepository implements IVehicle {
  getAll(): Promise<Prisma.VehicleGetPayload<any>> {
    throw new Error('Method not implemented.');
  }
}
