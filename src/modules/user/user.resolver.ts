import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { ChangePasswordInput } from './dto/change-password.input'
import { UpdateUserInput } from './dto/update-user.input'
import { GqlAuthGuard } from './gql-auth.guard'
import { UserEntity } from './user.decorator'
import { User } from './user.model'
import { UserService } from './user.service'

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService
  ) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput
  ) {
    return this.userService.updateUser(user.id, newUserData)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
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
