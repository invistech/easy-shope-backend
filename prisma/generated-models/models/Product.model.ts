import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class Product {
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
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    @IsInt()
    varientIds!: number;

    @IsDefined()
    @IsInt()
    itemIds!: number;

    @IsDefined()
    @IsInt()
    adminId!: number;
}
