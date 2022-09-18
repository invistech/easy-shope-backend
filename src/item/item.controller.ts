import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetCurrentAdminUser } from 'src/@domain/extensions/getcurrentadminuser.decorator';
import { JwtAuthGuard } from 'src/@domain/guards/jwt-auth.guard';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService, private jwtService: JwtService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@GetCurrentAdminUser() token: any, @Headers() auth: any, @Body() createItemDto: CreateItemDto) {
    console.log(token)
    const userData = await this.jwtService.decode(
      auth.authorization.replace('Bearer ', ''),
    );
    console.log(userData);
    createItemDto.adminId = await JSON.parse(JSON.stringify(userData)).userId;
    // createItemDto.deletedAt = `${Date.now()}`;  
    return await this.itemService.createItemServiceFn(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
