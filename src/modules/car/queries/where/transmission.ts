import { Prisma } from '@prisma/client'

import { BaseSpecs, Transmission } from '../../models'

export const whereTransmission = (value: Transmission) =>
  value
    ? ({
        specification: {
          name: BaseSpecs.TRANSMISSION
        },
        value
      } as Prisma.CarSpecificationWhereInput)
    : {}
