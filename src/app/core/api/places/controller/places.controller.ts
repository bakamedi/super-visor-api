import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreatePlaceDto } from '../dtos/create-place.dto';
import { UpdatePlaceDto } from '../dtos/update-place.dto';
import { CreatePlaceUseCase } from '../uses-cases/create-place';
import { GetPlacesUseCase } from '../uses-cases/get-places';
import { GetPlaceUseCase } from '../uses-cases/get-place';
import { UpdatePlaceUseCase } from '../uses-cases/update-place';
import { DeletePlaceUseCase } from '../uses-cases/delete-place';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Places')
@Controller('places')
export class PlacesController {
  constructor(
    private readonly createPlaceUseCase: CreatePlaceUseCase,
    private readonly getPlacesUseCase: GetPlacesUseCase,
    private readonly getPlaceUseCase: GetPlaceUseCase,
    private readonly updatePlaceUseCase: UpdatePlaceUseCase,
    private readonly deletePlaceUseCase: DeletePlaceUseCase,
  ) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.createPlaceUseCase.execute(createPlaceDto);
  }

  @Get()
  findAll(@Query('accountId') accountId: string) {
    return this.getPlacesUseCase.execute(+accountId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getPlaceUseCase.execute(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.updatePlaceUseCase.execute({ id: +id, data: updatePlaceDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deletePlaceUseCase.execute(+id);
  }
}
