import { Prisma } from '@prisma/client'

import { BaseSpecs, Transmission } from '../../models'

type TransmissionFilter = (
  args: Transmission
) => Prisma.CarSpecificationWhereInput

export const whereTransmission: TransmissionFilter = value => {
  if (!value) return {}
  return {
    specification: {
      name: BaseSpecs.TRANSMISSION
    },
    value
  }
}
