import { IsString, IsDefined, IsOptional } from "class-validator";
import { Cridential, UserRole, Profile } from "./";

export class User {
    @IsDefined()
    @IsString()
    id!: string;

    @IsOptional()
    cridential?: Cridential;

    @IsDefined()
    role!: UserRole[];

    @IsOptional()
    profile?: Profile;
}
