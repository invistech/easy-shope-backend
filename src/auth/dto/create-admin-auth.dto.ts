import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';
import { IsDefined, IsString } from "class-validator";
export class CreateAdminUserAuthDto {
    @ApiProperty()
    @IsDefined()
    @IsString()
    username!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    password!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    email!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    mobileNumber!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    firstName!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    lastName!: string;
}

export class LoginAdminUserAuthDto {

    @ApiProperty()
    @IsDefined()
    @IsString()
    password!: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    email!: string;
}

export class SubmitAdminAuthDto {
    username!: string;
    password!: string;
    email!: string;
    mobileNumber!: string;
    firstName!: string;
    lastName!: string;
    passwordHash!: string;
    _hash = async (): Promise<String> => await bcrypt.genSalt();
    _hashPassword = async () => await bcrypt.hash(this.password, `${this._hash}`);
    async submitFn(data: CreateAdminUserAuthDto) {
        return await {
            username: data.username,
            password: `${this._hashPassword}`,
            email: data.email,
            mobileNumber: data.mobileNumber,
            firstName: data.firstName,
            lastName: data.lastName,
            passwordHash: `${this._hash}`
        }

    }
}