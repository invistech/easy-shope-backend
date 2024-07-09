import { Prisma } from "@prisma/client";
import { IsDefined, IsString } from "class-validator";
import { ResultOfAddress } from "./";

export class PhotoOfAddressResult {
    @IsDefined()
    height!: number;

    @IsDefined()
    htmlAttributions!: Prisma.JsonValue;

    @IsDefined()
    photoReference!: Prisma.JsonValue;

    @IsDefined()
    width!: number;

    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
