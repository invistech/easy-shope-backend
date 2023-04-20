import { Prisma } from "@prisma/client";
import { IsString, IsDefined } from "class-validator";
import { ResultOfAddress } from "./";

export class AddressComponentOfAddressResult {
    @IsDefined()
    @IsString()
    longName!: string;

    @IsDefined()
    @IsString()
    shortName!: string;

    @IsDefined()
    types!: Prisma.JsonValue;

    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
