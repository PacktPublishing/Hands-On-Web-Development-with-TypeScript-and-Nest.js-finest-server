import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinestModule } from './finest/finest.module';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [FinestModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
