import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput, QueryResolvers } from 'src/graphql/graphql';

abstract class ITodoResolvers implements QueryResolvers {
  abstract getTodos: QueryResolvers['getTodos'];
  abstract getTodoById: QueryResolvers['getTodoById'];
}

// const getTodoById: QueryResolvers['getTodoById'] = (source, args, context) => {};

@Resolver('Todo')
export class TodoResolvers implements ITodoResolvers {
  constructor(private readonly todoService: TodoService) {}

  @Query('getTodos')
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Query('getTodoById')
  async getTodoById(@Args('id') id: number) {
    return this.todoService.getTodoById(id);
  }

  @Mutation('createTodo')
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.todoService.createTodo(input);
  }
}
