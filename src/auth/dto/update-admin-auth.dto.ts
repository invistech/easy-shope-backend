import { PartialType } from "@nestjs/swagger";
import { CreateAdminUserAuthDto } from "./create-admin-auth.dto";

export class UpdateAdminUserAuthDto extends PartialType(
  CreateAdminUserAuthDto
) {}
