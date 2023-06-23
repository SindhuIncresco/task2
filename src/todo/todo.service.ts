import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { db, Table } from '../db.config';


@Injectable()
export class TodoService {
//   private todos: Todo[] = [];

async createTodo(todo:Todo): Promise<any> {
  const params = {
    TableName: Table,
    Item:todo
  }
    await db.put(params).promise()
    return "user created"; 
}
async updateTodo(todoid: string, user: Todo): Promise<any> {
  const params = {
    TableName: Table,
    Key: {
      id: todoid
    },
    UpdateExpression:
    'set #title=:title, #completed =:completed',
    ExpressionAttributeValues: {
      ":title": user.title, ":completed": user.completed,
    },
    ExpressionAttributeNames: {
      "#title":"title" , 
      "#completed":"completed" ,
    }
  }
    await db.update(params).promise()
    return "user updated";
}


async deleteTodo(todoid1: String): Promise<any> {
  const params = {
    TableName: Table,
    Key: {
      id: todoid1
    }
  }
    await db.delete(params).promise();
    return "Deleted";
}

async getTodoById(userid: String): Promise<any> {
  const params = {
    TableName: Table,
    Key: {
      id: userid   }
    }
    const Item = await db.get(params).promise()
    return Item;
 }
}
