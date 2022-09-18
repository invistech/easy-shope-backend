import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateVarientDto } from './dto/update-varient.dto';

@Injectable()
export class VarientService {
  constructor(
    private prismaService: PrismaService
  ) { }
  async create(data: Prisma.VarientCreateInput) {
    const response = await this.prismaService.varient.create({ data });
    return await {
      message: 'Varient created successfully.',
      id: response.id,
    }
  }

  async findAll(_adminId: number) {
    return await this.prismaService.varient.findMany({
      where: { adminId: _adminId }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} varient`;
  }

  update(id: number, updateVarientDto: UpdateVarientDto) {
    return `This action updates a #${id} varient`;
  }

  remove(id: number) {
    return `This action removes a #${id} varient`;
  }
}
