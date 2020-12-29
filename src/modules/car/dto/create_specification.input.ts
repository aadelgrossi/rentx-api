import { InputType, Field } from '@nestjs/graphql'
@InputType()
export class CreateSpecificationInput {
  @Field()
  name: string

  @Field()
  value: string

  @Field()
  icon?: string

  @Field(() => Boolean, { defaultValue: false })
  isIconValue: boolean
}
