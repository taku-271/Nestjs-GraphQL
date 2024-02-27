import { Module } from '@nestjs/common';
import { TodoResolvers } from './todo.resolver';
import { TodoService } from './todo.service';
import { PrismaService } from 'nestjs-prisma';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [TodoResolvers, TodoService, PrismaService, UserService],
})
export class TodoModule {}
