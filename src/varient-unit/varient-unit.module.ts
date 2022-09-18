import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { VarientUnitController } from './varient-unit.controller';
import { VarientUnitService } from './varient-unit.service';

@Module({
  controllers: [VarientUnitController],
  providers: [VarientUnitService, PrismaService, AuthService, JwtService]
})
export class VarientUnitModule { }
