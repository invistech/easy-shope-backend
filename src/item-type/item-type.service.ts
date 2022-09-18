import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateItemTypeDto } from './dto/update-item-type.dto';

@Injectable()
export class ItemTypeService {
  constructor(
    private prismaService: PrismaService
  ) { }
  async create(data: Prisma.ItemTypeCreateInput) {
    const response = await this.prismaService.itemType.create({ data });
    return await {
      message: 'Item type created successfully.',
      id: response.id,
    }
  }

  async findAll(_adminId: number) {
    return await this.prismaService.itemType.findMany({
      where: { adminId: _adminId }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} itemType`;
  }

  update(id: number, updateItemTypeDto: UpdateItemTypeDto) {
    return `This action updates a #${id} itemType`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemType`;
  }
}
