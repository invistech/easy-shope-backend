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
import { CreateVarientUnitDto } from "./dto/create-varient-unit.dto";
import { UpdateVarientUnitDto } from "./dto/update-varient-unit.dto";
import { VarientUnitService } from "./varient-unit.service";
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller("varient-units")
export class VarientUnitController {
  constructor(private readonly varientUnitService: VarientUnitService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Headers() auth: any,
    @Body() createVarientUnitDto: CreateVarientUnitDto
  ) {
    createVarientUnitDto.adminId = await auth.adminUserData.userId;
    return await this.varientUnitService.create(createVarientUnitDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    return await this.varientUnitService.findAll(adminId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.varientUnitService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVarientUnitDto: UpdateVarientUnitDto
  ) {
    return this.varientUnitService.update(+id, updateVarientUnitDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.varientUnitService.remove(+id);
  }
}
