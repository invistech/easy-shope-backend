import { IsOptional, IsDefined, IsString } from "class-validator";
import { LoctionOfGeometry, ViewportOfGeometry, ResultOfAddress } from "./";

export class GeometryOfAddressResult {
    @IsOptional()
    location?: LoctionOfGeometry;

    @IsOptional()
    viewport?: ViewportOfGeometry;

    @IsDefined()
    addressResult!: ResultOfAddress;

    @IsDefined()
    @IsString()
    userId!: string;
}
