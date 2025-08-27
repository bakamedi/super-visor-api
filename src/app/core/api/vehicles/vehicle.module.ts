import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { VehicleController } from './controller/vehicle.controller';
import { GetVehiclesUseCase } from './uses-cases/get-vehicles';
import { IVehicleRepository } from './domain/interfaces/IVehicleRepository';
import { VehicleRepository } from './infrastructure/vehicle.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleController],
  providers: [
    GetVehiclesUseCase,
    {
      provide: IVehicleRepository,
      useClass: VehicleRepository,
    },
  ],
  exports: [],
})
export class VehicleModule {}
