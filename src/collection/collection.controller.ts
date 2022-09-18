import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { DataExtractFromTokenInterceptor } from 'src/@domain/extensions/data-extract-from-token.interceptor';
import { JwtAuthGuard } from 'src/@domain/guards/jwt-auth.guard';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller('collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Headers() auth: any, @Body() createCollectionDto: CreateCollectionDto) {
    createCollectionDto.adminId = await auth.adminUserData.userId;
    return await this.collectionService.create(createCollectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    return await this.collectionService.findAll(adminId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollectionDto: UpdateCollectionDto) {
    return this.collectionService.update(+id, updateCollectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionService.remove(+id);
  }
}
