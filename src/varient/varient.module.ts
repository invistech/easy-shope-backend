import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma.service";
import { VarientController } from "./varient.controller";
import { VarientService } from "./varient.service";

@Module({
  controllers: [VarientController],
  providers: [VarientService, PrismaService, AuthService, JwtService],
})
export class VarientModule {}
