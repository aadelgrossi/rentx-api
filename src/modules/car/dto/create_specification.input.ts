import { InputType, Field } from '@nestjs/graphql'
@InputType()
export class CreateSpecificationInput {
  name: string

  value: string

  icon?: string

  @Field(() => Boolean, { defaultValue: false })
  isIconValue?: boolean
}
