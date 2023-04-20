import { IsDefined, IsString } from "class-validator";
import { Varient, Unit } from "./";

export class UnitOfVarient {
    @IsDefined()
    varient!: Varient;

    @IsDefined()
    @IsString()
    varientId!: string;

    @IsDefined()
    unit!: Unit;

    @IsDefined()
    @IsString()
    unitId!: string;
}
