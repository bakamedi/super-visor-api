import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { VehicleRepository } from '../domain/VehicleRepository';
import { Prisma } from '@prisma/client';

@Injectable()
export class GetAllPUseCase implements UseCase<any, any> {
  constructor(private readonly petRepository: VehicleRepository) {}

  async execute(): Promise<Prisma.VehicleGetPayload<any>[]> {
    const vehicles = await this.petRepository.getAll();

    return [];
  }
}
