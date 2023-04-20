import { IsString, IsDefined } from "class-validator";
import { User } from "./";

export class Cridential {
    @IsDefined()
    @IsString()
    userName!: string;

    @IsDefined()
    @IsString()
    password!: string;

    @IsDefined()
    @IsString()
    passwordHash!: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    mobileNumber!: string;

    @IsDefined()
    user!: User;

    @IsDefined()
    @IsString()
    userId!: string;
}
