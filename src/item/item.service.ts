import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemService {
  constructor(
    private prismaService: PrismaService
  ) { }
  async createItemServiceFn(data: Prisma.ItemCreateInput) {
    const result = await this.prismaService.item.create({ data })
    return {
      message: "Item created successfully.",
      id: result.id,
    }
  }

  async findAllItemServiceFn(adminId: number) {
    return this.prismaService.item.findMany({
      where: {
        adminId: adminId
      }
    })
  }

  async findOneItemServiceFn(adminId: number, id: number) {
    return await this.prismaService.item.findFirst({
      where: {
        adminId: adminId,
        id: id,
      }
    })
  }

  async updateItemServiceFn(adminId: number, id: number, data: Prisma.ItemUpdateInput) {
    return await this.prismaService.item.update({
      where: { id: id }, data
    })
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
