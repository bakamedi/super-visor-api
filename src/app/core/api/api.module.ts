import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthModule } from "./account/auth.module";
import { VehiclehModule } from "./vehicles/vehicle.module";

@Module({
  imports: [DatabaseModule, AuthModule, VehiclehModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
