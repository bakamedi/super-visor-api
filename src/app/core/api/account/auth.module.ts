import { Module } from '@nestjs/common';
import { BcryptRepository } from './domain/BcryptRepository';
import { JwtModule as Jwt } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoginUseCase } from './uses-cases/login';
import { JwtTokenRepository } from './domain/JwtRepository';
import { AccountController } from './controller/auth.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    Jwt.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
        };
      },
    }),
  ],
  controllers: [AccountController],
  providers: [BcryptRepository, JwtTokenRepository, LoginUseCase], // Agregado aquí
  exports: [BcryptRepository, JwtTokenRepository, LoginUseCase],
})
export class AuthModule {}
