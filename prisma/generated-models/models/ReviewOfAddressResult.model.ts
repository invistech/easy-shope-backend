import { IsDefined, IsString } from "class-validator";
import { ResultOfAddress } from "./";

export class ReviewOfAddressResult {
    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
