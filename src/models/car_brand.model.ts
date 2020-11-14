import { ObjectType } from '@nestjs/graphql'

import { BaseModel } from './base.model'

@ObjectType()
export class CarBrand extends BaseModel {
  name: string
}
