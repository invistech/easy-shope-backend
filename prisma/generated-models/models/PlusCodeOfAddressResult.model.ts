import { IsDefined, IsString } from "class-validator";
import { ResultOfAddress } from "./";

export class PlusCodeOfAddressResult {
    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
