import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateTodoInput } from 'src/graphql/graphql';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodos() {
    return this.prisma.todo.findMany();
  }

  async getTodoById(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getTodoByUserId(userId: number) {
    return this.prisma.todo.findMany({
      where: {
        user_id: Number(userId),
      },
    });
  }

  async getTodosByUserIds(userIds: number[]) {
    return this.prisma.todo.findMany({
      where: {
        user_id: { in: userIds.map((id) => Number(id)) },
      },
    });
  }

  async createTodo(input: CreateTodoInput) {
    return this.prisma.todo.create({
      data: {
        title: input.title,
        user_id: input.user_id,
      },
    });
  }
}
