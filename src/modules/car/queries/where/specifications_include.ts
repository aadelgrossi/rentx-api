import { FuelType, Transmission } from '../../models'
import { whereFuelType } from './fuel_type'
import { whereTransmission } from './transmission'

interface SpecificationWhereArgs {
  fuelType: FuelType
  transmission: Transmission
}

export const specificationsInclude = ({
  fuelType,
  transmission
}: SpecificationWhereArgs) => {
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
