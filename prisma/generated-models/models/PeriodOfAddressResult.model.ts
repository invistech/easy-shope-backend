import { IsOptional, IsDefined, IsString } from "class-validator";
import { CloseOfPeriod, OpenOfPeriod, OpeningHoursOfAddressResult } from "./";

export class PeriodOfAddressResult {
    @IsOptional()
    close?: CloseOfPeriod;

    @IsOptional()
    open?: OpenOfPeriod;

    @IsDefined()
    openingHour!: OpeningHoursOfAddressResult;

    @IsDefined()
    @IsString()
    userId!: string;
}
