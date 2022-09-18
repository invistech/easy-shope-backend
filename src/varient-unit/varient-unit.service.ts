import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UpdateVarientUnitDto } from "./dto/update-varient-unit.dto";

@Injectable()
export class VarientUnitService {
  constructor(private prismaService: PrismaService) {}
  async create(data: Prisma.VarientUnitCreateInput) {
    const response = await this.prismaService.varientUnit.create({ data });
    return await {
      message: "Varient unit created successfully.",
      id: response.id,
    };
  }

  async findAll(_adminId: number) {
    return await this.prismaService.varientUnit.findMany({
      where: { adminId: _adminId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} varientUnit`;
  }

  update(id: number, updateVarientUnitDto: UpdateVarientUnitDto) {
    return `This action updates a #${id} varientUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} varientUnit`;
  }
}
