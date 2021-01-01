import { Prisma } from '@prisma/client'

export const specificationsData: Prisma.SpecificationCreateInput[] = [
  {
    name: 'FuelType',
    icon: 'fuel',
    isIconValue: true
  },
  {
    name: 'Transmission',
    icon: 'transmission'
  },
  {
    name: 'Horsepower',
    icon: 'hp'
  },
  {
    name: 'Acceleration',
    icon: 'acceleration'
  },
  {
    name: 'MaxSpeed',
    icon: 'speed'
  },
  {
    name: 'Seats',
    icon: 'person'
  }
]
