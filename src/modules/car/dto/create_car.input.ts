import { InputType, Field } from '@nestjs/graphql'

import { Transmission, FuelType } from '../models/car.model'
import { CreateManufacturerInput } from './create_manufacturer.input'
import { CreatePhotoInput } from './create_photo.input'

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

  @Field()
  manufacturer: CreateManufacturerInput

  @Field()
  photo?: CreatePhotoInput
}
