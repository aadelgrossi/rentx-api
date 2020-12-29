import { InputType, Field } from '@nestjs/graphql'
import { ArrayMinSize } from 'class-validator'

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

  @ArrayMinSize(2)
  @Field(() => [CreateSpecificationInput], { nullable: true })
  specifications?: [CreateSpecificationInput]
}
