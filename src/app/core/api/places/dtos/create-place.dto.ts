import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaceDto {
  @ApiProperty({
    description: 'Name of the place',
    example: 'Home',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Latitude of the place',
    example: -12.046374,
  })
  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @ApiProperty({
    description: 'Longitude of the place',
    example: -77.042793,
  })
  @IsNotEmpty()
  @IsNumber()
  longitude: number;

  @ApiProperty({
    description: 'Account ID',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  accountId: number;
}
