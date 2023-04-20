import { IsDefined, IsString } from "class-validator";
import { Store, Outlet } from "./";

export class OutletsOfStore {
    @IsDefined()
    store!: Store;

    @IsDefined()
    @IsString()
    storeId!: string;

    @IsDefined()
    outlets!: Outlet;

    @IsDefined()
    @IsString()
    outletId!: string;
}
