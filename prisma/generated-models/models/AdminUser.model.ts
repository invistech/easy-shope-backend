import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class AdminUser {
    @IsDefined()
    @IsInt()
    id!: number;

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
