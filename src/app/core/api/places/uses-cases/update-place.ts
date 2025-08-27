import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { IPlacesRepository } from '../domain/interfaces/IPlacesRepository';
import { UpdatePlaceDto } from '../dtos/update-place.dto';
import { Place } from '@prisma/client';

@Injectable()
export class UpdatePlaceUseCase
  implements UseCase<{ id: number; data: UpdatePlaceDto }, Place>
{
  constructor(private readonly placesRepository: IPlacesRepository) {}

  async execute({ id, data }): Promise<Place> {
    return this.placesRepository.update(id, data);
  }
}
