import { Prisma } from "@prisma/client";
import { IsDefined, IsOptional, IsString } from "class-validator";
import { ResultOfAddress, Profile } from "./";

export class AddressOfUser {
    @IsDefined()
    htmlAttributions!: Prisma.JsonValue;

    @IsOptional()
    result?: ResultOfAddress;

    @IsDefined()
    status!: Prisma.JsonValue;

    @IsDefined()
    profile!: Profile;

    @IsDefined()
    @IsString()
    userId!: string;
}
