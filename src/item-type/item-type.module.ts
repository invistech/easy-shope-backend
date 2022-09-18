import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma.service";
import { ItemTypeController } from "./item-type.controller";
import { ItemTypeService } from "./item-type.service";

@Module({
  controllers: [ItemTypeController],
  providers: [ItemTypeService, PrismaService, AuthService, JwtService],
})
export class ItemTypeModule {}
