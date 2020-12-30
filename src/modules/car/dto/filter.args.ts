import { InputType } from '@nestjs/graphql'

@InputType()
export class CarFilterArgs {
  fullName?: string

  minDailyRate?: number

  maxDailyRate?: number

  fuelType?: string

  transmission?: string
}
