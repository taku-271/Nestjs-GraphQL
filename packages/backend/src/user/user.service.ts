import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.user.findMany();

    return users.map((user) => this.convertUser(user));
  }

  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return this.convertUser(user);
  }

  convertUser(user: User) {
    return {
      id: user.id,
      name: user.name,
    };
  }
}
