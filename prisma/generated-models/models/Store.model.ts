import { IsString, IsDefined } from "class-validator";
import { OutletsOfStore } from "./";

export class Store {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    title!: string;

    @IsDefined()
    @IsString()
    description!: string;

    @IsDefined()
    outlets!: OutletsOfStore[];
}
