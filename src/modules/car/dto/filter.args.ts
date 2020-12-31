import { InputType } from '@nestjs/graphql'
import { IsEndDateAfter } from 'src/modules/rental/validators'

@InputType()
export class CarFilterArgs {
  fullName?: string

  minDailyRate?: number

  maxDailyRate?: number

  fuelType?: string

  transmission?: string

  fromDate?: Date

  @IsEndDateAfter('fromDate')
  toDate?: Date
}
