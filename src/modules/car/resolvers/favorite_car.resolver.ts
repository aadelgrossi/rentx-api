import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Photo } from 'src/models'
import { PrismaService } from 'src/services'

import { BaseSpecs, Car, CarManufacturer, FavoriteCar } from '../models'

@Resolver(() => FavoriteCar)
export class FavoriteCarResolver {
  constructor(private readonly prisma: PrismaService) {}

  @ResolveField('manufacturer', () => CarManufacturer)
  async manufacturer(@Parent() { id }: Car) {
    return await this.prisma.car
      .findUnique({
        where: { id }
      })
      .manufacturer()
  }

  @ResolveField('photo', () => Photo)
  async photo(@Parent() { id }: Car) {
    return await this.prisma.car
      .findUnique({
        where: { id }
      })
      .photo()
  }

  @ResolveField('fuelType', () => String)
  async fuelType(@Parent() car: Car) {
    const fuelType = await this.prisma.carSpecification.findFirst({
      where: {
        carId: car.id,
        specification: {
          name: BaseSpecs.FUEL_TYPE
        }
      }
    })

    return fuelType.value
  }
}
