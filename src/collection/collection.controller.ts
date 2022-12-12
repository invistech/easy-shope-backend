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
import { CollectionService } from "./collection.service";
import { CreateCollectionDto } from "./dto/create-collection.dto";
import { UpdateCollectionDto } from "./dto/update-collection.dto";
import { ProductService } from '../product/product.service';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller("collections")
export class CollectionController {
  constructor(
    private readonly collectionService: CollectionService,
    private readonly productService: ProductService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Headers() auth: any,
    @Body() createCollectionDto: CreateCollectionDto
  ) {
    createCollectionDto.adminId = await auth.adminUserData.userId;
    return await this.collectionService.create(createCollectionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    const _products = await this.productService.findAll(adminId);
    const _collections = await this.collectionService.findAll(adminId);
    const response = await _collections.map(collection => {
      return {
        ...collection,
        products: collection.productIds.map(id => {
          return _products.find(product => product.id === id);
        })
      }
    })
    return await response;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.collectionService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCollectionDto: UpdateCollectionDto
  ) {
    return this.collectionService.update(+id, updateCollectionDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.collectionService.remove(+id);
  }
}
