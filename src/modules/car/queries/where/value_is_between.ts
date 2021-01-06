import { Prisma } from '@prisma/client'

interface MinMaxValueArgs {
  min: number
  max: number
}

export const valueIsBetween = ({ min, max }: MinMaxValueArgs) =>
  min || max
    ? ({
        dailyRate: {
          gte: min,
          lte: max
        }
      } as Prisma.CarWhereInput)
    : {}
