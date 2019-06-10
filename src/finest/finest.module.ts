import { Module, HttpModule } from '@nestjs/common';
import { FinestController } from './controllers/finest/finest.controller';
import { IexService } from './services/iex/iex.service';

@Module({
  imports: [HttpModule],
  controllers: [FinestController],
  providers: [IexService],
})
export class FinestModule { }
