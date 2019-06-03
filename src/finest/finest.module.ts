import { Module } from '@nestjs/common';
import { FinestController } from './controllers/finest/finest.controller';

@Module({
  controllers: [FinestController],
})
export class FinestModule {}
