import { Test, TestingModule } from "@nestjs/testing";
import { VarientUnitService } from "./varient-unit.service";

describe("VarientUnitService", () => {
  let service: VarientUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VarientUnitService],
    }).compile();

    service = module.get<VarientUnitService>(VarientUnitService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
