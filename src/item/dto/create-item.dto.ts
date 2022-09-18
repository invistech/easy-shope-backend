import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsString } from "class-validator";

export class CreateItemDto {

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
    itemTypeId!: number;

    @ApiProperty()
    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    buyingPrice!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    additionalCost!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    totalCost!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    retailPrice!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    discountedPrice!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    wholesalePrice!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    invoicePrice!: number;

    @ApiProperty()
    @IsDefined()
    @IsString()
    featuredImage!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    productImage!: string;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    weight!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    unit!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    volume!: number;

    @ApiProperty()
    @IsDefined()
    @IsInt()
    quantity!: number;
    adminId!: number;
}
