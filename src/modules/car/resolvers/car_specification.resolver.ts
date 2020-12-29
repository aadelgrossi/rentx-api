import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { CarSpecification } from '../models'

@Resolver(() => CarSpecification)
export class CarSpecificationResolver {
  constructor(private readonly prisma: PrismaService) {}

  @ResolveField('specification')
  async specification(@Parent() { id }: CarSpecification) {
    return await this.prisma.carSpecification
      .findOne({
        where: { id }
      })
      .specification()
  }
}
