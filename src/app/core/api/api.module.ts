import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from './account/auth.module';
import { VehicleModule } from './vehicles/vehicle.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [DatabaseModule, AuthModule, VehicleModule, PlacesModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
