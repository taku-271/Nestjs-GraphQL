import { TodoService } from 'src/todo/todo.service';
import { Injectable, Scope } from '@nestjs/common';
import { BaseDataLoader } from 'src/dataloader';
import { Todo } from 'src/graphql/graphql';

@Injectable({ scope: Scope.REQUEST })
export class TodoDataLoader extends BaseDataLoader<number, Todo[]> {
  constructor(private readonly todoService: TodoService) {
    super();
  }

  protected async batchLoad(userIds: number[]) {
    const todos = await this.todoService.getTodosByUserIds(userIds);

    const mappedTodosList = userIds.map((userId) => {
      const mappedTodos = todos.filter((todo) => todo.user_id === userId);

      return mappedTodos;
    });

    return mappedTodosList;
  }
}
