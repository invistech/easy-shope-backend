import { IsString, IsDefined, IsInt, IsOptional, IsDate } from "class-validator";
import { UnitOfVarient, VarientsOfProducts, Item } from "./";

export class Varient {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsInt()
    itemTypeId!: number;

    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @IsOptional()
    unit?: UnitOfVarient;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    products!: VarientsOfProducts[];

    @IsDefined()
    @IsString()
    productId!: string;

    @IsDefined()
    items!: Item[];

    @IsDefined()
    @IsInt()
    adminId!: number;
}
