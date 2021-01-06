import { Field, ObjectType, HideField } from '@nestjs/graphql'
import { BaseModel, Photo } from 'src/models'

import { FavoriteCar } from '../../car/models'
import { Rental } from '../../rental/rental.model'

@ObjectType()
export class User extends BaseModel {
  email: string

  name: string

  @Field({ defaultValue: false })
  admin: boolean

  avatar?: Photo

  @HideField()
  password: string

  @Field(() => [Rental], { nullable: true })
  rentals?: [Rental]

  favoriteCar?: FavoriteCar

  totalRentals?: number
}
