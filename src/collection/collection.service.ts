import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {

  constructor(
    private prismaService: PrismaService
  ) { }

  async create(data: Prisma.CollectionCreateInput) {
    const response = await this.prismaService.collection.create({ data });
    return await {
      message: 'Collection created successfully.',
      id: response.id,
    }
  }

  async findAll(_adminId: number) {
    return await this.prismaService.collection.findMany({
      where: { adminId: _adminId }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
