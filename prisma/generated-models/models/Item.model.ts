import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class Item {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsString()
    title!: string;

    @IsDefined()
    @IsString()
    description!: string;

    @IsDefined()
    @IsInt()
    itemTypeId!: number;

    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @IsDefined()
    @IsInt()
    buyingPrice!: number;

    @IsDefined()
    @IsInt()
    additionalCost!: number;

    @IsDefined()
    @IsInt()
    totalCost!: number;

    @IsDefined()
    @IsInt()
    retailPrice!: number;

    @IsDefined()
    @IsInt()
    discountedPrice!: number;

    @IsDefined()
    @IsInt()
    wholesalePrice!: number;

    @IsDefined()
    @IsInt()
    invoicePrice!: number;

    @IsDefined()
    @IsString()
    featuredImage!: string;

    @IsDefined()
    @IsString()
    productImage!: string;

    @IsDefined()
    @IsInt()
    weight!: number;

    @IsDefined()
    @IsInt()
    unit!: number;

    @IsDefined()
    @IsInt()
    volume!: number;

    @IsDefined()
    @IsInt()
    quantity!: number;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    @IsInt()
    adminId!: number;
}
