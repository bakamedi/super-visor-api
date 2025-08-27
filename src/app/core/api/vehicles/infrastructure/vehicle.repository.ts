/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/services/prisma.service';
import { IVehicleRepository } from '../domain/interfaces/IVehicleRepository';
import { Vehicle } from '@prisma/client';

@Injectable()
export class VehicleRepository implements IVehicleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(accountId: number): Promise<Vehicle[]> {
    return await this.prisma.vehicle.findMany({
      where: {
        accountId,
      },
    });
  }
}