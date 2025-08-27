import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { IPlacesRepository } from '../domain/interfaces/IPlacesRepository';
import { CreatePlaceDto } from '../dtos/create-place.dto';
import { Place } from '@prisma/client';

@Injectable()
export class CreatePlaceUseCase implements UseCase<CreatePlaceDto, Place> {
  constructor(private readonly placesRepository: IPlacesRepository) {}

  async execute(input: CreatePlaceDto): Promise<Place> {
    return this.placesRepository.create(input);
  }
}
