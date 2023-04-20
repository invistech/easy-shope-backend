import { IsDefined, IsString } from "class-validator";
import { Item, Unit } from "./";

export class UnitOfItems {
    @IsDefined()
    item!: Item;

    @IsDefined()
    @IsString()
    itemId!: string;

    @IsDefined()
    unit!: Unit;

    @IsDefined()
    @IsString()
    unitId!: string;
}
