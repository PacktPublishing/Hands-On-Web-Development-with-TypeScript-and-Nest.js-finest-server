import { Module, HttpModule } from '@nestjs/common';
import { FinestController } from './controllers/finest/finest.controller';
import { IexService } from './services/iex/iex.service';
import { ConfigService } from '../services/config/config.service';

@Module({
  imports: [HttpModule],
  controllers: [FinestController],
  providers: [IexService, ConfigService],
})
export class FinestModule { }
