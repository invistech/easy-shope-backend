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
import { CreateVarientDto } from "./dto/create-varient.dto";
import { UpdateVarientDto } from "./dto/update-varient.dto";
import { VarientService } from "./varient.service";
import { VarientUnitService } from '../varient-unit/varient-unit.service';
@UseInterceptors(DataExtractFromTokenInterceptor)
@Controller("varients")
export class VarientController {
  constructor(
    private readonly varientService: VarientService,
    private readonly varientUnitService:VarientUnitService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Headers() auth: any,
    @Body() createVarientDto: CreateVarientDto
  ) {
    createVarientDto.adminId = await auth.adminUserData.userId;
    return await this.varientService.create(createVarientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Headers() auth: any) {
    const adminId: number = await auth.adminUserData.userId;
    const varientUnits = await this.varientUnitService.findAll(adminId);
    const varients = await this.varientService.findAll(adminId);
    const response = await varients.map(varient => {
      return {
        ...varient,
        varientUnits: varient.varientUnitIds.map(unit => {
          return varientUnits.find(u => u.id === unit);
        })
      }
    })
    return await response;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.varientService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVarientDto: UpdateVarientDto) {
    return this.varientService.update(+id, updateVarientDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.varientService.remove(+id);
  }
}
