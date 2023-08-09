import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {patchNestJsSwagger} from "nestjs-zod";
import { ConsoleLogger } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new ConsoleLogger();
  logger.setContext('Bootstrap');
  app.enableCors({
    origin: '*',
  });
  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setVersion('1.0')
    .build();
  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(app, config, {
      operationIdFactory: (controllerKey, methodKey) => methodKey,
      deepScanRoutes: true,
    }),
    {
      yamlDocumentUrl: '/yaml',
    },
  );

  await app.listen(PORT || 3000, () =>
    logger.log(`Server started on port http://localhost:${PORT}`),
  );
  logger.log(`Swagger UI is available at http://localhost:${PORT}/api`);
}
bootstrap();
