import { Field, ObjectType, HideField } from '@nestjs/graphql'
import { BaseModel, Photo } from 'src/models'

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string

  @Field()
  name: string

  @Field({ defaultValue: false })
  admin: boolean

  @Field(() => Photo)
  avatar?: Photo

  @HideField()
  password: string
}
