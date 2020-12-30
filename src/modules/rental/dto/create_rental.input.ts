import { InputType } from '@nestjs/graphql'
import { IsString, MaxDate, MinDate } from 'class-validator'
import { addDays } from 'date-fns'

import { IsValidEndDate } from '../validate.decorator'

@InputType()
export class CreateRentalInput {
  @IsString()
  userId: string

  @IsString()
  carId: string

  @MinDate(new Date(), {
    message: 'Start date must be today or later.'
  })
  startDate: Date

  @IsValidEndDate()
  @MaxDate(addDays(new Date(), 60), {
    message: 'Maximum rental period of 60 days.'
  })
  endDate: Date
}
