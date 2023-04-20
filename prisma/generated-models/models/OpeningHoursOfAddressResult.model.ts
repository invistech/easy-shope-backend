import { Prisma } from "@prisma/client";
import { IsBoolean, IsDefined, IsString } from "class-validator";
import { PeriodOfAddressResult, ResultOfAddress } from "./";

export class OpeningHoursOfAddressResult {
    @IsDefined()
    @IsBoolean()
    openNow!: boolean;

    @IsDefined()
    weekdayText!: Prisma.JsonValue;

    @IsDefined()
    periods!: PeriodOfAddressResult[];

    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
