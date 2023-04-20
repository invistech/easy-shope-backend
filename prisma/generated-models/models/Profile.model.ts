import { IsDefined, IsString, IsOptional } from "class-validator";
import { User, AddressOfUser } from "./";

export class Profile {
    @IsDefined()
    user!: User;

    @IsDefined()
    @IsString()
    userId!: string;

    @IsDefined()
    @IsString()
    userName!: string;

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

    @IsOptional()
    address?: AddressOfUser;
}
