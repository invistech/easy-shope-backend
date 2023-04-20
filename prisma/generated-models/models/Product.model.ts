import { IsString, IsDefined, IsDate } from "class-validator";
import { VarientsOfProducts, Collection } from "./";

export class Product {
    @IsDefined()
    @IsString()
    id!: string;

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
    varients!: VarientsOfProducts[];

    @IsDefined()
    itemIds!: number;

    @IsDefined()
    adminId!: number;

    @IsDefined()
    collection!: Collection;

    @IsDefined()
    @IsString()
    collectionId!: string;
}
