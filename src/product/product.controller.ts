import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { DataExtractFromTokenInterceptor } from "src/@domain/extensions/data-extract-from-token.interceptor";
import { JwtAuthGuard } from "src/@domain/guards/jwt-auth.guard";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "./product.service";
import { ItemService } from '../item/item.service';
import { VarientService } from '../varient/varient.service';
import { VarientUnitService } from '../varient-unit/varient-unit.service';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller("products")
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly itemService: ItemService,
    private readonly varientService: VarientService,
    private readonly varientUnitService: VarientUnitService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Headers() auth: any,
    @Body() createProductDto: CreateProductDto
  ) {
    createProductDto.adminId = await auth.adminUserData.userId;
    return await this.productService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    const _varients = await this.varientService.findAll(adminId);
    const _items = await this.itemService.findAllItemServiceFn(adminId);
    const _varientUnites = await this.varientUnitService.findAll(adminId);
    const _products = await this.productService.findAll(adminId)
    const response = await _products.map(product => {
      return {
        ...product,
        items: product.itemIds.map(id => {
          return _items.find(item => item.id === id)
        }),
        varients: product.varientIds.map(id => {
          return _varients.find(varient => varient.id === id)
        }).map(varient => {
          return {
            ...varient,
            varientUnits: varient.varientUnitIds.map(id => {
              return _varientUnites.find(unit => unit.id === id)
            })
          }
        })
      }
    })
    return await response;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
