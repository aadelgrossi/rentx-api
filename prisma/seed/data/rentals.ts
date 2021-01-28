import { Prisma } from '@prisma/client'
import { subDays } from 'date-fns'

const today = new Date()

export const rentalsData: Pick<
  Prisma.RentalCreateInput,
  'startDate' | 'endDate'
>[] = [
  {
    startDate: subDays(today, 180),
    endDate: subDays(today, 170)
  },
  {
    startDate: subDays(today, 46),
    endDate: subDays(today, 40)
  },
  {
    startDate: subDays(today, 210),
    endDate: subDays(today, 200)
  },
  {
    startDate: subDays(today, 192),
    endDate: subDays(today, 189)
  },
  {
    startDate: subDays(today, 110),
    endDate: subDays(today, 105)
  },
  {
    startDate: subDays(today, 215),
    endDate: subDays(today, 213)
  },
  {
    startDate: subDays(today, 30),
    endDate: subDays(today, 28)
  },
  {
    startDate: subDays(today, 57),
    endDate: subDays(today, 53)
  },
  {
    startDate: subDays(today, 128),
    endDate: subDays(today, 125)
  },
  {
    startDate: subDays(today, 89),
    endDate: subDays(today, 86)
  },
  {
    startDate: subDays(today, 250),
    endDate: subDays(today, 245)
  },
  {
    startDate: subDays(today, 197),
    endDate: subDays(today, 193)
  },
  {
    startDate: subDays(today, 70),
    endDate: subDays(today, 68)
  },
  {
    startDate: subDays(today, 49),
    endDate: subDays(today, 47)
  },
  {
    startDate: subDays(today, 23),
    endDate: subDays(today, 20)
  },
  {
    startDate: subDays(today, 35),
    endDate: subDays(today, 32)
  }
]
