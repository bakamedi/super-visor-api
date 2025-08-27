import { Controller, Get } from "@nestjs/common";

@Controller("vehicles")
export class VehicleController {
  constructor() {}

  @Get("")
  getAll() {
    return "";
  }
}
