import { Prisma } from "@prisma/client";
import { IsString, IsDefined } from "class-validator";
import { ResourceOfUser } from "./";

export class Resource {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    path!: Prisma.JsonValue;

    @IsDefined()
    metadata!: Prisma.JsonValue;

    @IsDefined()
    permissions!: ResourceOfUser[];
}
