import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsString } from "class-validator";

export class CreateVarientUnitDto {
    @ApiProperty()
    @IsDefined()
    @IsInt()
    itemTypeId!: number;

    @ApiProperty()
    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    unitName!: string;
}

