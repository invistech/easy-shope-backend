import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class ItemType {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsString()
    itemName!: string;

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
