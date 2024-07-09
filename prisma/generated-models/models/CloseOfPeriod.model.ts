import { IsDefined, IsString } from "class-validator";
import { PeriodOfAddressResult } from "./";

export class CloseOfPeriod {
    @IsDefined()
    day!: number;

    @IsDefined()
    @IsString()
    time!: string;

    @IsDefined()
    period!: PeriodOfAddressResult;

    @IsDefined()
    @IsString()
    userId!: string;
}
