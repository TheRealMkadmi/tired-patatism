import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {patchNestJsSwagger} from "nestjs-zod";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


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
            jsonDocumentUrl: '/json',
            swaggerOptions: {
                persistAuthorization: true,
            },
        },
    );

  await app.listen(3000);
}
bootstrap();
