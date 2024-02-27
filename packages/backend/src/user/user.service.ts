import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getUsersByIds(ids: number[]) {
    return await this.prisma.user.findMany({
      where: {
        id: {
          in: ids.map((id) => id),
        },
      },
    });
  }
}
