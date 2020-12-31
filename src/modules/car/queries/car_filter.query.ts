import {
  CarSpecificationWhereInput,
  CarWhereInput,
  Enumerable
} from '@prisma/client'

import { CarFilterArgs } from '../dto'

export const buildCarFilterOptionsQuery = ({
  fullName,
  fuelType,
  fromDate,
  toDate,
  transmission,
  maxDailyRate,
  minDailyRate
}: CarFilterArgs) => {
  const name: Enumerable<CarWhereInput> = fullName
    ? {
        OR: [
          {
            model: {
              contains: fullName,
              mode: 'insensitive'
            }
          },
          {
            manufacturer: {
              name: {
                contains: fullName,
                mode: 'insensitive'
              }
            }
          }
        ]
      }
    : {}

  const value: CarWhereInput =
    maxDailyRate || minDailyRate
      ? {
          dailyRate: {
            gte: minDailyRate,
            lte: maxDailyRate
          }
        }
      : {}

  const fuelTypeSpecFilter: CarSpecificationWhereInput = fuelType
    ? {
        specification: {
          name: 'FuelType'
        },
        value: fuelType
      }
    : {}

  const transmissionSpecFilter: CarSpecificationWhereInput = transmission
    ? {
        specification: {
          name: 'Transmission'
        },
        value: transmission
      }
    : {}

  const specifications: CarWhereInput =
    transmission && fuelType
      ? {
          AND: [
            {
              specifications: {
                some: { ...fuelTypeSpecFilter }
              }
            },
            {
              specifications: {
                some: { ...transmissionSpecFilter }
              }
            }
          ]
        }
      : {
          specifications: {
            some: {
              ...fuelTypeSpecFilter,
              ...transmissionSpecFilter
            }
          }
        }

  const availability: CarWhereInput =
    fromDate && toDate
      ? {
          Rental: {
            none: {
              AND: [
                {
                  OR: [
                    {
                      startDate: {
                        lte: fromDate
                      }
                    },
                    {
                      startDate: {
                        lte: toDate
                      }
                    }
                  ]
                },
                {
                  OR: [
                    {
                      endDate: {
                        gte: toDate
                      }
                    },
                    {
                      endDate: {
                        gte: fromDate
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      : {}

  return {
    AND: { ...name, ...value, ...specifications, ...availability }
  }
}
