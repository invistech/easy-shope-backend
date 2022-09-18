import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async create(data: Prisma.ProductCreateInput) {
    const response = await this.prismaService.product.create({ data });
    return await {
      message: "Product created successfully.",
      id: response.id,
    };
  }

  async findAll(_adminId: number) {
    return await this.prismaService.product.findMany({
      where: { adminId: _adminId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
