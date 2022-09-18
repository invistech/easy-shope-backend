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
import { CreateItemTypeDto } from "./dto/create-item-type.dto";
import { UpdateItemTypeDto } from "./dto/update-item-type.dto";
import { ItemTypeService } from "./item-type.service";

@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller("item-types")
export class ItemTypeController {
  constructor(private readonly itemTypeService: ItemTypeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Headers() auth: any,
    @Body() createItemTypeDto: CreateItemTypeDto
  ) {
    createItemTypeDto.adminId = await auth.adminUserData.userId;
    return this.itemTypeService.create(createItemTypeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    return this.itemTypeService.findAll(adminId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.itemTypeService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateItemTypeDto: UpdateItemTypeDto
  ) {
    return this.itemTypeService.update(+id, updateItemTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.itemTypeService.remove(+id);
  }
}
