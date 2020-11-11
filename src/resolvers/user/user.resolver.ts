import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { UserEntity } from 'src/decorators/user.decorator'
import { User } from 'src/models/user.model'
import { PrismaService } from 'src/services/prisma.service'
import { UserService } from 'src/services/user.service'

import { ChangePasswordInput } from './dto/change-password.input'
import { UpdateUserInput } from './dto/update-user.input'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService
  ) {}

  @Query(returns => [User])
  async users(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  @Mutation(returns => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput
  ) {
    return this.userService.updateUser(user.id, newUserData)
  }

  @Mutation(returns => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput
  ) {
    return this.userService.changePassword(
      user.id,
      user.password,
      changePassword
    )
  }
}
