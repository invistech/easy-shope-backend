import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";
import { PrismaService } from "src/prisma.service";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ItemService } from '../item/item.service';
import { VarientService } from '../varient/varient.service';
import { VarientUnitService } from '../varient-unit/varient-unit.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, AuthService, JwtService],
})
export class ProductModule {}
