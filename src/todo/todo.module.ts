import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(),],
  controllers: [TodoController],
  providers: [TodoService],
   
})
export class TodoModule {}




