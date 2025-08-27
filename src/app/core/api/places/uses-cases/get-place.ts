import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { IPlacesRepository } from '../domain/interfaces/IPlacesRepository';
import { Place } from '@prisma/client';

@Injectable()
export class GetPlaceUseCase implements UseCase<number, Place> {
  constructor(private readonly placesRepository: IPlacesRepository) {}

  async execute(id: number): Promise<Place> {
    const place = await this.placesRepository.findById(id);
    if (!place) {
      throw new NotFoundException('Place not found');
    }
    return place;
  }
}
