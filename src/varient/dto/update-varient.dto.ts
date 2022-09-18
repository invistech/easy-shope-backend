import { PartialType } from '@nestjs/swagger';
import { CreateVarientDto } from './create-varient.dto';

export class UpdateVarientDto extends PartialType(CreateVarientDto) {}
