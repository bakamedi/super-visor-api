import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PlacesController } from './controller/places.controller';
import { PlacesRepository } from './infrastructure/places.repository';
import { IPlacesRepository } from './domain/interfaces/IPlacesRepository';
import { CreatePlaceUseCase } from './uses-cases/create-place';
import { GetPlacesUseCase } from './uses-cases/get-places';
import { GetPlaceUseCase } from './uses-cases/get-place';
import { UpdatePlaceUseCase } from './uses-cases/update-place';
import { DeletePlaceUseCase } from './uses-cases/delete-place';

@Module({
  imports: [DatabaseModule],
  controllers: [PlacesController],
  providers: [
    {
      provide: IPlacesRepository,
      useClass: PlacesRepository,
    },
    CreatePlaceUseCase,
    GetPlacesUseCase,
    GetPlaceUseCase,
    UpdatePlaceUseCase,
    DeletePlaceUseCase,
  ],
  exports: [],
})
export class PlacesModule {}
