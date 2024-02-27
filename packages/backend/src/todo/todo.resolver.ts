import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import {
  CreateTodoInput,
  QueryResolvers,
  UpdateTodoInput,
} from 'src/graphql/graphql';

abstract class ITodoResolvers implements QueryResolvers {
  abstract getTodos: QueryResolvers['getTodos'];
  abstract getTodoById: QueryResolvers['getTodoById'];
}

@Resolver('Todo')
export class TodoResolvers implements ITodoResolvers {
  constructor(private readonly todoService: TodoService) {}

  @Query('getTodos')
  async getTodos() {
    return await this.todoService.getTodos();
  }

  @Query('getTodoById')
  async getTodoById(@Args('id') id: number) {
    return await this.todoService.getTodoById(id);
  }

  @Mutation('createTodo')
  async createTodo(@Args('input') input: CreateTodoInput) {
    return await this.todoService.createTodo(input);
  }

  @Mutation('updateTodo')
  async updateTodo(@Args('input') input: UpdateTodoInput) {
    return await this.todoService.updateTodo(input);
  }
}
