import { Test, TestingModule } from '@nestjs/testing';
import { FinestController } from './finest.controller';

describe('Finest Controller', () => {
  let controller: FinestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinestController],
    }).compile();

    controller = module.get<FinestController>(FinestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
