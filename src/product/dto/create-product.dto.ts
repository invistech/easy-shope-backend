import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  title!: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  description!: string;

  @ApiProperty()
  @IsDefined()
  @IsInt()
  varientIds!: number;

  @ApiProperty()
  @IsDefined()
  @IsInt()
  itemIds!: number;
  adminId!: number;
}
