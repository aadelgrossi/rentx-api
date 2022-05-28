import { Prisma } from '@prisma/client'

import { BaseSpecs, FuelType } from '../../models'

type FuelTypeFilter = (value: FuelType) => Prisma.CarSpecificationWhereInput

export const whereFuelType: FuelTypeFilter = value => {
  if (!value) return {}
  return {
    specification: {
      name: BaseSpecs.FUEL_TYPE
    },
    value
  }
}
