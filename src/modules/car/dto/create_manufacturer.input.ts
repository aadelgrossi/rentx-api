import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateManufacturerInput {
  @Field()
  name: string
}
