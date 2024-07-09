import { IsOptional, IsDefined, IsString } from "class-validator";
import { NorthestLoctionOfViewport, SouthwestLoctionOfViewport, GeometryOfAddressResult } from "./";

export class ViewportOfGeometry {
    @IsOptional()
    northest?: NorthestLoctionOfViewport;

    @IsOptional()
    southwest?: SouthwestLoctionOfViewport;

    @IsDefined()
    geometry!: GeometryOfAddressResult;

    @IsDefined()
    @IsString()
    userId!: string;
}
