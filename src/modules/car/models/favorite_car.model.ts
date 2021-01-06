import { ObjectType } from '@nestjs/graphql'

import { Car } from './'
@ObjectType({ isAbstract: true })
export class FavoriteCar extends Car {
  totalDays: number
  timesRented: number
}
