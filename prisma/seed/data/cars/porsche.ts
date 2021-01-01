import { Prisma } from '@prisma/client'

export const porsche: Prisma.CarCreateInput = {
  model: '911 Carrera',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Porsche'
      },
      where: {
        name: 'Porsche'
      }
    }
  },
  dailyRate: 1122,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1608355095/rentx/porsche.fw_vnh7h1.png'
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
        value: '4.2s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '306km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '379hp'
      }
    ]
  }
}
