import { IsString, IsDefined } from "class-validator";
import { AddressesOfOutlets } from "./";

export class Address {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    outlets!: AddressesOfOutlets[];
}
