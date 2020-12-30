import { CarWhereInput, Enumerable } from '@prisma/client'

import { CarFilterArgs } from '../dto'

export const buildCarFilterOptionsQuery = ({
  fullName,
  fuelType,
  minDailyRate,
  maxDailyRate,
  transmission
}: CarFilterArgs) => {
  const name: Enumerable<CarWhereInput> = {
    OR: [
      {
        model: {
          contains: fullName
        }
      },
      {
        manufacturer: {
          name: {
            contains: fullName
          }
        }
      }
    ]
  }

  const value: CarWhereInput = {
    dailyRate: {
      gte: minDailyRate,
      lte: maxDailyRate
    }
  }

  const specifications: CarWhereInput = {
    specifications: {
      every: {
        OR: [
          {
            specification: {
              name: 'FuelType'
            },
            value: fuelType
          },
          {
            specification: {
              name: 'Transmission'
            },
            value: transmission
          }
        ]
      }
    }
  }

  return {
    AND: { ...name, ...value, ...specifications }
  }
}
