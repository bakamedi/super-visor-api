import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { IPlacesRepository } from '../domain/interfaces/IPlacesRepository';
import { Place } from '@prisma/client';

@Injectable()
export class GetPlacesUseCase implements UseCase<number, Place[]> {
  constructor(private readonly placesRepository: IPlacesRepository) {}

  async execute(accountId: number): Promise<Place[]> {
    return this.placesRepository.findAll(accountId);
  }
}
