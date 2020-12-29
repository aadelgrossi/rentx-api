import { ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car, Specification } from './'

@ObjectType()
export class CarSpecification extends BaseModel {
  specification: Specification

  car: Car

  value: string
}
