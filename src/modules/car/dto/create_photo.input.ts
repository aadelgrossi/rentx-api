import { InputType } from '@nestjs/graphql'

@InputType()
export class CreatePhotoInput {
  url: string
}
