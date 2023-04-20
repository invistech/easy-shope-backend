import { IsDefined, IsString } from "class-validator";
import { ResourceOfUser, UserRole } from "./";

export class UserPermission {
    @IsDefined()
    resources!: ResourceOfUser[];

    @IsDefined()
    role!: UserRole;

    @IsDefined()
    @IsString()
    userId!: string;
}
