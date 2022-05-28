import { Prisma } from '@prisma/client'

import { FuelType, Transmission } from '../../models'
import { whereFuelType } from './fuel_type'
import { whereTransmission } from './transmission'

type SpecificationWhereArgs = { fuelType: FuelType; transmission: Transmission }
type SpecificationFilter = (
  args: SpecificationWhereArgs
) => Prisma.CarWhereInput

export const specificationsInclude: SpecificationFilter = args => {
  const { fuelType, transmission } = args
  if (transmission && fuelType) {
    return {
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
    }
  }

  return {
    specifications: {
      some: {
        ...whereFuelType(fuelType),
        ...whereTransmission(transmission)
      }
    }
  }
}
