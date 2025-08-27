import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../database/database.module";
import { VehicleController } from "./controller/vehicle.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleController],
  providers: [],
  exports: [],
})
export class VehiclehModule {}
