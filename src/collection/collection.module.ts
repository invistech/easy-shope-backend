import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { CollectionController } from './collection.controller';
import { CollectionService } from './collection.service';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService, PrismaService, AuthService, JwtService]
})
export class CollectionModule { }
