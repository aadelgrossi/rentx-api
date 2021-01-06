import { Prisma } from '@prisma/client'

import { CarFilterArgs } from '../dto'
import {
  availableBetween,
  nameContains,
  specificationsInclude,
  valueIsBetween
} from './where'

export const buildCarFilterOptionsQuery = ({
  fullName,
  fuelType,
  fromDate,
  toDate,
  transmission,
  maxDailyRate,
  minDailyRate
}: CarFilterArgs) => {
  return {
    ...nameContains(fullName),
    ...valueIsBetween({ min: minDailyRate, max: maxDailyRate }),
    ...specificationsInclude({ fuelType, transmission }),
    ...availableBetween({ fromDate, toDate })
  } as Prisma.CarWhereInput
}
