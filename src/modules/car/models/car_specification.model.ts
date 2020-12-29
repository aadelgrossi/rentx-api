import { Field, ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car, Specification } from './'

@ObjectType()
export class CarSpecification extends BaseModel {
  @Field(() => Specification)
  specification: Specification

  @Field(() => Car)
  car: Car

  @Field()
  value: string
}
