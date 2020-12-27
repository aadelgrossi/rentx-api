import { Field, ObjectType } from '@nestjs/graphql'

import { BaseModel } from './base.model'

@ObjectType()
export class CarManufacturer extends BaseModel {
  @Field()
  name: string
}
