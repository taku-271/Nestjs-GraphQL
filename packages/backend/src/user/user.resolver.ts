import { TodoDataLoader } from './../todo/todo.dataloader';
import { UserService } from './user.service';
import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { User } from 'src/graphql/graphql';
import { TodoService } from 'src/todo/todo.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly todoService: TodoService,
    private readonly todoDataLoader: TodoDataLoader,
  ) {}

  @Query('getUsers')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Query('getUserById')
  async getUserById(@Args('id') id: number) {
    return await this.userService.getUserById(id);
  }

  @ResolveField('todo')
  async getTodos(@Parent() user: User) {
    return this.todoDataLoader.load(user.id);
  }
}
