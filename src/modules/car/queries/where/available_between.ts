interface AvailabilityWhereArgs {
  fromDate: Date
  toDate: Date
}

export const availableBetween = ({
  fromDate,
  toDate
}: AvailabilityWhereArgs) => {
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
