import { Prisma } from '@prisma/client'

export const mazda: Prisma.CarCreateInput = {
  model: 'MX-5',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Mazda'
      },
      where: {
        name: 'Mazda'
      }
    }
  },
  dailyRate: 1217,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609467262/rentx/mazda_mx5_yecjdd.png'
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
        value: '5.9s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '217km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '181hp'
      }
    ]
  }
}
