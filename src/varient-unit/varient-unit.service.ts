import { Injectable } from '@nestjs/common';
import { CreateVarientUnitDto } from './dto/create-varient-unit.dto';
import { UpdateVarientUnitDto } from './dto/update-varient-unit.dto';

@Injectable()
export class VarientUnitService {
  create(createVarientUnitDto: CreateVarientUnitDto) {
    return 'This action adds a new varientUnit';
  }

  findAll() {
    return `This action returns all varientUnit`;
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
