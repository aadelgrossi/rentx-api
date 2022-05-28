import { Prisma } from '@prisma/client'

type AvailabilityWhereArgs = { fromDate: Date; toDate: Date }
type AvailabilityFilter = (args: AvailabilityWhereArgs) => Prisma.CarWhereInput

export const availableBetween: AvailabilityFilter = args => {
  const { fromDate, toDate } = args
  if (!(fromDate && toDate)) return {}
  return {
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
}
