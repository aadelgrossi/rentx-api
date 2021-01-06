import { ObjectType } from '@nestjs/graphql'

import { Car } from './'
@ObjectType()
export class FavoriteCar extends Car {
  totalDays: number
}
