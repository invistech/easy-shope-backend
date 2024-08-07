import { IsString, IsDefined, IsDate } from "class-validator";
import { TypeOfItems } from "./";

export class Type {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    items!: TypeOfItems[];

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    adminId!: number;
}
