import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql'
import { PrismaService } from 'src/services'

import { CarService } from '../car.service'
import { CreateCarInput, CarFilterArgs } from '../dto'
import { BaseSpecs, Car, CarDailyRateRange } from '../models'

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
  async cars(
    @Args('filter', { nullable: true }) filterCarsArgs: CarFilterArgs
  ): Promise<Car[]> {
    return this.carService.cars(filterCarsArgs)
  }

  @Query(() => CarDailyRateRange)
  async dailyRateRange(): Promise<CarDailyRateRange> {
    return await this.carService.getDailyRateRange()
  }

  @Mutation(() => Car)
  async createCar(@Args('data') data: CreateCarInput): Promise<Car> {
    return this.carService.createCar(data)
  }

  @ResolveField('manufacturer')
  async manufacturer(@Parent() { id }: Car) {
    return await this.prisma.car
      .findUnique({
        where: { id }
      })
      .manufacturer()
  }

  @ResolveField('specifications')
  async specifications(@Parent() { id }: Car) {
    return await this.prisma.car
      .findUnique({
        where: { id }
      })
      .specifications()
  }

  @ResolveField('photo')
  async photo(@Parent() { id }: Car) {
    return await this.prisma.car
      .findUnique({
        where: { id }
      })
      .photo()
  }

  @ResolveField('fullName')
  async fullName(@Parent() car: Car) {
    const manufacturer = await this.prisma.car
      .findUnique({
        where: {
          id: car.id
        }
      })
      .manufacturer()

    return `${manufacturer.name} ${car.model}`
  }

  @ResolveField('fuelType')
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
