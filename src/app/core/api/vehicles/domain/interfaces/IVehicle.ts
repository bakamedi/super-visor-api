import { Prisma } from "@prisma/client";

export interface IVehicle {
  getAll(): Promise<Prisma.VehicleGetPayload<any>>;
}
