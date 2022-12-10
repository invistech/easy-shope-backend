import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { UpdateItemTypeDto } from "./dto/update-item-type.dto";

@Injectable()
export class ItemTypeService {
  constructor(private prismaService: PrismaService) {}
  async create(data: Prisma.ItemTypeCreateInput) {
    const response = await this.prismaService.itemType.create({ data });
    return await {
      message: "Item type created successfully.",
      id: response.id,
    };
  }

  async findAll(_adminId: number) {
    return await this.prismaService.itemType.findMany({
      where: { adminId: _adminId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} itemType`;
  }

  async update(id: number, data: Prisma.ItemTypeUpdateInput) {
    const response = await this.prismaService.itemType.update({
      where: {id},
      data: {
        itemName: data.itemName
      }
    })
    return await {
      message: "Item type updated successfully.",
      id: response.id,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} itemType`;
  }
}
