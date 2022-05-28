import { Prisma } from '@prisma/client'

type RateArgs = { min: number; max: number }
type RateFilter = (args: RateArgs) => Prisma.CarWhereInput

export const valueIsBetween: RateFilter = args => {
  const { min: gte, max: lte } = args
  if (!gte && !lte) return {}
  return {
    dailyRate: { gte, lte }
  }
}
