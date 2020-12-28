import { Field, ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car } from '../car/models'
import { User } from '../user/user.model'

@ObjectType()
export class Rental extends BaseModel {
  @Field(() => Car)
  car?: Car

  @Field(() => User)
  user?: User

  @Field()
  startDate: Date

  @Field()
  endDate: Date
}
