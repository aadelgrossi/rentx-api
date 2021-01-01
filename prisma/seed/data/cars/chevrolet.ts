import { Prisma } from '@prisma/client'

export const chevrolet: Prisma.CarCreateInput = {
  model: 'Corvette',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Chevrolet'
      },
      where: {
        name: 'Chevrolet'
      }
    }
  },
  dailyRate: 1674,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/corvette.fw_jodxro.png'
    }
  },
  specifications: {
    create: [
      {
        specification: {
          connect: {
            name: 'FuelType'
          }
        },
        value: 'gas'
      },
      {
        specification: {
          connect: {
            name: 'Transmission'
          }
        },
        value: 'manual'
      },
      {
        specification: {
          connect: {
            name: 'Seats'
          }
        },
        value: '2'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '2.8s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '312km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '495hp'
      }
    ]
  }
}
