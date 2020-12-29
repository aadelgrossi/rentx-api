import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateManufacturerInput {
  name: string
}
