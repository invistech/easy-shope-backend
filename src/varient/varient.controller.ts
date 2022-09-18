import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVarientDto } from './dto/create-varient.dto';
import { UpdateVarientDto } from './dto/update-varient.dto';
import { VarientService } from './varient.service';

@Controller('varients')
export class VarientController {
  constructor(private readonly varientService: VarientService) { }

  @Post()
  create(@Body() createVarientDto: CreateVarientDto) {
    return this.varientService.create(createVarientDto);
  }

  @Get()
  findAll() {
    return this.varientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.varientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVarientDto: UpdateVarientDto) {
    return this.varientService.update(+id, updateVarientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.varientService.remove(+id);
  }
}
