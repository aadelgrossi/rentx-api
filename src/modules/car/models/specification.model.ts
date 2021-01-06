import { ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

export enum BaseSpecs {
  TRANSMISSION = 'Transmission',
  FUEL_TYPE = 'FuelType'
}

registerEnumType(BaseSpecs, { name: 'BaseSpecs' })

@ObjectType()
export class Specification extends BaseModel {
  name: string

  icon: string

  isIconValue?: boolean
}
