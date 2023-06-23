import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TodoModule } from './todo/todo.module';
//default
// import * as AWS from 'aws-sdk';

// AWS.config.update({
//   region: "eu-north-1",
//   accessKeyId: "AKIAWF2IOII63NXF4GNJ",
//   secretAccessKey: "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"
// })
// const dynamodb = new AWS.DynamoDB.DocumentClient();
async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  
  const config = new DocumentBuilder()
    .setTitle('Todo List')
    .setDescription('CRUD operation')
    .setVersion('1.0')
    .addTag('crud')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();



