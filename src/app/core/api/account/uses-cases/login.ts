import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/app/shared/interfaces/use-case.interface';
import { LoginAccountDto } from '../dtos/login-account.dtos';
import { JwtTokenRepository } from '../domain/JwtRepository';
import { PrismaService } from 'src/app/core/database/services/prisma.service';
import { BadRequestError } from 'src/app/shared/utils/exceptions';

@Injectable()
export class LoginUseCase
  implements UseCase<LoginAccountDto, { id: number; token: string }>
{
  constructor(
    private readonly jwtTokenRepository: JwtTokenRepository,
    private readonly prisma: PrismaService,
  ) {}

  async execute(
    request: LoginAccountDto,
  ): Promise<{ id: number; token: string }> {
    const { name, phone } = request;

    const userFound = await this.prisma.account.findUnique({
      where: { name, phone },
    });

    if (!userFound) {
      throw new BadRequestError('User not found');
    }
    const token = await this.jwtTokenRepository.sign({ id: userFound.id });

    return { id: userFound.id, token };
  }
}
