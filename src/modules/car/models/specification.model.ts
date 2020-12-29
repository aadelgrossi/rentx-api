import { ObjectType } from '@nestjs/graphql'
import { BaseModel } from 'src/models'

@ObjectType()
export class Specification extends BaseModel {
  name: string

  icon: string

  isIconValue?: boolean
}
