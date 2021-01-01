import { Prisma } from '@prisma/client'

export const lexus: Prisma.CarCreateInput = {
  model: 'RC 350',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Lexus'
      },
      where: {
        name: 'Lexus'
      }
    }
  },
  dailyRate: 1290,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609467262/rentx/lexus_rc_350_ud0zdz.png'
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
        value: '250km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '311hp'
      }
    ]
  }
}
