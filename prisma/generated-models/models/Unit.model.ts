import { IsString, IsDefined, IsDate } from "class-validator";
import { UnitOfItems, UnitOfVarient } from "./";

export class Unit {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    items!: UnitOfItems[];

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
    adminId!: number;

    @IsDefined()
    varients!: UnitOfVarient[];
}
