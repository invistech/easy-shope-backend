import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class Varient {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsString()
    varientName!: string;

    @IsDefined()
    @IsInt()
    itemTypeId!: number;

    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @IsDefined()
    @IsInt()
    varientUnitIds!: number;

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
