import { InputType, Field } from '@nestjs/graphql'

import { Specification } from '../models'

@InputType()
export class CreateSpecificationInput {
  @Field()
  name: Specification

  @Field()
  value: string
}
