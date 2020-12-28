import { Field, ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

@ObjectType()
export class CarManufacturer extends BaseModel {
  @Field()
  name: string
}
