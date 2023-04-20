import { IsDefined, IsString } from "class-validator";
import { Address, Outlet } from "./";

export class AddressesOfOutlets {
    @IsDefined()
    address!: Address;

    @IsDefined()
    @IsString()
    addressId!: string;

    @IsDefined()
    outlet!: Outlet;

    @IsDefined()
    @IsString()
    outletId!: string;
}
