import { Prisma } from '@prisma/client'

interface AvailabilityWhereArgs {
  fromDate: Date
  toDate: Date
}

export const availableBetween = ({ fromDate, toDate }: AvailabilityWhereArgs) =>
  fromDate && toDate
    ? ({
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
      } as Prisma.CarWhereInput)
    : {}
