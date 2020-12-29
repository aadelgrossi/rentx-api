import { ObjectType } from '@nestjs/graphql'

import { BaseModel } from './base.model'

@ObjectType()
export class Photo extends BaseModel {
  url: string
}
