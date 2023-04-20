import { IsString, IsDefined, IsDate } from "class-validator";
import "./";

export class AdminUser {
    @IsDefined()
    @IsString()
    id!: string;

    @IsDefined()
    @IsString()
    username!: string;

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
    @IsString()
    firstName!: string;

    @IsDefined()
    @IsString()
    lastName!: string;

    @IsDefined()
    @IsDate()
    createdAt!: Date;

    @IsDefined()
    @IsDate()
    updatedAt!: Date;
}
