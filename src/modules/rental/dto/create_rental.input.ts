import { InputType } from '@nestjs/graphql'
import { IsString } from 'class-validator'

import { IsEndDateAfter, IsValidMaxDate, MinDate } from '../validators'

@InputType()
export class CreateRentalInput {
  @IsString()
  userId: string

  @IsString()
  carId: string

  @MinDate()
  startDate: Date

  @IsEndDateAfter('startDate')
  @IsValidMaxDate()
  endDate: Date
}
