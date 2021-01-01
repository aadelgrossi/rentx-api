import { Prisma } from '@prisma/client'

export const lamborghini: Prisma.CarCreateInput = {
  model: 'Huracan EVO',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Lamborghini'
      },
      where: {
        name: 'Lamborghini'
      }
    }
  },
  dailyRate: 1845,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/lamborghini.fw_ctoafp.png'
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
        value: '2.9s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '325km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '645hp'
      }
    ]
  }
}
