import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { DataExtractFromTokenInterceptor } from 'src/@domain/extensions/data-extract-from-token.interceptor';
import { JwtAuthGuard } from 'src/@domain/guards/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Headers() auth: any, @Body() createProductDto: CreateProductDto) {
    createProductDto.adminId = await auth.adminUserData.userId;
    return await this.productService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    return await this.productService.findAll(adminId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
