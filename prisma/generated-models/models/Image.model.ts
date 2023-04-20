import { IsString, IsDefined, IsBoolean, IsDate } from "class-validator";
import "./";

export class Image {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    path!: string;

    @IsDefined()
    @IsString()
    size!: string;

    @IsDefined()
    @IsBoolean()
    isDeleted!: boolean;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;
}
