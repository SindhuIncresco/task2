import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule], // Add the TODO module to the imports array
  controllers: [],
  providers: [],
})
export class AppModule {}

