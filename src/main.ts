import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';

async function bootstrap() {
  // create an app instance with CORS enabled
  const app = await NestFactory.create(AppModule, { cors: true });

  // helmet security-related HTTP headers
  app.use(helmet());

  // define a global validation pipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT);
}
import { from } from 'rxjs';
bootstrap();
