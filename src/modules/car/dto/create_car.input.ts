import { InputType, Field } from '@nestjs/graphql'

import {
  CreateManufacturerInput,
  CreatePhotoInput,
  CreateSpecificationInput
} from './'

@InputType()
export class CreateCarInput {
  model: string

  dailyRate: number

  manufacturer: CreateManufacturerInput

  @Field(() => CreatePhotoInput, { nullable: true })
  photo?: CreatePhotoInput

  @Field(() => [CreateSpecificationInput], { nullable: true })
  specifications?: [CreateSpecificationInput]
}
