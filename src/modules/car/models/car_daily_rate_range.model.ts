import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CarDailyRateRange {
  min: number
  max: number
}
