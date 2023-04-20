import { IsDefined, IsString } from "class-validator";
import { Resource, UserPermission } from "./";

export class ResourceOfUser {
    @IsDefined()
    resource!: Resource;

    @IsDefined()
    @IsString()
    resourceId!: string;

    @IsDefined()
    permission!: UserPermission;

    @IsDefined()
    @IsString()
    userId!: string;
}
