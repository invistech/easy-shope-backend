import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

export class CreateCustomerAuthDto {
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
  firstName!: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastName!: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  email!: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  mobileNumber!: string;
}
