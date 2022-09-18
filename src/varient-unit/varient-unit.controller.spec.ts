import { Test, TestingModule } from '@nestjs/testing';
import { VarientUnitController } from './varient-unit.controller';
import { VarientUnitService } from './varient-unit.service';

describe('VarientUnitController', () => {
  let controller: VarientUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VarientUnitController],
      providers: [VarientUnitService],
    }).compile();

    controller = module.get<VarientUnitController>(VarientUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
