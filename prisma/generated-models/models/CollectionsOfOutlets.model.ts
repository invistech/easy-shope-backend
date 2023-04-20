import { IsDefined, IsString } from "class-validator";
import { Collection, Outlet } from "./";

export class CollectionsOfOutlets {
    @IsDefined()
    collection!: Collection;

    @IsDefined()
    @IsString()
    collectionId!: string;

    @IsDefined()
    outlet!: Outlet;

    @IsDefined()
    @IsString()
    outletId!: string;
}
