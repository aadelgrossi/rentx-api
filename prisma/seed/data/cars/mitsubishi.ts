import { Prisma } from '@prisma/client'

export const mitsubishi: Prisma.CarCreateInput = {
  model: 'Eclipse Cross',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Mitsubishi'
      },
      where: {
        name: 'Mitsubishi'
      }
    }
  },
  dailyRate: 978,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609467676/rentx/mitsubishi_eclipse_cross_ujjgsu.png'
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
        value: '5'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '7.0s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '214km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '152hp'
      }
    ]
  }
}
