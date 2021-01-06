import { Prisma } from '@prisma/client'

export const whereFuelType = (value: string) =>
  value
    ? ({
        specification: {
          name: 'FuelType'
        },
        value
      } as Prisma.CarSpecificationWhereInput)
    : {}
