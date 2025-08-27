import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from './account/auth.module';
import { VehiclehModule } from './vehicles/vehicle.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [DatabaseModule, AuthModule, VehiclehModule, PlacesModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
