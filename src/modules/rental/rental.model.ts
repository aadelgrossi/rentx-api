import { ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

import { Car } from '../car/models'
import { User } from '../user/models'

@ObjectType()
export class Rental extends BaseModel {
  car?: Car

  user?: User

  startDate: Date

  endDate: Date
}
