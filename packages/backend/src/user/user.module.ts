import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'nestjs-prisma';
import { TodoService } from 'src/todo/todo.service';
import { TodoDataLoader } from 'src/todo/todo.dataloader';

@Module({
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    TodoService,
    TodoDataLoader,
  ],
})
export class UserModule {}
