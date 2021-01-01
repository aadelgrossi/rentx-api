import { Prisma } from '@prisma/client'

export const tesla: Prisma.CarCreateInput = {
  model: 'Model S',
  manufacturer: {
    connectOrCreate: {
      create: {
        name: 'Tesla'
      },
      where: {
        name: 'Tesla'
      }
    }
  },
  dailyRate: 995,
  photo: {
    create: {
      url:
        'https://res.cloudinary.com/andre-grossi/image/upload/v1609466589/rentx/tesla_model_s_t6bsoc.png'
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
        value: '4'
      },
      {
        specification: {
          connect: {
            name: 'Acceleration'
          }
        },
        value: '3.2s'
      },
      {
        specification: {
          connect: {
            name: 'MaxSpeed'
          }
        },
        value: '249km/h'
      },
      {
        specification: {
          connect: {
            name: 'Horsepower'
          }
        },
        value: '518hp'
      }
    ]
  }
}
