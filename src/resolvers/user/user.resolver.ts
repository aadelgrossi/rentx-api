import { Resolver } from '@nestjs/graphql'
import { User } from 'src/models/user.model'
import { PrismaService } from 'src/services/prisma.service'
import { UserService } from 'src/services/user.service'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService
  ) {}
}
