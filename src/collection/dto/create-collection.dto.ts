import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsString } from "class-validator";

export class CreateCollectionDto {
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
    productIds!: number;

    adminId!: number;
}
