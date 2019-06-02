import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinestModule } from './finest/finest.module';

@Module({
  imports: [FinestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
