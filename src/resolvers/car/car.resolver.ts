import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Car } from 'src/models/car.model'
import { CarService } from 'src/services/car.service'

import { CreateCarInput } from './dto/create_car.input'
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
