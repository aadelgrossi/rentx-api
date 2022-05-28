import { BaseSpecs, FuelType } from '../../models'

export const whereFuelType = (value: FuelType) => {
  if (!value) return {}
  return {
    specification: {
      name: BaseSpecs.FUEL_TYPE
    },
    value
  }
}
