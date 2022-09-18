import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVarientUnitDto } from './dto/create-varient-unit.dto';
import { UpdateVarientUnitDto } from './dto/update-varient-unit.dto';
import { VarientUnitService } from './varient-unit.service';

@Controller('varient-units')
export class VarientUnitController {
  constructor(private readonly varientUnitService: VarientUnitService) { }

  @Post()
  create(@Body() createVarientUnitDto: CreateVarientUnitDto) {
    return this.varientUnitService.create(createVarientUnitDto);
  }

  @Get()
  findAll() {
    return this.varientUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.varientUnitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVarientUnitDto: UpdateVarientUnitDto) {
    return this.varientUnitService.update(+id, updateVarientUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.varientUnitService.remove(+id);
  }
}
