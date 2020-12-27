import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { BaseModel } from './base.model'
import { CarManufacturer } from './car_manufacturer.model'
import { Photo } from './photo.model'

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
}
