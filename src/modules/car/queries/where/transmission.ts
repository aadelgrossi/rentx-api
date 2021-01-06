import { Prisma } from '@prisma/client'

export const whereTransmission = (value: string) =>
  value
    ? ({
        specification: {
          name: 'Transmission'
        },
        value
      } as Prisma.CarSpecificationWhereInput)
    : {}
