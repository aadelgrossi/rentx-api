import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car } from './car.model'

export enum Specification {
  speed = 'speed',
  acceleration = 'acceleration',
  hp = 'hp',
  person = 'person'
}

registerEnumType(Specification, {
  name: 'Specification',
  description: 'Allowed specifications for Car'
})

@ObjectType()
export class CarSpecification extends BaseModel {
  @Field(() => Specification)
  name: Specification

  @Field(() => Car)
  car: Car

  @Field()
  value: string
}
