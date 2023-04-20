import { IsString, IsDefined, IsDate } from "class-validator";
import { Product, CollectionsOfOutlets } from "./";

export class Collection {
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
    @IsString()
    images!: string;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    products!: Product[];

    @IsDefined()
    outlets!: CollectionsOfOutlets[];

    @IsDefined()
    adminId!: number;
}
