import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseModel, Photo } from 'src/models'

import { CarManufacturer, CarSpecification } from './index'

export enum FuelType {
  gas = 'gas',
  electric = 'electric',
  hybrid = 'hybrid'
}

export enum Transmission {
  auto = 'auto',
  manual = 'manual'
}

registerEnumType(FuelType, {
  name: 'FuelType',
  description: 'Allowed fuel types for car'
})

registerEnumType(Transmission, {
  name: 'Transmission',
  description: 'Allowed transmission modes for car'
})

@ObjectType()
export class Car extends BaseModel {
  @Field()
  name: string

  @Field(() => CarManufacturer)
  manufacturer?: CarManufacturer

  @Field()
  dailyRate: number

  @Field(() => Photo)
  photo?: Photo

  @Field(() => FuelType)
  fuelType: string

  @Field(() => Transmission)
  transmission: string

  @Field(() => [CarSpecification], { nullable: true })
  specifications?: [CarSpecification] | null
}
