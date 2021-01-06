import { Prisma } from '@prisma/client'

import { whereFuelType } from './fuel_type'
import { whereTransmission } from './transmission'

interface SpecificationWhereArgs {
  fuelType: string
  transmission: string
}

export const specificationsInclude = ({
  fuelType,
  transmission
}: SpecificationWhereArgs) =>
  transmission && fuelType
    ? ({
        AND: [
          {
            specifications: {
              some: { ...whereFuelType(fuelType) }
            }
          },
          {
            specifications: {
              some: { ...whereTransmission(transmission) }
            }
          }
        ]
      } as Prisma.CarWhereInput)
    : ({
        specifications: {
          some: {
            ...whereFuelType(fuelType),
            ...whereTransmission(transmission)
          }
        }
      } as Prisma.CarWhereInput)
