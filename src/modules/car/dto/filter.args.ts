import { InputType } from '@nestjs/graphql'
import { IsEndDateAfter } from 'src/modules/rental/validators'

import { FuelType, Transmission } from '../models'

@InputType()
export class CarFilterArgs {
  fullName?: string

  minDailyRate?: number

  maxDailyRate?: number

  fuelType?: FuelType

  transmission?: Transmission

  fromDate?: Date

  @IsEndDateAfter('fromDate')
  toDate?: Date
}
