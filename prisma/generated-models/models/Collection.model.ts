import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class Collection {
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
    productIds!: number;

    @IsDefined()
    @IsInt()
    adminId!: number;
}
