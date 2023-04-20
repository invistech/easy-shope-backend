import { IsDefined, IsString } from "class-validator";
import { ViewportOfGeometry } from "./";

export class NorthestLoctionOfViewport {
    @IsDefined()
    lat!: number;

    @IsDefined()
    lng!: number;

    @IsDefined()
    viewport!: ViewportOfGeometry;

    @IsDefined()
    @IsString()
    userId!: string;
}
