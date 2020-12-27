import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreatePhotoInput {
  @Field()
  url: string
}
