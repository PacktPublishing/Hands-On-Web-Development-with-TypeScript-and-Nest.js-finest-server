import { Test, TestingModule } from '@nestjs/testing';
import { IexService } from './iex.service';

describe('IexService', () => {
  let service: IexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IexService],
    }).compile();

    service = module.get<IexService>(IexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
