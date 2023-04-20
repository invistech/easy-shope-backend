import { IsString, IsDefined, IsOptional, IsInt, IsDate } from "class-validator";
import { TypeOfItems, UnitOfItems, Varient } from "./";

export class Item {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    title!: string;

    @IsDefined()
    @IsString()
    description!: string;

    @IsOptional()
    type?: TypeOfItems;

    @IsDefined()
    @IsString()
    typeId!: string;

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

    @IsOptional()
    unit?: UnitOfItems;

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

    @IsDefined()
    varient!: Varient;

    @IsDefined()
    @IsString()
    varientId!: string;
}
