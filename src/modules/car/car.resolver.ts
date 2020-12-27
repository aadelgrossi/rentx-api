import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CarService } from './car.service'
import { CreateCarInput } from './dto'
import { Car } from './models/car.model'

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carService: CarService) {}

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
}
