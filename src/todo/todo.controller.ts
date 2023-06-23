import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
 
  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() todo: Todo) {
    const updateuser = await this.todoService.updateTodo(id,todo)
  }

  @Get(':id')
  async getTodoById(@Param('id') id: string) {
    const speuser = await this.todoService.getTodoById(id)
      return speuser;
  }
  @Delete(':id')
async deleteTodo(@Param('id') id: string) {
  const deleteuser = await this.todoService.deleteTodo(id)
}
@Post('create')
  async createTodo( @Body() todo:Todo) {
    const crtuser = await this.todoService.createTodo(todo)
  }


}
  // @Get(':id')
  // getTodoById(@Param('id') id: string): Todo {
  //   return this.todoService.getTodoById(id);
  // }
  // @Get('all')
  // async getUser() {

  //   console.log(process.env.AWS_REGION)
  //   const alluser = await this.getUser;
  //   if (!alluser) {
  //     return "failed"
  //   }
  //   else {
  //     return alluser
  //   }
  // }
  
//   @Post()
// createTodo(
//   @Param('title') title: string,
//   @Param('completed') completed: boolean,
//   @Body() todo: Todo,
// ): Todo {
//   return this.todoService.createTodo(todo.title, todo.completed);
// }

// @Put(':id')
// updateTodo(
//   @Param('id') id: string,
//   @Body() updatedTodo: Todo,
// ): Todo {
//   return this.todoService.updateTodo(id, updatedTodo.title, updatedTodo.completed);
// }


  // @Delete(':id')
  // deleteTodoById(@Param('id') id: string): void {
  //   this.todoService.deleteTodo(id);
  // }
//}
