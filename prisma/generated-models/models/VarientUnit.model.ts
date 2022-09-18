import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class VarientUnit {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsInt()
    itemTypeId!: number;

    @IsDefined()
    @IsString()
    itemTypeName!: string;

    @IsDefined()
    @IsString()
    unitName!: string;

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
