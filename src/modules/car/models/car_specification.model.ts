import { ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car, Specification } from './'

export enum FuelType {
  GAS = 'gas',
  HYBRID = 'hybrid',
  ELECTRIC = 'electric'
}

export enum Transmission {
  AUTO = 'auto',
  MANUAL = 'manual'
}

registerEnumType(FuelType, { name: 'FuelType' })
registerEnumType(Transmission, { name: 'Transmission' })

@ObjectType()
export class CarSpecification extends BaseModel {
  specification: Specification

  car: Car

  value: string
}
