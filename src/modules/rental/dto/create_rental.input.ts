import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateRentalInput {
  @Field()
  userId: string

  @Field()
  carId: string

  @Field()
  startDate: string

  @Field()
  endDate: string
}
