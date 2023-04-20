import { IsDefined, IsString } from "class-validator";
import { GeometryOfAddressResult } from "./";

export class LoctionOfGeometry {
    @IsDefined()
    lat!: number;

    @IsDefined()
    lng!: number;

    @IsDefined()
    geometry!: GeometryOfAddressResult;

    @IsDefined()
    @IsString()
    userId!: string;
}
