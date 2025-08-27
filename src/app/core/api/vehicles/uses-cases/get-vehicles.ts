import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { IVehicleRepository } from '../domain/interfaces/IVehicleRepository';
import { Vehicle } from '@prisma/client';

@Injectable()
export class GetVehiclesUseCase implements UseCase<number, Vehicle[]> {
  constructor(private readonly vehicleRepository: IVehicleRepository) {}

  async execute(accountId: number): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll(accountId);
  }
}
