import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateRentalInput {
  userId: string

  carId: string

  startDate: string

  endDate: string
}
