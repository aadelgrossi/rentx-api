import { Prisma } from '@prisma/client'

export const toyota: Prisma.CarCreateInput = {
  model: 'Prius',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Toyota'
      },
      where: {
        name: 'Toyota'
      }
    }
  },
  dailyRate: 320,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609466570/rentx/toyota_prius_g4dqnc.png'
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
        value: 'electric'
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
        value: '10.3s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '165km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '122hp'
      }
    ]
  }
}
