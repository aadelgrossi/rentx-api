import { Prisma } from '@prisma/client'

export const astonMartin: Prisma.CarCreateInput = {
  model: 'DB9',
  manufacturer: {
    create: {
      name: 'Aston Martin'
    }
  },
  dailyRate: 721,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355094/rentx/aston_martin_qlnsdx.png'
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
        value: 'auto'
      },
      {
        specification: {
          connect: {
            name: 'Seats'
          }
        },
        value: '4'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '4.6s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '295km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '510hp'
      }
    ]
  }
}
