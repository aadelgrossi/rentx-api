import { ObjectType } from '@nestjs/graphql'

import { BaseModel } from './base.model'
import { CarBrand } from './car_brand.model'

@ObjectType()
export class Car extends BaseModel {
  model: string

  brand: CarBrand

  year: number

  dailyRate: number
}
