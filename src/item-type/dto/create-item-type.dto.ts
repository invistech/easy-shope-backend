import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

export class CreateItemTypeDto {
    @ApiProperty()
    @IsDefined()
    @IsString()
    itemName!: string;
}
