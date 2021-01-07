import { ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car, Specification } from './'

export enum FuelType {
  gas = 'gas',
  hybrid = 'hybrid',
  electric = 'electric'
}

export enum Transmission {
  auto = 'auto',
  manual = 'manual'
}

registerEnumType(FuelType, { name: 'FuelType' })
registerEnumType(Transmission, { name: 'Transmission' })

@ObjectType()
export class CarSpecification extends BaseModel {
  specification: Specification

  car: Car

  value: string
}
