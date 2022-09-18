import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsString } from "class-validator";

export class CreateVarientDto {
    @ApiProperty()
    @IsDefined()
    @IsInt()
    id!: number;

    @ApiProperty()
    @IsDefined()
    @IsString()
    varientName!: string;

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
    @IsInt()
    varientUnitIds!: number;
}
