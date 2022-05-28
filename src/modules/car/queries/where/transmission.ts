import { BaseSpecs, Transmission } from '../../models'

export const whereTransmission = (value: Transmission) => {
  if (!value) return {}
  return {
    specification: {
      name: BaseSpecs.TRANSMISSION
    },
    value
  }
}
