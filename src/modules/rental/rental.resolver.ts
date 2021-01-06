import { UseGuards } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { GqlAuthGuard } from '../user/gql-auth.guard'
import { User } from '../user/models'
import { UserEntity } from '../user/user.decorator'
import { CreateRentalInput } from './dto'
import { Rental } from './rental.model'
import { RentalService } from './rental.service'

@Resolver(() => Rental)
@UseGuards(GqlAuthGuard)
export class RentalResolver {
  constructor(
    private readonly rentalService: RentalService,
    private readonly prisma: PrismaService
  ) {}

  @Query(() => [Rental])
  async rentals(@UserEntity() { id }: User): Promise<Rental[]> {
    return this.rentalService.forUser(id)
  }

  @Mutation(() => Rental)
  async createRental(
    @UserEntity() user: User,
    @Args('data') data: CreateRentalInput
  ): Promise<Rental> {
    return this.rentalService.create({ ...data, userId: user.id })
  }

  @ResolveField('user')
  async user(@Parent() rental: Rental) {
    return await this.prisma.rental
      .findUnique({
        where: {
          id: rental.id
        }
      })
      .user()
  }

  @ResolveField('car')
  async car(@Parent() rental: Rental) {
    return await this.prisma.rental
      .findUnique({
        where: {
          id: rental.id
        }
      })
      .car()
  }
}
