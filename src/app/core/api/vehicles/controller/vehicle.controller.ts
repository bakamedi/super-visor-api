import { Controller, Get, Query } from '@nestjs/common';
import { GetVehiclesUseCase } from '../uses-cases/get-vehicles';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly getVehiclesUseCase: GetVehiclesUseCase) {}

  @Get()
  getAll(@Query('accountId') accountId: string) {
    return this.getVehiclesUseCase.execute(+accountId);
  }
}
