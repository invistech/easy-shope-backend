import { PartialType } from "@nestjs/swagger";
import { CreateVarientUnitDto } from "./create-varient-unit.dto";

export class UpdateVarientUnitDto extends PartialType(CreateVarientUnitDto) {}
