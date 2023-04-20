import { IsString, IsDefined, IsOptional, IsDate } from "class-validator";
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
    buyingPrice!: number;

    @IsDefined()
    additionalCost!: number;

    @IsDefined()
    totalCost!: number;

    @IsDefined()
    retailPrice!: number;

    @IsDefined()
    discountedPrice!: number;

    @IsDefined()
    wholesalePrice!: number;

    @IsDefined()
    invoicePrice!: number;

    @IsDefined()
    @IsString()
    featuredImage!: string;

    @IsDefined()
    @IsString()
    productImage!: string;

    @IsDefined()
    weight!: number;

    @IsOptional()
    unit?: UnitOfItems;

    @IsDefined()
    volume!: number;

    @IsDefined()
    quantity!: number;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    adminId!: number;

    @IsDefined()
    varient!: Varient;

    @IsDefined()
    @IsString()
    varientId!: string;
}
