import { Module } from '@nestjs/common';
import { VarientUnitService } from './varient-unit.service';
import { VarientUnitController } from './varient-unit.controller';

@Module({
  controllers: [VarientUnitController],
  providers: [VarientUnitService]
})
export class VarientUnitModule {}
