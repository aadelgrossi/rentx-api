import { Args, Parent, ResolveField, Resolver, Query } from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { CarSpecification } from '../models'

@Resolver(() => CarSpecification)
export class CarSpecificationResolver {
  constructor(private readonly prisma: PrismaService) {}

  @ResolveField('specification')
  async specification(@Parent() { id }: CarSpecification) {
    return await this.prisma.carSpecification
      .findUnique({
        where: { id }
      })
      .specification()
  }

  @Query(() => [CarSpecification])
  async specifications(@Args('carId') carId: string) {
    return await this.prisma.carSpecification.findMany({
      where: {
        carId
      }
    })
  }
}
