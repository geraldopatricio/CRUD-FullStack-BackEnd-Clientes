import { SERVER_PORT } from './config/constants';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('API Cliente')
    .setDescription('API de cadastro de Clientes')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // server port
  const port = +configService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
  // console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
