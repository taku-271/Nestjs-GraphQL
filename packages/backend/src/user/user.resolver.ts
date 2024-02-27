import { TodoDataLoader } from './../todo/todo.dataloader';
import { UserService } from './user.service';
import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
// import { QueryResolvers, User } from 'src/graphql/graphql';
import { User } from 'src/graphql/graphql';

// abstract class IUserResolvers implements QueryResolvers {
//   abstract getUsers: QueryResolvers['getUsers'];
//   abstract getUserById: QueryResolvers['getUserById'];
//   abstract getTodos: QueryResolvers['getTodos'];
// }

@Resolver('User')
// export class UserResolver implements IUserResolvers {
export class UserResolver {
  constructor(
    private readonly userService: UserService,
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
    return await this.todoDataLoader.load(user.id);
  }
}
