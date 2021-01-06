import { UseGuards } from '@nestjs/common'
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent
} from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { CarService } from '../car/car.service'
import { FavoriteCar } from '../car/models'
import { ChangePasswordInput, UpdateUserInput } from './dto'
import { GqlAuthGuard } from './gql-auth.guard'
import { User } from './models/user.model'
import { UserEntity } from './user.decorator'
import { UserService } from './user.service'

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private userService: UserService,
    private carService: CarService,
    private prisma: PrismaService
  ) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user
  }

  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput
  ) {
    return this.userService.updateUser(user.id, newUserData)
  }

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

  @ResolveField('avatar')
  async avatar(@Parent() user: User) {
    return this.prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .avatar()
  }

  @ResolveField(() => FavoriteCar)
  async favoriteCar(@Parent() user: User) {
    return this.carService.getFavoriteCarForUser(user.id)
  }

  @ResolveField(() => Number)
  async totalRentals(@Parent() user: User) {
    return this.prisma.rental.count({
      where: {
        user
      }
    })
  }
}
