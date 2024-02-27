import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateTodoInput, UpdateTodoInput } from 'src/graphql/graphql';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodos() {
    const todos = await this.prisma.todo.findMany();
    return todos.map((todo) => this.convertTodo(todo));
  }

  async getTodoById(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });

    return this.convertTodo(todo);
  }

  async getTodosByUserIds(userIds: number[]) {
    const todos = await this.prisma.todo.findMany({
      where: {
        user_id: { in: userIds.map((id) => Number(id)) },
      },
    });

    return todos.map((todo) => this.convertTodo(todo));
  }

  async createTodo(input: CreateTodoInput) {
    const todo = await this.prisma.todo.create({
      data: {
        title: input.title,
        user_id: input.userId,
      },
    });

    return this.convertTodo(todo);
  }

  async updateTodo(input: UpdateTodoInput) {
    const todo = await this.prisma.todo.update({
      where: {
        id: input.id,
      },
      data: {
        is_completed: input.isCompleted,
      },
    });

    return this.convertTodo(todo);
  }

  convertTodo(todo: Todo) {
    return {
      id: todo.id,
      title: todo.title,
      isCompleted: todo.is_completed,
      userId: todo.user_id,
    };
  }
}
