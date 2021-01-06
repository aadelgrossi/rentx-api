import { Prisma } from '@prisma/client'

import { BaseSpecs, FuelType } from '../../models'

export const whereFuelType = (value: FuelType) =>
  value
    ? ({
        specification: {
          name: BaseSpecs.FUEL_TYPE
        },
        value
      } as Prisma.CarSpecificationWhereInput)
    : {}
