import { Field, ObjectType } from '@nestjs/graphql'
import { BaseModel, Photo } from 'src/models'

import { CarManufacturer, CarSpecification } from './index'
@ObjectType()
export class Car extends BaseModel {
  model: string

  manufacturer?: CarManufacturer

  fullName?: string

  dailyRate: number

  photo?: Photo

  @Field(() => [CarSpecification], { nullable: true })
  specifications?: [CarSpecification]

  fuelType?: string
}
