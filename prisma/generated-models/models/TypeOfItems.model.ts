import { IsDefined, IsString } from "class-validator";
import { Item, Type } from "./";

export class TypeOfItems {
    @IsDefined()
    item!: Item;

    @IsDefined()
    @IsString()
    itemId!: string;

    @IsDefined()
    type!: Type;

    @IsDefined()
    @IsString()
    typeId!: string;
}
