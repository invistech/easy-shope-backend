import { IsString, IsDefined, IsOptional } from "class-validator";
import { AddressesOfOutlets, OutletsOfStore, CollectionsOfOutlets } from "./";

export class Outlet {
    @IsDefined()
    @IsString()
    id!: string;

    @IsOptional()
    address?: AddressesOfOutlets;

    @IsOptional()
    store?: OutletsOfStore;

    @IsDefined()
    collection!: CollectionsOfOutlets[];
}
