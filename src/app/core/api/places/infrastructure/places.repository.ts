/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/services/prisma.service';
import { IPlacesRepository } from '../domain/interfaces/IPlacesRepository';
import { CreatePlaceDto } from '../dtos/create-place.dto';
import { UpdatePlaceDto } from '../dtos/update-place.dto';
import { Place } from '@prisma/client';

@Injectable()
export class PlacesRepository implements IPlacesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    return await this.prisma.place.create({
      data: createPlaceDto,
    });
  }

  async findAll(accountId: number): Promise<Place[]> {
    return await this.prisma.place.findMany({
      where: {
        accountId,
      },
    });
  }

  async findById(id: number): Promise<Place | null> {
    return await this.prisma.place.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    return await this.prisma.place.update({
      where: {
        id,
      },
      data: updatePlaceDto,
    });
  }

  async delete(id: number): Promise<Place> {
    return await this.prisma.place.delete({
      where: {
        id,
      },
    });
  }
}
