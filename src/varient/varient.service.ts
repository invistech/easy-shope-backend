import { Injectable } from '@nestjs/common';
import { CreateVarientDto } from './dto/create-varient.dto';
import { UpdateVarientDto } from './dto/update-varient.dto';

@Injectable()
export class VarientService {
  create(createVarientDto: CreateVarientDto) {
    return 'This action adds a new varient';
  }

  findAll() {
    return `This action returns all varient`;
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
