import { IsString, IsDefined, IsOptional } from "class-validator";
import { UserPermission, User } from "./";

export class UserRole {
    @IsDefined()
    @IsString()
    name!: string;

    @IsOptional()
    permission?: UserPermission;

    @IsOptional()
    User?: User;

    @IsDefined()
    @IsString()
    userId!: string;
}
