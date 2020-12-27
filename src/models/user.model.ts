import { Field, ObjectType, HideField } from '@nestjs/graphql'

import { BaseModel } from './base.model'

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string

  @Field()
  name: string

  @Field({ defaultValue: false })
  admin: boolean

  @HideField()
  password: string
}
