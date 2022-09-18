import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DataExtractFromTokenInterceptor } from 'src/@domain/extensions/data-extract-from-token.interceptor';
import { JwtAuthGuard } from 'src/@domain/guards/jwt-auth.guard';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService, private jwtService: JwtService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Headers() auth: any, @Body() createItemDto: CreateItemDto) {
    createItemDto.adminId = await auth.adminUserData.userId;
    return await this.itemService.createItemServiceFn(createItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any, adminId: number) {
    adminId = await auth.adminUserData.userId;
    return await this.itemService.findAllItemServiceFn(adminId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Headers() auth: any, @Param('id') id: string) {
    const adminId: number = await auth.adminUserData.userId;
    return await this.itemService.findOneItemServiceFn(adminId, +id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Headers() auth: any, @Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    const adminId: number = await auth.adminUserData.userId;
    return this.itemService.updateItemServiceFn(adminId, +id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
