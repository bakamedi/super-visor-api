import { CreatePlaceDto } from '../../dtos/create-place.dto';
import { UpdatePlaceDto } from '../../dtos/update-place.dto';
import { Place } from '../Place';

export abstract class IPlacesRepository {
  abstract create(createPlaceDto: CreatePlaceDto): Promise<Place>;
  abstract findAll(accountId: number): Promise<Place[]>;
  abstract findById(id: number): Promise<Place | null>;
  abstract update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place>;
  abstract delete(id: number): Promise<Place>;
}
