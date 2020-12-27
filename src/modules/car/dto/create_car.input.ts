import { InputType, Field } from '@nestjs/graphql'

import { Transmission, FuelType } from '../models/car.model'
import {
  CreateManufacturerInput,
  CreatePhotoInput,
  CreateSpecificationInput
} from './'

@InputType()
export class CreateCarInput {
  @Field()
  name: string

  @Field()
  dailyRate: number

  @Field()
  fuelType: FuelType

  @Field()
  transmission: Transmission

  @Field(() => CreateManufacturerInput)
  manufacturer: CreateManufacturerInput

  @Field(() => CreatePhotoInput, { nullable: true })
  photo?: CreatePhotoInput

  @Field(() => [CreateSpecificationInput], { nullable: true })
  specifications?: [CreateSpecificationInput]
}
