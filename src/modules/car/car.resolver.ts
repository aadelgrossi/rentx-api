import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { CarService } from './car.service'
import { CreateCarInput } from './dto'
import { Car } from './models'

@Resolver(() => Car)
export class CarResolver {
  constructor(
    private readonly carService: CarService,
    private readonly prisma: PrismaService
  ) {}

  @Query(() => Car, { nullable: true })
  async car(@Args('id') id: string): Promise<Car> {
    return this.carService.car({ id })
  }

  @Query(() => [Car])
  async cars(): Promise<Car[]> {
    return this.carService.cars()
  }

  @Mutation(() => Car)
  async createCar(@Args('data') data: CreateCarInput): Promise<Car> {
    return this.carService.createCar(data)
  }

  @ResolveField('manufacturer')
  async manufacturer(@Parent() { id }: Car) {
    return await this.prisma.car
      .findOne({
        where: { id }
      })
      .manufacturer()
  }

  @ResolveField('specifications')
  async specifications(@Parent() { id }: Car) {
    return await this.prisma.car
      .findOne({
        where: { id }
      })
      .specifications()
  }

  @ResolveField('photo')
  async photo(@Parent() { id }: Car) {
    return await this.prisma.car
      .findOne({
        where: { id }
      })
      .photo()
  }
}
