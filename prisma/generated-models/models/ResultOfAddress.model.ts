import { Prisma } from "@prisma/client";
import { IsDefined, IsString, IsOptional } from "class-validator";
import { AddressComponentOfAddressResult, GeometryOfAddressResult, OpeningHoursOfAddressResult, PhotoOfAddressResult, PlusCodeOfAddressResult, ReviewOfAddressResult, AddressOfUser } from "./";

export class ResultOfAddress {
    @IsDefined()
    addressComponents!: AddressComponentOfAddressResult[];

    @IsDefined()
    adrAddress!: Prisma.JsonValue;

    @IsDefined()
    businessStatus!: Prisma.JsonValue;

    @IsDefined()
    formattedAddress!: Prisma.JsonValue;

    @IsDefined()
    @IsString()
    formattedPhoneNumber!: string;

    @IsOptional()
    geometry?: GeometryOfAddressResult;

    @IsDefined()
    @IsString()
    icon!: string;

    @IsDefined()
    @IsString()
    iconBackgroundColor!: string;

    @IsDefined()
    @IsString()
    iconMaskBaseUri!: string;

    @IsDefined()
    @IsString()
    FloaternationalPhoneNumber!: string;

    @IsDefined()
    @IsString()
    name!: string;

    @IsOptional()
    openingHours?: OpeningHoursOfAddressResult;

    @IsDefined()
    photos!: PhotoOfAddressResult[];

    @IsDefined()
    @IsString()
    placeId!: string;

    @IsOptional()
    plusCode?: PlusCodeOfAddressResult;

    @IsDefined()
    rating!: number;

    @IsDefined()
    @IsString()
    reference!: string;

    @IsDefined()
    reviews!: ReviewOfAddressResult[];

    @IsDefined()
    types!: Prisma.JsonValue;

    @IsDefined()
    @IsString()
    url!: string;

    @IsDefined()
    userRatingsTotal!: number;

    @IsDefined()
    utcOffset!: number;

    @IsDefined()
    @IsString()
    vicinity!: string;

    @IsDefined()
    @IsString()
    website!: string;

    @IsDefined()
    addressOfUser!: AddressOfUser;

    @IsDefined()
    @IsString()
    userId!: string;
}
