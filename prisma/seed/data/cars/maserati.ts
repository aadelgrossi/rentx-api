import { Prisma } from '@prisma/client'

export const maserati: Prisma.CarCreateInput = {
  model: 'Levante',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Maserati'
      },
      where: {
        name: 'Maserati'
      }
    }
  },
  dailyRate: 1678,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/maserati.fw_d6mogb.png'
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
        value: 'hybrid'
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
        value: '5.6s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '286km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '580hp'
      }
    ]
  }
}
