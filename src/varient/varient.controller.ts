import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { DataExtractFromTokenInterceptor } from 'src/@domain/extensions/data-extract-from-token.interceptor';
import { JwtAuthGuard } from 'src/@domain/guards/jwt-auth.guard';
import { CreateVarientDto } from './dto/create-varient.dto';
import { UpdateVarientDto } from './dto/update-varient.dto';
import { VarientService } from './varient.service';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller('varients')
export class VarientController {
  constructor(private readonly varientService: VarientService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Headers() auth: any, @Body() createVarientDto: CreateVarientDto) {
    createVarientDto.adminId = await auth.adminUserData.userId;
    return await this.varientService.create(createVarientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    return await this.varientService.findAll(adminId);
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
